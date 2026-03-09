import { motion } from "framer-motion";
import { slideLeft, slideRight } from "../../animations/animations";

function AnimatedSection({
  eyebrow = "About Our Clinic",
  title = "Compassionate care with modern medical standards",
  description = "Our team provides patient-focused care backed by reliable diagnostics and experienced medical professionals.",
  imageSrc = "/images/maxamed.jpeg",
  imageAlt = "Clinic team member",
}) {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-10 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-700 mb-3">{eyebrow}</p>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">{title}</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">{description}</p>
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg border border-slate-100"
        >
          <img src={imageSrc} alt={imageAlt} className="w-full h-64 md:h-80 object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

export default AnimatedSection;
