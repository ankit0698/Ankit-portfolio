export const motionEase = [0.22, 1, 0.36, 1];

export const viewportOnce = {
  once: true,
  amount: 0.2,
};

export const staggerLarge = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.06,
    },
  },
};

export const staggerTight = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

export const revealUp = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: motionEase,
    },
  },
};

export const revealLeft = {
  hidden: {
    opacity: 0,
    x: -32,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: motionEase,
    },
  },
};

export const revealRight = {
  hidden: {
    opacity: 0,
    x: 32,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: motionEase,
    },
  },
};

export const revealScale = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.94,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.74,
      ease: motionEase,
    },
  },
};

export const getRevealProps = (shouldReduceMotion, variants, amount = 0.2) =>
  shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount },
        variants,
      };
