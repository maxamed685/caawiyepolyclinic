import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/animations";

function AnimatedCard({ cards = [] }) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 md:px-10 py-12 md:py-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {cards.map((card) => (
          <motion.article
            key={card.title}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 md:p-6"
          >
            <h3 className="text-lg md:text-xl font-semibold text-slate-900">{card.title}</h3>
            <p className="mt-2 text-sm md:text-base text-slate-600">{card.description}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default AnimatedCard;
