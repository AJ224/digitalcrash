"use client"

import { useEffect } from "react"

export default function ScrollAnimation() {
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

    const revealElements = document.querySelectorAll(".reveal-on-scroll")
    revealElements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return null
}

