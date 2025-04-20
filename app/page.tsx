"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code, Palette, Video, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import ServiceCard from "@/components/service-card"
import TestimonialSlider from "@/components/testimonial-slider"
import ContactForm from "@/components/contact-form"
import IntroAnimation from "@/components/intro-animation"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const revealRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    revealRefs.current.forEach((ref) => {
      observer.observe(ref)
    })

    return () => {
      revealRefs.current.forEach((ref) => {
        observer.unobserve(ref)
      })
    }
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }


  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      icon: <Code className="h-10 w-10 text-primary" />,
      delay: 0.1,
    },
    {
      title: "Graphic Design",
      description: "Eye-catching visuals that communicate your brand's message effectively.",
      icon: <Palette className="h-10 w-10 text-primary" />,
      delay: 0.2,
    },
    {
      title: "Video & Animation",
      description: "Engaging motion graphics and video content that captivates your audience.",
      icon: <Video className="h-10 w-10 text-primary" />,
      delay: 0.3,
    },
    {
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality for all your digital needs.",
      icon: <Zap className="h-10 w-10 text-primary" />,
      delay: 0.4,
    },
  ]

    // Handle the completion of intro animation
    const handleIntroComplete = () => {
      setShowIntro(false);
    };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

    <div className="overflow-hidden">
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={service.delay}
                addToRefs={addToRefs}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Why Choose <span className="text-accent">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional value through our unique approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background/50 backdrop-blur-sm p-8 rounded-lg border border-border"
            >
              <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Speed</h3>
              <p className="text-muted-foreground">
                We deliver projects faster than traditional agencies without compromising on quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background/50 backdrop-blur-sm p-8 rounded-lg border border-border"
            >
              <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Affordability</h3>
              <p className="text-muted-foreground">
                Competitive pricing that makes premium digital solutions accessible to businesses of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-background/50 backdrop-blur-sm p-8 rounded-lg border border-border"
            >
              <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">All-in-One</h3>
              <p className="text-muted-foreground">
                From web development to branding and video, we handle all your digital needs under one roof.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tailored solutions for various sectors</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-reveal overflow-hidden border-0 bg-transparent">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/real-estate.png?height=600&width=400"
                  alt="Construction industry"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="hover-reveal-content">
                  <h3 className="text-xl font-bold mb-2">Real-Estate</h3>
                  <p className="text-sm text-muted-foreground">
                    Digital solutions for construction companies to showcase projects and services.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="hover-reveal overflow-hidden border-0 bg-transparent">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/web3.png?height=600&width=400"
                  alt="Web3 industry"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="hover-reveal-content">
                  <h3 className="text-xl font-bold mb-2">Web3</h3>
                  <p className="text-sm text-muted-foreground">
                    Patient-focused websites and applications for healthcare providers.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="hover-reveal overflow-hidden border-0 bg-transparent">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/tech.png?height=600&width=400"
                  alt="Tech industry"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="hover-reveal-content">
                  <h3 className="text-xl font-bold mb-2">Tech Industry</h3>
                  <p className="text-sm text-muted-foreground">
                    Engaging digital platforms for educational institutions and e-learning.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/portfolio">
                View Our Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Client <span className="text-accent">Testimonials</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <TestimonialSlider />

          {/* <div className="mt-16">
            <div ref={addToRefs} className="reveal-on-scroll text-center mb-8">
              <h3 className="text-2xl font-bold mb-6">Trusted By</h3>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={`/placeholder.svg?height=60&width=120&text=Client${i}`}
                    alt={`Client ${i}`}
                    width={120}
                    height={60}
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Get <span className="text-primary">Started</span> Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's talk about your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Let's Create Something Amazing</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form and our team will get back to you within 24 hours to discuss your project needs.
              </p>
{/* 
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">              +91 90210 18080
                    </p>
                  </div>
                </div> */}

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">digitalCrashWorks@gmail.com</p>
                  </div>
                </div>
{/* 
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Pune</p>
                  </div>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary/30 backdrop-blur-sm p-8 rounded-lg border border-border"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}