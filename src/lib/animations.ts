export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const rotateIn = {
  hidden: { opacity: 0, rotate: -6, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay },
  }),
}

export const clipReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  visible: (delay = 0) => ({
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const floatVariant = {
  rest: { y: 0 },
  float: {
    y: [-8, 0, -8],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const cardHover = {
  rest: { scale: 1, y: 0, boxShadow: '0 4px 24px rgba(0,0,0,0.2)' },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: '0 16px 48px rgba(232,99,10,0.2)',
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
}

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
}

export const staggerItemFast = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}
