"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    content:
      "Digital Crash transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their team was responsive, creative, and delivered ahead of schedule.",
    author: "Sarah Johnson",
    position: "Marketing Director, BuildRight Construction",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    content:
      "Working with Digital Crash was a game-changer for our healthcare practice. They understood our unique needs and created a website that not only looks professional but also improved our patient engagement significantly.",
    author: "Dr. Michael Chen",
    position: "Founder, MediCare Clinic",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    content:
      "The branding package we received from Digital Crash exceeded our expectations. Their team took the time to understand our educational values and created a cohesive brand identity that resonates with students and parents alike.",
    author: "Emily Rodriguez",
    position: "Principal, Bright Future Academy",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [current, autoplay])

  const handleMouseEnter = () => {
    setAutoplay(false)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleMouseLeave = () => {
    setAutoplay(true)
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="overflow-hidden relative h-[300px] md:h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center">
                  <Quote className="h-12 w-12 text-primary/50 mb-6" />
                  <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">{testimonials[current].content}</p>
                  <div className="flex flex-col items-center">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                      <Image
                        src={testimonials[current].avatar || "/placeholder.svg"}
                        alt={testimonials[current].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-bold">{testimonials[current].author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[current].position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-primary w-6" : "bg-muted"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}

export default TestimonialSlider

