"use client"

import { motion } from "framer-motion"
import type { HTMLAttributes, ReactNode } from "react"

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function Reveal({ children, className, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}



