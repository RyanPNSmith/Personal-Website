"use client"

import Link from 'next/link'
import { useState, useEffect, FormEvent } from 'react'
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

// Define types for the ProjectCard props
interface ProjectCardProps {
  project: ProjectData;
  isActive: boolean;
}

export default function Home() {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1.5);
  const totalSlides = 4; // Total number of project cards

  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Using Formspree as a simple form submission service
      const response = await fetch('https://formspree.io/f/your_formspree_id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        title: "PsychWorks Report Generation Tool",
        description: "Led the development of a full-stack web application for PsychWorks, a neuropsychology clinic specializing in cognitive assessments. Designed and implemented a dynamic report generation system enabling clinicians to produce and export structured, editable documents based on patient data. Served as project lead, coordinating task delegation, development cycles, and client communication to ensure delivery of a scalable, user-friendly solution.",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        tags: ["Next.js", "React", "Vercel", "Supabase"]
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
      {/* Blurred Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-background-dark/70 z-50 shadow-md border-b border-white/10">
        <div className="w-full px-0 sm:px-2">
          <div className="flex justify-between items-center h-16">
            <div className="text-white font-bold text-xl pl-4">Ryan Smith</div>
            <div className="flex space-x-8 pr-4">
              <Link href="#about" className="text-white hover:text-secondary transition-colors text-lg">
                works
              </Link>
              <Link href="#projects" className="text-white hover:text-secondary transition-colors text-lg">
                about
              </Link>
              <Link href="#contact" className="text-white hover:text-secondary transition-colors text-lg">
                contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-text-light flex-grow flex flex-col items-center justify-center pt-20 bg-cover bg-center relative z-0 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 min-w-full min-h-full object-cover"
          >
            <source src="/background-video.mp4" type="video/mp4" />
            {/* Fallback background in case video doesn't load */}
            <img
              src="https://images.unsplash.com/photo-1577083552761-0a73ea3b3b75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
        </div>
        
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        
        <div className="text-center px-4 py-32 w-full h-full flex flex-col items-center justify-center min-h-screen relative z-10">
          
          <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-start">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold leading-none tracking-tighter">
              SOFTWARE ENG
            </h1>
            <div className="flex items-center">
              <span className="text-4xl mx-4">&</span>
            </div>
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold leading-none tracking-tighter">
              GAME DEV
            </h1>
          </div>
          
          <div className="absolute bottom-32 right-16 max-w-md text-right">
            <p className="text-lg">
              I AM A SOFTWARE ENGINEER AND GAME DEVELOPER BASED IN TEXAS. I DESIGN AND BUILD SOFTWARE AND GAMES. I LOVE NATURE, TECHNOLOGY AND ART.
            </p>
          </div>
          
          <div className="absolute bottom-16 right-16">
            <Link href="#about" className="border border-white/50 text-white hover:bg-white/10 transition-colors rounded-full px-8 py-3 inline-block">
              CONTACT ME
            </Link>
          </div>
        </div>
        
        {/* Fade overlay transition instead of diagonal */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-dark to-transparent z-20"></div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20">
          <Link href="#about">
            <div className="animate-bounce flex flex-col items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-70 hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-white text-sm opacity-70 hover:opacity-100 transition-opacity mt-2">Scroll Down</span>
            </div>
          </Link>
        </div>
      </section>

      {/* About Section - Now with dark background */}
      <section id="about" className="bg-background-dark text-white py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block h-1 w-20 bg-secondary rounded mb-4"></span>
            <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
          </div>
          <p className="text-lg text-white/80 text-center max-w-4xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Hello, my name is Ryan Smith, I'm a senior at Texas Christian University majoring in Computer Science, graduating in May 2025. I currently serve as President of the Computer Science Society, where I independently organize technical workshops, guest speaker events, and student engagement opportunities. I'm passionate about software engineering and plan to pursue it as my primary career path.
          </p>
          <p className="text-lg text-white/80 text-center max-w-4xl mx-auto animate-fade-in-up mt-6 leading-relaxed" style={{ animationDelay: '0.5s' }}>
            I've built experience through full-stack web development, Unity game projects, and IT support roles. While software engineering is my main focus, I'm also interested in game development and continue to explore it as a potential direction. I work well in team environments and enjoy collaborating with others to bring projects to life. I'm always excited and willing to learn new technologies and take on challenges that help me grow as a developer.
          </p>
        </div>
        
        {/* Fade transition to projects section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-dark to-background-dark z-20"></div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-background-dark text-white py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block h-1 w-20 bg-secondary rounded mb-4"></span>
            <h2 className="text-3xl font-bold text-white mb-8">My Projects</h2>
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
        
        {/* Fade transition to contact section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-dark to-background-dark z-20"></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-background-dark text-white py-28 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block h-1 w-20 bg-secondary rounded mb-4"></span>
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <p className="text-lg text-white/80 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Feel free to reach out to me with any questions or opportunities.
            </p>
            
            <div className="flex flex-col items-center justify-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a 
                href="mailto:ryanpsmith2003@outlook.com" 
                className="inline-flex items-center px-8 py-4 bg-secondary text-background-dark rounded-md hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all transform hover:scale-105 duration-200 text-lg font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ryanpsmith2003@outlook.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-dark border-t border-white/10 text-white/70 py-8">
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
          position: relative;
          z-index: 1;
        }
        
        .swiper-slide {
          width: 700px;
          height: 600px;
          background-position: center;
          background-size: cover;
          transition: all 700ms ease;
          filter: brightness(0.8) blur(0px);
          transform: scale(0.75);
          opacity: 0.7;
          border: 1px solid rgba(179, 198, 209, 0.2);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          background: linear-gradient(145deg, rgba(32, 49, 63, 0.8), rgba(32, 49, 63, 0.95));
          position: relative;
        }
        
        .swiper-slide-active {
          filter: brightness(1) blur(0px);
          transform: scale(1);
          opacity: 1;
          z-index: 10;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(179, 198, 209, 0.3);
          background: linear-gradient(145deg, rgba(32, 49, 63, 0.7), rgba(32, 49, 63, 0.9));
        }

        .swiper-slide-prev,
        .swiper-slide-next {
          opacity: 0.8;
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
          color: rgba(179, 198, 209, 0.9) !important;
          background: rgba(32, 49, 63, 0.7);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 50%;
          border: 1px solid rgba(179, 198, 209, 0.3);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          z-index: 20;
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
        }
        
        .swiper-pagination-bullet {
          background: rgba(179, 198, 209, 0.7);
          opacity: 0.5;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
          background: rgba(179, 198, 209, 1);
        }

        /* Apply these fixes for horizontal scrolling */
        html, body {
          overflow-x: hidden;
          position: relative;
          width: 100%;
        }
        
        #projects {
          overflow: hidden;
          position: relative;
        }
      `}</style>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, isActive }: ProjectCardProps) {
  return (  
    <div 
      className="bg-gradient-to-br from-background-dark/80 to-background-dark p-8 sm:p-10 shadow-lg border border-secondary/30 flex flex-col rounded-xl h-full transition-all"
    >
      <div className="bg-secondary/20 p-5 rounded-lg mb-6 inline-block backdrop-blur-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={project.icon} />
        </svg>
      </div>
      <h3 className="text-3xl font-bold text-white mb-4">
        {project.title}
      </h3>
      <p className="text-lg text-white/80 mb-8 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag: string, index: number) => (
          <span key={index} className="bg-secondary/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm border border-secondary/30">
            {tag}
          </span>
        ))}
      </div>
      <a href="#" className={`text-secondary hover:text-secondary-light transition-colors inline-flex items-center mt-auto text-lg font-medium group ${isActive ? '' : 'pointer-events-none opacity-70'}`}>
        View Project
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
} 