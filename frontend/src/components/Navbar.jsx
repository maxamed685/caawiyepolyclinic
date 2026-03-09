import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { fadeUp, staggerContainer } from "../lib/motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 md:gap-4" onClick={() => setMenuOpen(false)}>
          <span className="grid h-14 w-14 place-items-center rounded-xl border border-slate-200 bg-white shadow-sm ring-2 ring-green-100 md:h-16 md:w-16 animate-glow">
            <img
              src={logo}
              alt="Caawiye Polyclinic Logo"
              className="h-10 w-10 object-contain md:h-12 md:w-12"
              decoding="async"
              fetchPriority="high"
            />
          </span>
          <span className="text-sm sm:text-base md:text-3xl font-black tracking-tight text-green-600">
            CAAWIYE POLYCLINIC.LTD
          </span>
        </Link>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-700"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={menuOpen ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center gap-2"
        >
          {links.map((link) => (
            <motion.div key={link.to} variants={fadeUp} whileHover={{ y: -2 }}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-base font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-t border-slate-200 bg-white px-6 overflow-hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-2 py-3"
            >
              {links.map((link) => (
                <motion.div key={link.to} variants={fadeUp}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-700"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
