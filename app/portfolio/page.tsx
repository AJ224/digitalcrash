"use client"

import { motion } from "framer-motion"
import { Wrench, Code, Palette, Sparkles } from "lucide-react"

export default function PortfolioPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const iconVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative w-24 h-24 mx-auto mb-8"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0"
              variants={iconVariants}
              initial="initial"
              animate="animate"
            >
              <Wrench className="w-full h-full text-primary" />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            variants={itemVariants}
          >
            Portfolio Under Construction
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            We're crafting something extraordinary. Our portfolio is being built with care and creativity.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="p-6 rounded-lg bg-secondary/30 backdrop-blur-sm border border-border text-left">
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Coding Magic</h3>
              <p className="text-muted-foreground">Writing clean, efficient code for amazing projects</p>
            </div>

            <div className="p-6 rounded-lg bg-secondary/30 backdrop-blur-sm border border-border text-left">
              <Palette className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Design Excellence</h3>
              <p className="text-muted-foreground">Creating beautiful, user-friendly interfaces</p>
            </div>

            <div className="p-6 rounded-lg bg-secondary/30 backdrop-blur-sm border border-border text-left">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">Pushing boundaries with creative solutions</p>
            </div>
          </motion.div>

          <motion.p
            className="mt-12 text-muted-foreground"
            variants={itemVariants}
          >
            Check back soon for our amazing work!
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

