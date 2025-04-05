"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all")
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

  const projects = [
    {
      id: 1,
      title: "BuildRight Construction",
      category: "web-development",
      categoryLabel: "Web Development",
      image: "/placeholder.svg?height=600&width=800",
      description: "A responsive website for a construction company showcasing their projects and services.",
      client: "BuildRight Construction",
      year: "2023",
      link: "#",
    },
    {
      id: 2,
      title: "MediCare Clinic",
      category: "web-development",
      categoryLabel: "Web Development",
      image: "/placeholder.svg?height=600&width=800",
      description: "A patient-focused website with appointment scheduling for a healthcare provider.",
      client: "MediCare Clinic",
      year: "2023",
      link: "#",
    },
    {
      id: 3,
      title: "Bright Future Academy",
      category: "branding",
      categoryLabel: "Branding",
      image: "/placeholder.svg?height=600&width=800",
      description: "Complete brand identity for an educational institution.",
      client: "Bright Future Academy",
      year: "2022",
      link: "#",
    },
    {
      id: 4,
      title: "Fresh Harvest",
      category: "graphic-design",
      categoryLabel: "Graphic Design",
      image: "/placeholder.svg?height=600&width=800",
      description: "Packaging design for an organic food company.",
      client: "Fresh Harvest",
      year: "2023",
      link: "#",
    },
    {
      id: 5,
      title: "TechPro Solutions",
      category: "video-animation",
      categoryLabel: "Video & Animation",
      image: "/placeholder.svg?height=600&width=800",
      description: "Explainer video for a software company's new product.",
      client: "TechPro Solutions",
      year: "2023",
      link: "#",
    },
    {
      id: 6,
      title: "Luxury Living",
      category: "cgi",
      categoryLabel: "CGI",
      image: "/placeholder.svg?height=600&width=800",
      description: "3D visualization for a real estate development project.",
      client: "Luxury Living Real Estate",
      year: "2023",
      link: "#",
    },
    {
      id: 7,
      title: "Urban Apparel",
      category: "branding",
      categoryLabel: "Branding",
      image: "/placeholder.svg?height=600&width=800",
      description: "Brand identity and packaging for a clothing brand.",
      client: "Urban Apparel",
      year: "2022",
      link: "#",
    },
    {
      id: 8,
      title: "Eco Friendly",
      category: "graphic-design",
      categoryLabel: "Graphic Design",
      image: "/placeholder.svg?height=600&width=800",
      description: "Marketing materials for an environmental non-profit.",
      client: "Eco Friendly Foundation",
      year: "2023",
      link: "#",
    },
    {
      id: 9,
      title: "Adventure Tours",
      category: "video-animation",
      categoryLabel: "Video & Animation",
      image: "/placeholder.svg?height=600&width=800",
      description: "Promotional video for a travel company.",
      client: "Adventure Tours",
      year: "2022",
      link: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

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
              Our <span className="text-primary">Portfolio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Explore our latest work across various industries and services
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8 px-4 md:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
              All Projects
            </Button>
            <Button
              variant={filter === "web-development" ? "default" : "outline"}
              onClick={() => setFilter("web-development")}
            >
              Web Development
            </Button>
            <Button
              variant={filter === "graphic-design" ? "default" : "outline"}
              onClick={() => setFilter("graphic-design")}
            >
              Graphic Design
            </Button>
            <Button variant={filter === "branding" ? "default" : "outline"} onClick={() => setFilter("branding")}>
              Branding
            </Button>
            <Button
              variant={filter === "video-animation" ? "default" : "outline"}
              onClick={() => setFilter("video-animation")}
            >
              Video & Animation
            </Button>
            <Button variant={filter === "cgi" ? "default" : "outline"} onClick={() => setFilter("cgi")}>
              CGI
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="hover-reveal overflow-hidden rounded-lg border border-border bg-secondary/10 backdrop-blur-sm">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="hover-reveal-content">
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{project.categoryLabel}</p>
                      <Link
                        href={`/portfolio/${project.id}`}
                        className="inline-flex items-center text-sm font-medium text-primary"
                      >
                        View Project
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No projects found</h3>
              <p className="text-muted-foreground mb-8">
                We don't have any projects in this category yet. Please check back later or explore other categories.
              </p>
              <Button onClick={() => setFilter("all")}>View All Projects</Button>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Featured <span className="text-accent">Case Study</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              An in-depth look at one of our most successful projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-lg overflow-hidden border border-border">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="BuildRight Construction Website"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div ref={addToRefs} className="reveal-on-scroll">
                <h3 className="text-2xl font-bold mb-4">BuildRight Construction Website Redesign</h3>
                <p className="text-muted-foreground mb-6">
                  BuildRight Construction needed a modern website that would showcase their portfolio of projects and
                  services while generating leads from potential clients.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-bold mb-2">The Challenge</h4>
                    <p className="text-muted-foreground">
                      Their existing website was outdated, not mobile-friendly, and failed to effectively showcase their
                      impressive portfolio of construction projects.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-2">Our Approach</h4>
                    <p className="text-muted-foreground">
                      We designed a responsive website with a modern aesthetic that highlighted their work through
                      high-quality imagery and intuitive navigation. We implemented a project gallery with filtering
                      options and integrated a lead generation form.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-2">The Results</h4>
                    <p className="text-muted-foreground">
                      The new website led to a 150% increase in inquiries and a 40% increase in time spent on the site.
                      The client reported that the quality of leads improved significantly.
                    </p>
                  </div>
                </div>

                <Button asChild className="group">
                  <Link href="/portfolio/1" className="flex items-center">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Client <span className="text-primary">Feedback</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">What our clients say about our work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Digital Crash transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their team was responsive, creative, and delivered ahead of schedule.",
                author: "Sarah Johnson",
                position: "Marketing Director, BuildRight Construction",
              },
              {
                quote:
                  "Working with Digital Crash was a game-changer for our healthcare practice. They understood our unique needs and created a website that not only looks professional but also improved our patient engagement significantly.",
                author: "Dr. Michael Chen",
                position: "Founder, MediCare Clinic",
              },
              {
                quote:
                  "The branding package we received from Digital Crash exceeded our expectations. Their team took the time to understand our educational values and created a cohesive brand identity that resonates with students and parents alike.",
                author: "Emily Rodriguez",
                position: "Principal, Bright Future Academy",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/10 backdrop-blur-sm p-6 rounded-lg border border-border"
              >
                <svg className="h-8 w-8 text-primary/50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <p className="mb-6 text-muted-foreground">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
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
                Ready to Start Your <span className="text-primary">Project</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's work together to create something amazing that drives results for your business.
              </p>
              <Button size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Get in Touch
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

