"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Spline from '@splinetool/react-spline'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen max-h-screen flex items-center pt-80 lg:pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-float-delay-1" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl opacity-30 animate-float-delay-2" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-20" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 min-h-screen ">

      {/* <div className="container mx-auto px-4 md:px-6 relative z-10"> */}
        {/* Mobile 3D model background (shown behind text on mobile only) */}
        {/* <div className="absolute inset-0 flex items-center justify-center z-10 lg:flex">

          <Spline 
            scene="https://prod.spline.design/P6tALDsk7oCbimm6/scene.splinecode" 
            width={400}
            height={400}
className="max-w-full opacity-100"
          />
        </div> */}
<div className="absolute inset-0 w-full h-full z-0 transform -translate-y-60 lg:hidden">
<Spline 
  scene="https://prod.spline.design/P6tALDsk7oCbimm6/scene.splinecode"
  className="w-full h-full max-w-full opacity-100"
/>

</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content section with increased contrast for mobile */}
          <div className="z-20 relative"> 
            {/* Semi-transparent backdrop for better text readability on mobile */}
            <div className="absolute inset-0 bg-background/50 backdrop-blur-sm rounded-lg -m-4 p-4 lg:hidden"></div>
            
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading leading-tight mb-6">
                Bringing Your <span className="text-primary">Digital Vision</span> To Life
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Full-service creative and development agency delivering affordable, fast, and high-quality digital
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  <Link href="/contact" className="flex items-center">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Desktop 3D model (only visible on desktop) */}
          <div className="relative hidden lg:flex items-center justify-center">

            <Spline 
              scene="https://prod.spline.design/P6tALDsk7oCbimm6/scene.splinecode" 
              width={500}
              height={500}
              className="max-w-full"
            />

            {/* Floating Elements */}
            <div className="absolute -bottom-8 -left-8 bg-secondary/80 backdrop-blur-sm p-4 rounded-lg border border-border shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-secondary/80 backdrop-blur-sm p-4 rounded-lg border border-border shadow-lg animate-float-delay-1">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection