import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const data = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      phone: e.target.phone.value.trim(),
      message: e.target.message.value.trim(),
    };

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "Failed to send message");
      }

      setStatus({ type: "success", message: payload.message || "Message sent!" });
      e.target.reset();
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <div className="bg-[#f5f7fb]">
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="bg-gradient-to-r from-[#eef5ff] via-[#edf8f4] to-[#ebf3ff]"
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs uppercase tracking-wider text-blue-600 font-semibold mb-3">
            Contact Caawiye
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">Get In Touch</h1>
          <p className="max-w-2xl text-slate-600">
            We are here to support your health needs. Reach out for
            emergency guidance, or general inquiries.
          </p>
        </div>
      </motion.section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-6">
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ y: -8 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <p className="text-blue-600 text-sm font-semibold mb-2">Phone</p>
          <h3 className="text-xl font-bold text-slate-900 mb-1">+252 61 000 0000</h3>
          <p className="text-sm text-slate-600">Call us anytime for urgent support.</p>
        </motion.article>
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ y: -8 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <p className="text-blue-600 text-sm font-semibold mb-2">Location</p>
          <h3 className="text-xl font-bold text-slate-900 mb-1">Hodan, Mogadishu</h3>
          <p className="text-sm text-slate-600">Near Taleex road, easy parking available.</p>
        </motion.article>
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ y: -8 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <p className="text-blue-600 text-sm font-semibold mb-2">Email</p>
          <h3 className="text-xl font-bold text-slate-900 mb-1">contact@caawiyeclinic.com</h3>
          <p className="text-sm text-slate-600">We reply within one business day.</p>
        </motion.article>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="bg-white rounded-2xl p-7 shadow-sm"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              required
              placeholder="How can we help you?"
              rows="5"
              className="border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 w-full sm:w-fit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
          {status.message && (
            <p
              className={`mt-4 ${status.type === "error" ? "text-red-600" : "text-green-700"
                }`}
            >
              {status.message}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-6"
        >
          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-7 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Opening Hours</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex justify-between border-b border-slate-100 pb-2">
                <span>Monday - Friday</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-2">
                <span>Saturday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Emergency Only</span>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
              alt="Medical staff at clinic"
              className="w-full h-[220px] sm:h-[280px] object-cover"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;
