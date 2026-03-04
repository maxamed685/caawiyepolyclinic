import express from "express";
import nodemailer from "nodemailer";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fallbackFile = path.join(__dirname, "..", "data", "contact.fallback.json");

function sanitize(value) {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim();
}

async function saveFallbackMessage(payload) {
  let existing = [];

  try {
    const content = await fs.readFile(fallbackFile, "utf8");
    existing = JSON.parse(content);
    if (!Array.isArray(existing)) {
      existing = [];
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  existing.push({
    ...payload,
    _fallback: true,
    createdAt: new Date().toISOString(),
  });

  await fs.writeFile(fallbackFile, JSON.stringify(existing, null, 2));
}

router.post("/contact", async (req, res) => {
  const name = sanitize(req.body.name);
  const email = sanitize(req.body.email);
  const phone = sanitize(req.body.phone);
  const message = sanitize(req.body.message);
  const payload = { name, email, phone, message };

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      await saveFallbackMessage(payload);
      return res.status(202).json({
        success: true,
        message: "Message captured, but SMTP is not configured.",
      });
    }

    const smtpPort = Number(process.env.SMTP_PORT);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: "New Contact Message",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    await saveFallbackMessage(payload);
    res.status(500).json({
      success: false,
      message: `Email failed: ${error.message}`,
    });
  }
});

export default router;
