"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
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
              Get in <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              We'd love to hear from you. Reach out to discuss your project or ask any questions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-border"
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">
                Pune
                {/* <br />
                New York, NY 10001
                <br />
                United States */}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-border"
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground">
              +91 90210 18080
                {/* <br />
                +1 (555) 987-6543 */}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-border"
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground">
              digitalCrashWorks@gmail.com
                {/* <br />
                support@sigmacreative.com */}
              </p>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-border"
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Working Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9am - 6pm
                <br />
                Saturday: 10am - 2pm
                <br />
                Sunday: Closed
              </p>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div ref={addToRefs} className="reveal-on-scroll">
                <h2 className="text-3xl md:text-4xl font-heading mb-6">Let's Discuss Your Project</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Fill out the form and our team will get back to you within 24 hours to discuss your project needs.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3">How We Can Help</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Website design and development</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Brand identity and logo design</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Video production and animation</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>3D visualization and CGI</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Digital marketing and SEO</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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

      {/* Map Section */}
      {/* <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Find <span className="text-primary">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit our office to meet the team and discuss your project in person
            </p>
          </div>

          <div className="rounded-lg overflow-hidden border border-border h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Digital Crash office location"
            ></iframe>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div ref={addToRefs} className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answers to common questions about working with us
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What information do you need to provide a quote?",
                  answer:
                    "To provide an accurate quote, we typically need to understand your project goals, target audience, desired features or deliverables, timeline, and budget range. The more details you can provide, the more precise our estimate will be.",
                },
                {
                  question: "How long does it take to complete a typical project?",
                  answer:
                    "Project timelines vary depending on the scope and complexity. A basic website typically takes 2-4 weeks, while more complex projects like e-commerce sites or custom web applications may take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
                },
                {
                  question: "Do you offer ongoing maintenance and support?",
                  answer:
                    "Yes, we offer various maintenance and support packages to keep your digital assets running smoothly. These include regular updates, security monitoring, content updates, and technical support.",
                },
                {
                  question: "What is your payment structure?",
                  answer:
                    "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we may establish a milestone-based payment schedule.",
                },
                {
                  question: "Can we meet in person to discuss our project?",
                  answer:
                    "We welcome in-person meetings at our office in New York. We also offer virtual consultations via Zoom or other platforms for clients who prefer remote collaboration.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary/10 backdrop-blur-sm p-6 rounded-lg border border-border"
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

