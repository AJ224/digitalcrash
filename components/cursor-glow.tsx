"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isActive) setIsActive(true)
    }

    const handleMouseLeave = () => {
      setIsActive(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isActive])

  return (
    <motion.div
      className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-50 rounded-full opacity-30 mix-blend-screen"
      animate={{
        x: mousePosition.x - 150,
        y: mousePosition.y - 150,
        opacity: isActive ? 0.15 : 0,
        background: "radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, rgba(0, 255, 255, 0) 70%)",
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    />
  )
}

