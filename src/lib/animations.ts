import type { Variants } from 'motion/react'

export const EASE_EXPO_OUT = [0.16, 1, 0.3, 1] as const
export const EASE_CIRC_OUT = [0, 0.55, 0.45, 1] as const
export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.85, ease: EASE_EXPO_OUT }
  }
}

export const staggerContainer = (
  stagger = 0.08,
  delay = 0.0
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay }
  }
})

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.975 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease: EASE_SMOOTH }
  }
}

export const wordVariants: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { duration: 0.82, ease: EASE_EXPO_OUT }
  }
}
