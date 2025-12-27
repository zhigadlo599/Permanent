"use client"

import { motion, Variants } from "framer-motion"
import type { HTMLAttributes, ReactNode } from "react"

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function ScrollReveal({ children, className, ...props }: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={defaultVariants}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}


