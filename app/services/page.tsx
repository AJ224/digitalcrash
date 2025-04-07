"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Code, Palette, Video, Layers, PenTool } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ServicesPage() {
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
      id: "web-development",
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      icon: <Code className="h-10 w-10 text-primary" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Responsive website design",
        "E-commerce solutions",
        "Content management systems",
        "Web applications",
        "API integrations",
        "Performance optimization",
      ],
      packages: [
        {
          name: "Basic",
          price: "$1,499",
          features: [
            "5-page responsive website",
            "Mobile-friendly design",
            "Basic SEO setup",
            "Contact form",
            "Social media integration",
            "2 rounds of revisions",
          ],
        },
        {
          name: "Professional",
          price: "$2,999",
          features: [
            "10-page responsive website",
            "Custom design",
            "Advanced SEO setup",
            "Content management system",
            "Blog setup",
            "Google Analytics integration",
            "3 rounds of revisions",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Unlimited pages",
            "Custom web application",
            "E-commerce functionality",
            "Custom integrations",
            "Advanced analytics",
            "Ongoing support",
            "Unlimited revisions",
          ],
        },
      ],
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      description: "Eye-catching visuals that communicate your brand's message effectively.",
      icon: <Palette className="h-10 w-10 text-primary" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Logo design",
        "Brand identity",
        "Print materials",
        "Digital assets",
        "Social media graphics",
        "Packaging design",
      ],
      packages: [
        {
          name: "Basic",
          price: "$499",
          features: [
            "Logo design (3 concepts)",
            "Business card design",
            "Social media profile images",
            "2 rounds of revisions",
          ],
        },
        {
          name: "Professional",
          price: "$999",
          features: [
            "Logo design (5 concepts)",
            "Complete brand identity",
            "Business cards and letterhead",
            "Social media kit",
            "Brand guidelines",
            "3 rounds of revisions",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Comprehensive brand identity",
            "Full marketing collateral",
            "Packaging design",
            "Trade show materials",
            "Ongoing design support",
            "Unlimited revisions",
          ],
        },
      ],
    },
    {
      id: "branding",
      title: "Branding",
      description: "Comprehensive brand identity development to establish a strong market presence.",
      icon: <Layers className="h-10 w-10 text-primary" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Brand strategy",
        "Visual identity",
        "Brand guidelines",
        "Brand messaging",
        "Brand positioning",
        "Brand experience",
      ],
      packages: [
        {
          name: "Basic",
          price: "$999",
          features: [
            "Brand discovery session",
            "Logo design",
            "Color palette",
            "Typography selection",
            "Basic brand guidelines",
            "2 rounds of revisions",
          ],
        },
        {
          name: "Professional",
          price: "$2,499",
          features: [
            "Comprehensive brand strategy",
            "Logo design with variations",
            "Complete visual identity",
            "Brand voice and messaging",
            "Detailed brand guidelines",
            "Social media strategy",
            "3 rounds of revisions",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "In-depth market research",
            "Competitive analysis",
            "Complete brand identity system",
            "Brand storytelling",
            "Customer journey mapping",
            "Implementation strategy",
            "Unlimited revisions",
          ],
        },
      ],
    },
    {
      id: "video-animation",
      title: "Video & Animation",
      description: "Engaging motion graphics and video content that captivates your audience.",
      icon: <Video className="h-10 w-10 text-primary" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Explainer videos",
        "Motion graphics",
        "Product demonstrations",
        "Corporate videos",
        "Social media content",
        "Animated logos",
      ],
      packages: [
        {
          name: "Basic",
          price: "$799",
          features: [
            "30-second animation",
            "Script writing",
            "Voice-over",
            "Background music",
            "2 rounds of revisions",
          ],
        },
        {
          name: "Professional",
          price: "$1,999",
          features: [
            "60-second animation",
            "Script writing",
            "Professional voice-over",
            "Custom music",
            "Sound effects",
            "3 rounds of revisions",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Custom length video",
            "Advanced animation",
            "Multiple style options",
            "Premium voice talent",
            "Custom sound design",
            "Unlimited revisions",
          ],
        },
      ],
    },
    {
      id: "cgi",
      title: "CGI",
      description: "Photorealistic 3D visualizations and animations for products and environments.",
      icon: <PenTool className="h-10 w-10 text-primary" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "3D product visualization",
        "Architectural visualization",
        "Product animations",
        "Virtual environments",
        "Concept visualization",
        "Interactive 3D",
      ],
      packages: [
        {
          name: "Basic",
          price: "$999",
          features: [
            "Single product visualization",
            "3 camera angles",
            "Basic lighting and materials",
            "High-resolution renders",
            "2 rounds of revisions",
          ],
        },
        {
          name: "Professional",
          price: "$2,499",
          features: [
            "Multiple product visualization",
            "5 camera angles",
            "Advanced lighting and materials",
            "Environment setup",
            "High-resolution renders",
            "3 rounds of revisions",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: [
            "Complex product or environment",
            "Unlimited camera angles",
            "Photorealistic rendering",
            "Animation sequences",
            "Interactive 3D options",
            "Unlimited revisions",
          ],
        },
      ],
    },
  ]

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
              Our <span className="text-primary">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Comprehensive digital solutions tailored for businesses of all sizes
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:border-primary/50 transition-all duration-300 bg-secondary/10 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="w-full group">
                      <Link href={`/services/${service.id}`} className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          id={service.id}
          className={`py-20 px-4 md:px-6 lg:px-8 ${index % 2 === 1 ? "bg-secondary/30" : ""}`}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`order-2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div ref={addToRefs} className="reveal-on-scroll">
                  <h2 className="text-3xl md:text-4xl font-heading mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-bold">Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="group">
                    <Link href="/contact" className="flex items-center">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`order-1 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="relative rounded-lg overflow-hidden border border-border">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Professional solutions for businesses of all sizes
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Pricing Packages */}
            {/* <div ref={addToRefs} className="reveal-on-scroll mt-20">
              <h3 className="text-2xl font-bold mb-8 text-center">Pricing Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.packages.map((pkg, i) => (
                  <Card
                    key={i}
                    className="bg-secondary/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
                      <p className="text-2xl font-bold text-primary mb-6">{pkg.price}</p>
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, j) => (
                          <li key={j} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full">Select Package</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div> */}
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-background/50 backdrop-blur-sm rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left">
                  How long does it typically take to complete a project?
                </AccordionTrigger>
                <AccordionContent>
                  Project timelines vary depending on the scope and complexity. A basic website typically takes 2-4
                  weeks, while more complex projects like e-commerce sites or custom web applications may take 6-12
                  weeks. We'll provide a detailed timeline during our initial consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-background/50 backdrop-blur-sm rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left">Do you offer ongoing maintenance and support?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer various maintenance and support packages to keep your digital assets running smoothly.
                  These include regular updates, security monitoring, content updates, and technical support. We can
                  customize a maintenance plan based on your specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-background/50 backdrop-blur-sm rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left">How do you handle revisions and feedback?</AccordionTrigger>
                <AccordionContent>
                  We believe in collaborative development and welcome your feedback throughout the project. Each package
                  includes a specific number of revision rounds. We use a structured feedback process to ensure your
                  input is incorporated effectively while keeping the project on schedule.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-background/50 backdrop-blur-sm rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left">
                  Can you work with my existing brand guidelines?
                </AccordionTrigger>
                <AccordionContent>
                  We're experienced in working with established brand guidelines and can ensure all deliverables align
                  with your existing brand identity. If you don't have formal guidelines, we can help develop them as
                  part of our branding services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-background/50 backdrop-blur-sm rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left">What is your payment structure?</AccordionTrigger>
                <AccordionContent>
                  We typically require a 50% deposit to begin work, with the remaining balance due upon project
                  completion. For larger projects, we may establish a milestone-based payment schedule. We accept
                  various payment methods including credit cards, bank transfers, and PayPal.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
                Ready to Get <span className="text-primary">Started</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project and how we can help bring your vision to life.
              </p>
              <Button size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Contact Us
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

