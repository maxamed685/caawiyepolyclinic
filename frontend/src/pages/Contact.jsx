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
    <div className="bg-[#f3f7f5]">
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="bg-[linear-gradient(112deg,#085625_0%,#0aa45a_56%,#7ce7ca_100%)]"
      >
        <div className="site-container section-space-tight">
          <p className="text-xs uppercase tracking-wider text-emerald-100 font-semibold mb-3">
            Contact Caawiye
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Get In Touch</h1>
          <p className="max-w-2xl text-emerald-50">
            We are here to support your health needs. Reach out for
            emergency guidance, or general inquiries.
          </p>
        </div>
      </motion.section>

      <section className="site-container section-space-tight grid lg:grid-cols-3 gap-6">
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ y: -8 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <p className="text-blue-600 text-sm font-semibold mb-2">Phone</p>
          <h3 className="text-xl font-bold text-slate-900 mb-1">+252 61 5517681</h3>
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
          <h3 className="text-xl font-bold text-slate-900 mb-1">Wadajir, Mogadishu</h3>
          <p className="text-sm text-slate-600">WADAJIR DISTRICT, JAALE SIYAAD ROAD, EX BARAKAAT Mogadishu.</p>
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

      <section className="site-container section-space pt-0 grid lg:grid-cols-2 gap-8">
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
                <span>Friday</span>
                <span>12:00 PM - 9:00 PM</span>
              </li>
              
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2099.0967834684593!2d45.28592224527284!3d2.0229552966901116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWADAJIR%20DISTRICT%2C%20JAALE%20SIYAAD%20ROAD%2C%20EX%20BARAKAAT%20Mogadishu!5e0!3m2!1sen!2sso!4v1777056129131!5m2!1sen!2sso"
              title="Caawiye Poly Clinic location map"
              className="w-full h-[220px] sm:h-[280px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;
