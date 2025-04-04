"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Define types for our project data
interface ProjectData {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

// Define props for our ProjectCard component
interface ProjectCardProps {
  project: ProjectData;
  isActive: boolean;
}

export default function Home() {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1.5);
  const totalSlides = 4; // Total number of project cards

  // Update slidesPerView based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setSlidesPerView(1.5);
      } else if (window.innerWidth > 768) {
        setSlidesPerView(1.3);
      } else {
        setSlidesPerView(1.1);
      }
    };

    // Initial call
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getProjectData = (index: number): ProjectData => {
    const projects: ProjectData[] = [
      {
        title: "Darwin's Sandbox",
        description: "An evolutionary simulation platform that demonstrates natural selection principles through interactive visualizations. Users can modify environmental parameters and observe how species adapt over generations.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        tags: ["React", "TypeScript", "Canvas API"]
      },
      {
        title: "Weather Dashboard",
        description: "A comprehensive weather application that provides real-time forecasts, interactive maps, and historical weather data analysis. Features include location-based forecasts and severe weather alerts.",
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        tags: ["JavaScript", "API Integration", "Chart.js"]
      },
      {
        title: "Task Manager",
        description: "A productivity application designed to help users organize tasks, set priorities, and track progress with intuitive visualizations. Includes collaborative features and deadline reminders.",
        icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
        tags: ["React", "Firebase", "Material UI"]
      },
      {
        title: "E-commerce Platform",
        description: "A full-featured online shopping platform with secure payment processing, inventory management, and customer analytics. Includes a responsive design and personalized recommendation engine.",
        icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
        tags: ["Next.js", "Stripe", "MongoDB"]
      }
    ];
    
    return projects[index % totalSlides];
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-background-primary border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary">Ryan Smith</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#about" className="text-text-secondary hover:text-primary transition-colors">About</Link>
              <Link href="#projects" className="text-text-secondary hover:text-primary transition-colors">Projects</Link>
              <Link href="#contact" className="text-text-secondary hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-text-light flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-20">
          <h1 className="text-5xl font-bold mb-6">Welcome to My Website</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">I'm a passionate developer building amazing things with modern technologies</p>
          <Link href="#about" className="bg-text-light text-primary hover:bg-secondary-light transition-colors py-3 px-6 rounded-md font-medium">
            Learn More
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-background-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block h-1 w-20 bg-primary rounded mb-4"></span>
            <h2 className="text-3xl font-bold text-primary">About Me</h2>
          </div>
          <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto">
            I'm a software developer with a passion for creating beautiful and functional applications.
            I specialize in web development and love working with modern technologies.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-background-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block h-1 w-20 bg-primary rounded mb-4"></span>
            <h2 className="text-3xl font-bold text-primary">My Projects</h2>
          </div>
          
          {/* Project cards with Swiper */}
          <div className="max-w-full w-full mx-auto">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={slidesPerView}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 250,
                modifier: 0.8,
                slideShadows: false,
              }}
              initialSlide={1}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              className="swiper-container"
              touchMoveStopPropagation={true}
              simulateTouch={true}
              threshold={10}
            >
              {Array.from({ length: totalSlides }).map((_, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <ProjectCard 
                    project={getProjectData(index)}
                    isActive={index === currentSlide}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-background-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block h-1 w-20 bg-primary rounded mb-4"></span>
            <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
          </div>
          <div className="max-w-md mx-auto">
            <p className="text-lg text-text-secondary text-center mb-8">
              Feel free to reach out to me through any of these channels:
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:your.email@example.com" className="text-primary hover:text-primary-light transition-colors">
                Email
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-dark text-text-light py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Ryan Smith. All rights reserved.</p>
        </div>
      </footer>

      {/* Swiper Custom Styles */}
      <style jsx global>{`
        .swiper-container {
          width: 100%;
          padding: 70px 60px 80px;
          overflow: visible !important;
          position: relative;
          z-index: 1;
        }
        
        .swiper-wrapper {
          padding: 20px 0;
          overflow: visible;
        }
        
        .swiper-slide {
          width: 700px;
          height: 600px;
          background-position: center;
          background-size: cover;
          transition: all 700ms ease;
          filter: brightness(0.85) blur(0px);
          transform: scale(0.75);
          opacity: 0.85;
        }
        
        .swiper-slide-active {
          filter: brightness(1) blur(0px);
          transform: scale(1);
          opacity: 1;
          z-index: 10;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .swiper-slide-prev,
        .swiper-slide-next {
          opacity: 0.9;
          filter: brightness(0.9) blur(0px);
          z-index: 5;
        }
        
        @media (max-width: 1200px) {
          .swiper-slide {
            width: 550px;
          }
        }
        
        @media (max-width: 768px) {
          .swiper-slide {
            width: 350px;
          }
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          color: var(--primary) !important;
          background: rgba(255, 255, 255, 0.8);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 50%;
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
        }
        
        .swiper-pagination-bullet {
          background: var(--primary);
          opacity: 0.5;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
        }

        /* Apply these fixes for horizontal scrolling */
        html, body {
          overflow-x: hidden;
          position: relative;
          width: 100%;
        }
        
        #projects {
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, isActive }: ProjectCardProps) {
  return (  
    <div 
      className="bg-background-primary p-8 sm:p-10 shadow-lg border border-border flex flex-col rounded-xl h-full transition-all"
    >
      <div className="bg-primary/10 p-5 rounded-lg mb-6 inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={project.icon} />
        </svg>
      </div>
      <h3 className="text-3xl font-bold text-text-primary mb-4">
        {project.title}
      </h3>
      <p className="text-lg text-text-secondary mb-8 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag: string, index: number) => (
          <span key={index} className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
      <a href="#" className={`text-primary hover:text-primary-light transition-colors inline-flex items-center mt-auto text-lg font-medium group ${isActive ? '' : 'pointer-events-none opacity-70'}`}>
        View Project
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
} 