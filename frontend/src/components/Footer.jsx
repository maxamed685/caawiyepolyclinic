import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="bg-[#081933] text-slate-200"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 text-center md:text-left"
      >
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-bold mb-3">CAAWIYE</h3>
          <p className="text-sm text-slate-300 leading-6">
            Providing world-class medical services since 2015. Our mission is
            to enhance the health and quality of life for our community.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="font-semibold mb-3">Contact Info</h4>
          <ul className="text-sm text-slate-300 space-y-2 break-words">
            <li>WADAJIR DISTRICT, JAALE SIYAAD ROAD, EX BARAKAAT, Mogadishu, Somalia
              </li>
            <li>+252 615 517681</li>
            <li>contact@caawiyeclinic.com</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="font-semibold mb-3">Social Media</h4>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>
              <motion.a
                href="https://www.youtube.com/@CAAWIYE-z5f"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-1"
                whileHover={{ x: 4, scale: 1.02 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5v-7L16 12l-6.4 3.5Z" />
                </svg>
                YouTube
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.tiktok.com/@caawiye_polyclinic2?_r=1&_t=ZS-94Wf77lNPKy"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-1"
                whileHover={{ x: 4, scale: 1.02 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path d="M14.2 3h3a5.8 5.8 0 0 0 3.8 3.8v3a8.8 8.8 0 0 1-3.8-1.2v6.2a6.8 6.8 0 1 1-5.8-6.7v3a3.8 3.8 0 1 0 2.8 3.7V3Z" />
                </svg>
                TikTok
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.facebook.com/share/18D1bXXk4F/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-1"
                whileHover={{ x: 4, scale: 1.02 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7v-3.5h3.1V9.3c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.4l-.5 3.5h-2.9V24A12 12 0 0 0 24 12Z" />
                </svg>
                Facebook
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://wa.me/252615517681"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-1"
                whileHover={{ x: 4, scale: 1.02 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-5.9c-.2-.1-1.3-.7-1.5-.8-.2-.1-.3-.1-.4.1l-.6.8c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-2-1.2 7.2 7.2 0 0 1-1.3-1.7c-.1-.2 0-.3.1-.4l.4-.5.2-.3v-.4c0-.1-.4-1.1-.6-1.5-.2-.4-.3-.3-.4-.3H9.4c-.2 0-.4.1-.5.3-.2.2-.7.7-.7 1.8s.8 2.1.9 2.2c.1.2 1.5 2.3 3.7 3.1.5.2.9.3 1.2.4.5.2 1 .2 1.4.1.4-.1 1.3-.5 1.5-1 .2-.6.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" />
                </svg>
                WhatssApp
              </motion.a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-slate-400 text-center">
          © 2026 Caawiye Polyclinic Ltd. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
