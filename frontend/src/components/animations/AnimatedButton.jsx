import { motion } from "framer-motion";
import { buttonPress, hoverScale } from "../../animations/animations";

function AnimatedButton({
  children,
  type = "button",
  onClick,
  className = "",
  ariaLabel,
  disabled = false,
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={disabled ? undefined : hoverScale}
      whileTap={disabled ? undefined : buttonPress}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-xl bg-blue-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 min-h-12 shadow-md hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButton;
