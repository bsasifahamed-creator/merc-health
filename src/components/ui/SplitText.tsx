import { motion } from 'motion/react'
import { wordVariants, staggerContainer } from '@/lib/animations'

interface SplitTextProps {
  text: string
  className?: string
  stagger?: number
  delay?: number
  goldWord?: string
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p'
}

export function SplitText({
  text, className = '', stagger = 0.06, delay = 0, goldWord, as: Tag = 'h2'
}: SplitTextProps) {
  const words = text.split(' ')

  return (
    <Tag
      className={className}
    >
      <motion.span
        variants={staggerContainer(stagger, delay)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.06em] mr-[0.26em]">
            <motion.span
              variants={wordVariants}
              className={`inline-block ${word === goldWord ? 'text-gold italic' : ''}`}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
