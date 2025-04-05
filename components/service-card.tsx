"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  delay: number
  addToRefs: (el: HTMLElement | null) => void
}

const ServiceCard = ({ title, description, icon, delay, addToRefs }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card
        ref={addToRefs}
        className="reveal-on-scroll group hover:border-primary/50 transition-all duration-300 overflow-hidden bg-secondary/10 backdrop-blur-sm"
      >
        <CardContent className="p-6">
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
          <Link
            href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-flex items-center text-sm font-medium text-primary"
          >
            Learn More
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ServiceCard

