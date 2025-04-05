"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function AboutPage() {
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-float-delay-1" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6"
            >
              About <span className="text-primary">Digital Crash</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              We're a full-service creative and development agency dedicated to delivering affordable, fast, and
              high-quality digital solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div ref={addToRefs} className="reveal-on-scroll">
                <h2 className="text-3xl md:text-4xl font-heading mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To democratize access to high-quality digital solutions by providing affordable, fast, and
                  professional creative and development services to businesses of all sizes.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe that every business deserves access to exceptional digital solutions that drive growth and
                  success, regardless of their size or budget.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div ref={addToRefs} className="reveal-on-scroll">
                <h2 className="text-3xl md:text-4xl font-heading mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To become the go-to creative partner for non-tech industries seeking to elevate their digital presence
                  through innovative, accessible, and impactful solutions.
                </p>
                <p className="text-lg text-muted-foreground">
                  We envision a world where every business can compete effectively in the digital landscape with
                  beautiful, functional, and strategic digital assets.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse group of creative professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Crash Director",
                image: "/placeholder.svg?height=400&width=400",
                delay: 0.1,
              },
              {
                name: "Jamie Chen",
                role: "Lead Developer",
                image: "/placeholder.svg?height=400&width=400",
                delay: 0.2,
              },
              {
                name: "Taylor Wilson",
                role: "Design Lead",
                image: "/placeholder.svg?height=400&width=400",
                delay: 0.3,
              },
              {
                name: "Jordan Smith",
                role: "Project Manager",
                image: "/placeholder.svg?height=400&width=400",
                delay: 0.4,
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: member.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="space-y-2">
                      <div className="flex space-x-3">
                        <a href="#" className="text-foreground hover:text-primary transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                        <a href="#" className="text-foreground hover:text-primary transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a href="#" className="text-foreground hover:text-primary transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border hidden md:block" />

            <div className="space-y-12 relative">
              {[
                {
                  step: 1,
                  title: "Discovery",
                  description:
                    "We start by understanding your business, goals, and target audience to create a tailored strategy.",
                  align: "right",
                  delay: 0.1,
                },
                {
                  step: 2,
                  title: "Planning",
                  description:
                    "Our team develops a comprehensive plan outlining timelines, deliverables, and key milestones.",
                  align: "left",
                  delay: 0.2,
                },
                {
                  step: 3,
                  title: "Design & Development",
                  description: "We bring your vision to life through creative design and robust development.",
                  align: "right",
                  delay: 0.3,
                },
                {
                  step: 4,
                  title: "Testing & Refinement",
                  description: "Rigorous testing ensures everything works flawlessly before launch.",
                  align: "left",
                  delay: 0.4,
                },
                {
                  step: 5,
                  title: "Launch & Support",
                  description: "We launch your project and provide ongoing support to ensure continued success.",
                  align: "right",
                  delay: 0.5,
                },
              ].map((process, index) => (
                <div key={index} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: process.align === "left" ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: process.delay }}
                    viewport={{ once: true }}
                    className={`md:w-1/2 ${process.align === "left" ? "md:ml-auto" : "md:mr-auto"} ${process.align === "left" ? "md:pl-12" : "md:pr-12"}`}
                  >
                    <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-border shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="font-bold text-accent">{process.step}</span>
                        </div>
                        <h3 className="text-xl font-bold">{process.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{process.description}</p>
                    </div>
                  </motion.div>

                  {/* Timeline Circle */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "Construction",
                description: "Digital solutions for construction companies to showcase projects and services.",
                features: ["Responsive websites", "Project galleries", "Service showcases", "Client testimonials"],
                delay: 0.1,
              },
              {
                industry: "Healthcare",
                description: "Patient-focused websites and applications for healthcare providers.",
                features: ["Appointment scheduling", "Patient portals", "Service information", "Provider directories"],
                delay: 0.2,
              },
              {
                industry: "Education",
                description: "Engaging digital platforms for educational institutions and e-learning.",
                features: ["Course catalogs", "Student portals", "Interactive learning tools", "Virtual tours"],
                delay: 0.3,
              },
              {
                industry: "Retail",
                description: "E-commerce solutions and digital marketing for retail businesses.",
                features: ["Online stores", "Product catalogs", "Payment processing", "Inventory management"],
                delay: 0.4,
              },
              {
                industry: "Hospitality",
                description: "Engaging websites and booking systems for hotels, restaurants, and tourism.",
                features: ["Booking systems", "Virtual tours", "Menu displays", "Event calendars"],
                delay: 0.5,
              },
              {
                industry: "Professional Services",
                description: "Professional websites for law firms, accounting firms, and consultancies.",
                features: ["Service descriptions", "Team profiles", "Client portals", "Case studies"],
                delay: 0.6,
              },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: industry.delay }}
                viewport={{ once: true }}
                className="bg-secondary/10 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{industry.industry}</h3>
                <p className="text-muted-foreground mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
                Ready to Transform Your <span className="text-primary">Digital Presence</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's work together to create something amazing that drives results for your business.
              </p>
              <Button size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

