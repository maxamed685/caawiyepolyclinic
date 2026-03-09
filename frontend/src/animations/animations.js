const isSmallScreen =
  typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;

const xOffset = isSmallScreen ? 40 : 80;
const yOffset = isSmallScreen ? 30 : 60;

export const slideLeft = {
  hidden: { opacity: 0, x: -xOffset },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: xOffset },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: yOffset },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: isSmallScreen ? 0.16 : 0.25,
    },
  },
};

export const hoverScale = {
  scale: 1.08,
  transition: { type: "spring", stiffness: 320, damping: 20 },
};

export const buttonPress = {
  scale: 0.95,
  transition: { type: "spring", stiffness: 480, damping: 28 },
};
