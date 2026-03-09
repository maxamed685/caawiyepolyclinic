import { motion } from "framer-motion";
import { fadeUp } from "../../animations/animations";

function HeroAnimation({
  title = "Quality Healthcare You Can Trust",
  subtitle = "Professional consultations, diagnostics, and pharmacy support designed for families and individuals.",
  imageSrc = "/images/hero.png",
  imageAlt = "Doctor portrait in clinic",
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-gradient-to-r from-[#f2f5ff] via-[#edf8f4] to-[#eaf4ff] px-4 md:px-10 py-12 md:py-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-600 max-w-xl mx-auto lg:mx-0">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl border border-slate-100"
        >
          <img src={imageSrc} alt={imageAlt} className="w-full h-64 md:h-80 object-cover" />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroAnimation;
