import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { fadeUp } from './motion'

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-80px' }}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut', delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
