import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, animate, useMotionValue, useTransform } from 'motion/react'

export function CounterStat({
  value,
  suffix = '',
  prefix = '',
  label,
  isInfinity = false,
}: {
  value: number
  suffix?: string
  prefix?: string
  label: string
  isInfinity?: boolean
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, { duration: 2.2, ease: 'easeOut' })
    return controls.stop
  }, [inView, count, value])

  return (
    <div ref={ref} className="border-t border-[rgba(201,168,76,0.2)] pt-4 sm:pt-5">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-heading text-[2rem] sm:text-[2.6rem] font-light text-gold block leading-none"
      >
        {isInfinity ? '\u221E' : (
          <>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
          </>
        )}
      </motion.span>
      <span className="text-[0.6rem] sm:text-[0.72rem] tracking-[0.1em] uppercase text-muted mt-1 sm:mt-2 block font-mono leading-tight">
        {label}
      </span>
    </div>
  )
}
