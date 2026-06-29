import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  href,
}: {
  children: ReactNode
  className?: string
  strength?: number
  href?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  const Tag = href ? 'a' : 'button'

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.div
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      >
        <Tag href={href} className={className}>
          {children}
        </Tag>
      </motion.div>
    </div>
  )
}
