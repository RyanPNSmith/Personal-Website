"use client"

import Link from 'next/link'
import { useState, useEffect, FormEvent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

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

  // Helper function for smooth scrolling with offset
  const smoothScrollWithOffset = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const offset = 64; // Height of the navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  // A consistent scroll function for all navigation links
  const scrollToElement = (id: string) => {
    const offset = 64; // Height of navbar
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
      if (window.innerWidth >= 1536) {
        // 2xl breakpoint
        setSlidesPerView(1.8);
      } else if (window.innerWidth >= 1280) {
        // xl breakpoint
        setSlidesPerView(1.5);
      } else if (window.innerWidth >= 1024) {
        // lg breakpoint
        setSlidesPerView(1.3);
      } else if (window.innerWidth >= 768) {
        // md breakpoint
        setSlidesPerView(1.2);
      } else if (window.innerWidth >= 640) {
        // sm breakpoint
        setSlidesPerView(1.15);
      } else {
        // xs breakpoint
        setSlidesPerView(1.05);
      }
    };

    // Initial call
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to handle hash navigation on page load
  useEffect(() => {
    // Check if there's a hash in the URL on load
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 64,
            behavior: 'smooth'
          });
          console.log(`Scrolled to ${id} on load`);
        } else {
          console.log(`Element with id ${id} not found on load`);
        }
      }, 500); // Delay to ensure the page is fully loaded
    }
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

  const [activeSection, setActiveSection] = useState('Biography');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-black to-background-dark">
      {/* Blurred Navigation Bar with gradient */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-gradient-to-r from-black/70 to-background-dark/70 z-50 shadow-md border-b border-white/10">
        <div className="w-full px-0 sm:px-2">
          <div className="flex justify-between items-center h-16">
            <div className="text-white font-bold text-xl pl-4">Ryan Smith</div>
            <div className="flex space-x-8 pr-4">
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('about');
                }} 
                className="text-white hover:text-secondary transition-colors text-lg"
              >
                about
              </a>
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('projects');
                }} 
                className="text-white hover:text-secondary transition-colors text-lg"
              >
                projects
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('contact');
                }} 
                className="text-white hover:text-secondary transition-colors text-lg"
              >
                contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-transparent text-text-light flex-grow flex flex-col items-center justify-center pt-20 bg-cover bg-center relative z-0 overflow-hidden">
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
          
          <motion.div 
            className="absolute left-4 sm:left-6 md:left-12 top-[35%] transform -translate-y-1/2 flex flex-col items-start w-full md:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-[2vw] sm:text-[3vw] md:text-[4vw] lg:text-[6vw] font-bold leading-[0.8] tracking-tighter"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
            >
              SOFTWARE ENG
            </motion.h1>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <span className="text-[3vw] sm:text-[3.5vw] md:text-[4vw] mx-4">&</span>
            </motion.div>
            <motion.h1 
              className="text-[4vw] sm:text-[3vw] md:text-[4vw] lg:text-[6vw] font-bold leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
            >
              GAME DEV
            </motion.h1>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-32 sm:bottom-48 md:bottom-64 lg:bottom-72 right-4 sm:right-8 md:right-14 max-w-[60vw] sm:max-w-[45vw] md:max-w-[35vw] lg:max-w-[30vw] text-right"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
          >
            <p className="text-[1.8vw] sm:text-[1.8vw] md:text-[2vw] lg:text-[1.3vw]">
              I AM A SOFTWARE ENGINEER AND GAME DEVELOPER BASED IN TEXAS. I DESIGN AND BUILD SOFTWARE AND GAMES. I LOVE NATURE, TECHNOLOGY AND ART.
            </p>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-16 sm:bottom-32 md:bottom-48 right-8 sm:right-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
          >
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('contact');
              }} 
              className="border border-white/50 text-white hover:bg-white/10 transition-colors rounded-full px-8 md:px-16 py-3 inline-block text-sm sm:text-base md:text-lg"
            >
              CONTACT ME
            </a>
          </motion.div>
        </div>
        
        {/* Bottom fade gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black via-black/30 to-transparent z-[2]"></div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-[15vh] left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 4.0,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <button 
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="border-none bg-transparent cursor-pointer focus:outline-none"
            aria-label="Scroll to About section"
          >
            <div className="flex flex-col items-center cursor-pointer">
              <div className="animate-subtle-bounce flex flex-col items-center">
                <img 
                  src="/PixelChain-export.png" 
                  alt="Chain" 
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity rotate-180" 
                />
                <img 
                  src="/PixelChain-export.png" 
                  alt="Chain" 
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity -mt-1"
                />
                <img 
                  src="/PixelAnchor-export.png" 
                  alt="Anchor" 
                  className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity -mt-1"
                />
                
              </div>
              <span className="text-secondary text-sm opacity-70 hover:opacity-100 transition-opacity mt-2">Scroll Down</span>
            </div>
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-transparent text-white py-[20vh] relative z-10 scroll-mt-16 mt-[15vh]">
        <motion.div 
          className="w-[95vw] max-w-[2000px] mx-auto pt-[8vh] pb-[8vh] min-h-[90vh]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="mb-[8vh] pl-[4vw]">
            <motion.h2 
              className="text-[2.5vw] sm:text-[2.8vw] md:text-[3vw] lg:text-[3.2vw] font-bold text-white tracking-tighter relative inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              ABOUT ME
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-secondary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.h2>
          </div>

          <div className="flex gap-[4vw] px-[4vw] min-h-[70vh]">
            {/* Left Navigation */}
            <div className="w-[15vw] min-w-[150px] flex flex-col gap-[3vh]">
              {['Biography', 'Involvement', 'Personal Life'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-left py-[1.5vh] px-[1.2vw] rounded-lg transition-all text-[1vw] min-text-[14px] ${
                    activeSection === section 
                      ? 'bg-secondary/20 text-white border-l-4 border-secondary font-medium' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 relative min-h-[60vh]">
              <AnimatePresence mode="wait">
                {activeSection === 'Biography' && (
                  <motion.div
                    key="biography"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-full"
                  >
                    <p className="text-[1vw] min-text-[14px] text-white/80 leading-relaxed">
                      Hello, my name is Ryan Smith, I'm a senior at Texas Christian University majoring in Computer Science, graduating in May 2025. I'm passionate about software engineering and plan to pursue it as my primary career path. My journey in technology began with early experiments in game development, which evolved into a deep fascination with software engineering and its potential to create impactful solutions.
                    </p>
                  </motion.div>
                )}

                {activeSection === 'Involvement' && (
                  <motion.div
                    key="involvement"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-full"
                  >
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-[1.5vw] min-text-[18px] font-bold text-secondary mb-4">Computer Science Society President</h3>
                        <p className="text-[1vw] min-text-[14px] text-white/80 leading-relaxed">
                          As President of the Computer Science Society, I lead a vibrant community of tech enthusiasts, organizing technical workshops, guest speaker events, and student engagement opportunities. I've built experience through full-stack web development, Unity game projects, and IT support roles.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-[1.5vw] min-text-[18px] font-bold text-secondary mb-4">TCU Esports League of Legends Team</h3>
                        <div className="flex flex-col gap-6">
                          <p className="text-[1vw] min-text-[14px] text-white/80 leading-relaxed">
                            Competing in collegiate League of Legends tournaments, I've developed strong teamwork and strategic thinking skills while representing TCU in esports competitions. This experience has enhanced my ability to work under pressure and collaborate effectively in high-stakes environments.
                          </p>
                          <div className="w-[80%] mx-auto">
                            <Swiper
                              effect={'coverflow'}
                              grabCursor={true}
                              centeredSlides={true}
                              slidesPerView={1}
                              coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false,
                              }}
                              pagination={{ clickable: true }}
                              navigation={true}
                              modules={[EffectCoverflow, Pagination, Navigation]}
                              className="esports-swiper"
                            >
                              <SwiperSlide>
                                <div className="aspect-[16/9] relative rounded-lg overflow-hidden border border-secondary/30 h-[40vh]">
                                  <Image
                                    src="/Skillet.jpg"
                                    alt="TCU Esports League of Legends Team"
                                    fill
                                    className="object-cover"
                                    priority
                                  />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="aspect-[16/9] relative rounded-lg overflow-hidden border border-secondary/30 h-[40vh]">
                                  <Image
                                    src="/SkilletBump.jpg"
                                    alt="TCU Esports Team Practice"
                                    fill
                                    className="object-cover"
                                    priority
                                  />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="aspect-[16/9] relative rounded-lg overflow-hidden border border-secondary/30 h-[40vh]">
                                  <Image
                                    src="/SkilletGame.jpg"
                                    alt="TCU Esports Team Match"
                                    fill
                                    className="object-cover"
                                    priority
                                  />
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'Personal Life' && (
                  <motion.div
                    key="personal"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-full"
                  >
                    <p className="text-[1vw] min-text-[14px] text-white/80 leading-relaxed">
                      Beyond coding, I'm deeply passionate about nature and outdoor activities. I find inspiration in the intersection of technology and art, often exploring creative coding projects in my free time. I believe in maintaining a healthy work-life balance and continuously learning from both professional experiences and personal interests. When not coding, you might find me hiking, experimenting with digital art, or contributing to open-source projects.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-transparent text-white py-28 relative z-10 scroll-mt-16">
        <div className="max-w-7xl mx-auto pt-12 pb-16">
          <div className="mb-20 pl-4 sm:pl-6 md:pl-12">
            <motion.h2 
              className="text-[3vw] sm:text-[3.5vw] md:text-[4vw] lg:text-[4.5vw] font-bold text-white tracking-tighter relative inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              PROJECTS
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-secondary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.h2>
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
      <section id="contact" className="bg-transparent text-white py-28 relative z-10 scroll-mt-16">
        <div className="max-w-7xl mx-auto pt-12 pb-16">
          <div className="mb-20 pl-4 sm:pl-6 md:pl-12">
            <motion.h2 
              className="text-[3vw] sm:text-[3.5vw] md:text-[4vw] lg:text-[4.5vw] font-bold text-white tracking-tighter relative inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              CONTACT
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-secondary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.h2>
          </div>
          
          <p className="text-lg text-white/80 mb-12 max-w-2xl">
            Feel free to reach out to me with any questions or opportunities.
          </p>
          
          <div className="flex flex-col items-start justify-start mt-8">
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
      </section>

      {/* Footer */}
      <footer className="bg-transparent border-t border-white/10 text-white/70 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Ryan Smith. All rights reserved.</p>
        </div>
      </footer>

      {/* Swiper Custom Styles */}
      <style jsx global>{`
        .swiper-container {
          width: 100%;
          padding: 40px 30px 60px;
          overflow: visible !important;
          position: relative;
          z-index: 1;
        }
        
        @media (min-width: 640px) {
          .swiper-container {
            padding: 50px 40px 70px;
          }
        }
        
        @media (min-width: 768px) {
          .swiper-container {
            padding: 70px 60px 80px;
          }
        }
        
        .swiper-wrapper {
          padding: 20px 0;
          overflow: visible;
          position: relative;
          z-index: 1;
        }
        
        .swiper-slide {
          width: 300px;
          height: 450px;
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
        
        @media (min-width: 640px) {
          .swiper-slide {
            width: 450px;
            height: 500px;
          }
        }
        
        @media (min-width: 1024px) {
          .swiper-slide {
            width: 550px;
            height: 550px;
          }
        }
        
        @media (min-width: 1280px) {
          .swiper-slide {
            width: 700px;
            height: 600px;
          }
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
        
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 30px !important;
            height: 30px !important;
          }
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
        
        /* Additional responsive adjustments */
        @media (max-width: 640px) {
          .swiper-pagination {
            bottom: 0px !important;
          }
          
          #about, #projects, #contact {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
        }

        .esports-swiper {
          width: 100%;
          padding: 40px 0;
        }
        
        .esports-swiper .swiper-slide {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: none !important;
          filter: none !important;
          background: none !important;
          border: none !important;
          box-shadow: none !important;
        }
        
        .esports-swiper .swiper-button-next,
        .esports-swiper .swiper-button-prev {
          color: rgba(179, 198, 209, 0.9);
          background: rgba(32, 49, 63, 0.7);
          width: 35px;
          height: 35px;
          border-radius: 50%;
          border: 1px solid rgba(179, 198, 209, 0.3);
        }
        
        .esports-swiper .swiper-button-next:after,
        .esports-swiper .swiper-button-prev:after {
          font-size: 16px;
        }
        
        .esports-swiper .swiper-pagination {
          bottom: 0px;
        }
        
        .esports-swiper .swiper-pagination-bullet {
          background: rgba(179, 198, 209, 0.7);
          opacity: 0.5;
        }
        
        .esports-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: rgba(179, 198, 209, 1);
        }
      `}</style>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, isActive }: ProjectCardProps) {
  return (  
    <div 
      className="bg-gradient-to-br from-background-dark/80 to-background-dark p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-secondary/30 flex flex-col rounded-xl h-full transition-all"
    >
      <div className="bg-secondary/20 p-3 sm:p-4 md:p-5 rounded-lg mb-4 sm:mb-6 inline-block backdrop-blur-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={project.icon} />
        </svg>
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">
        {project.title}
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-white/80 mb-4 sm:mb-6 md:mb-8 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
        {project.tags.map((tag: string, index: number) => (
          <span key={index} className="bg-secondary/20 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-secondary/30">
            {tag}
          </span>
        ))}
      </div>
      <a href="#" className={`text-secondary hover:text-secondary-light transition-colors inline-flex items-center mt-auto text-sm sm:text-base md:text-lg font-medium group ${isActive ? '' : 'pointer-events-none opacity-70'}`}>
        View Project
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
} 