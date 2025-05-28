"use client"

import Link from 'next/link'
import { useState, useEffect, FormEvent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import { Analytics } from "@vercel/analytics/next"

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
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
        scrollToElement(id);
      }, 500); // Delay to ensure the page is fully loaded
    }
  }, []);

  const getProjectData = (index: number): ProjectData => {
    const projects: ProjectData[] = [
      {
        title: "PsychWorks Report Generation Tool",
        description: "Led the development of a full-stack web application for PsychWorks, a neuropsychology clinic specializing in cognitive assessments. Designed and implemented a dynamic report generation system enabling clinicians to produce and export structured, editable documents based on patient data. Served as project lead, coordinating task delegation, development cycles, and client communication to ensure delivery of a scalable, user-friendly solution.",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        tags: ["Next.js", "React", "Vercel", "Supabase"]
      },


      {
        title: "Constellation Connection",
        description: "A unique Unity game where players pilot a ship through space, connecting stars with their cursor while navigating asteroid fields. The gameplay features an innovative mechanic where connecting stars increases ship speed, creating an engaging risk-reward system. Currently in development with plans for Steam release, this project demonstrates both technical implementation and game design skills.",
        icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
        tags: ["Unity", "C#", "Game Design", "Steam"]
      },
      {
        title: "Darwin's Sandbox",
        description: "A sandbox environment where neural networks evolve and adapt in a simulated ecosystem. Built using Unity and C#, this project demonstrates how artificial intelligence can evolve through natural selection principles in an interactive 3D environment.",
        icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
        tags: ["Neural Networks","Unity", "C#", "3D"]
      },
      {
        title: "Object Oriented Tanks",
        description: "A 3D action shooter demonstrating object-oriented programming principles through engaging gameplay mechanics. Features include player movement, dynamic shooting with arc trajectories, health management, and intelligent enemy AI.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        tags: ["Unity", "C#", "OOP", "3D"]
      }
    ];

    return projects[index % totalSlides];
  };

  const [activeSection, setActiveSection] = useState('Biography');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-black to-background-dark">
      <Analytics />
      <NavBar fromColor="rgba(0, 0, 0, 0.2)" toColor="rgba(26, 26, 46, 0.2)" textColor="white" />

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
            <source src="/Main/background-video.mp4" type="video/mp4" />
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
              SOFTWARE ENGINEERING
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
              GAME DEVELOPMENT
            </motion.h1>
          </motion.div>
          <motion.div
            className="absolute bottom-16 sm:bottom-32 md:bottom-48 right-8 sm:right-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1.0, ease: "easeOut" }}
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
            delay: 3.0,
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
                  src="/Main/PixelChain-export.png"
                  alt="Chain"
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity rotate-180"
                />
                <img
                  src="/Main/PixelChain-export.png"
                  alt="Chain"
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity -mt-1"
                />
                <img
                  src="/Main/PixelAnchor-export.png"
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
      <section id="about" className="bg-transparent text-white py-[20vh] relative z-10 scroll-mt-[70px] mt-[15vh]">
        <motion.div
          className="w-[95vw] max-w-[2000px] mx-auto pt-[8vh] pb-[4vh] min-h-[90vh]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* About Me Section Title */}
          <div className="flex justify-center mb-[8vh]">
            <motion.h2
              className="text-center text-[2.5vw] sm:text-[2.8vw] md:text-[3vw] lg:text-[3.2vw] font-bold text-white tracking-tighter relative inline-block"
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

          <div className="flex gap-[4vw] px-[4vw] min-h-[85vh]">
            {/* Left Navigation */}
            <div className="w-[15vw] min-w-[150px] flex flex-col gap-[3vh]">
              {['Biography', 'Involvement', 'Personal Life'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-left py-[1.5vh] px-[1.2vw] rounded-lg transition-all text-[1vw] min-text-[14px] ${activeSection === section
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
            <div className="flex-1 relative min-h-[75vh] max-h-[95vh] overflow-y-auto pr-4">
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
                    <h3 className="text-[1.5vw] min-text-[18px] font-bold text-secondary mb-4">My Story</h3>
                    <p className="text-[1vw] min-text-[14px] text-white/80 leading-relaxed">
                    Hello, I'm Ryan Smith. I recently graduated from TCU with a B.S. in Computer Science and a minor in Mathematics. I've always been passionate about software engineering, and I'm especially drawn to game development it's what first sparked my interest in tech. Since then, I've been building projects that blend creativity and code, and I'm excited to keep pushing that passion forward.
                    </p>
                    <div className="w-[80%] mx-auto mt-6">
                          
                          <div className="flex flex-col">
                            <div className="aspect-[16/9] relative rounded-lg overflow-hidden h-[90vh] bg-black/40 flex items-center justify-center">
                              <Image
                                src="/Main/GradPhoto1.JPG"
                                alt="Ryan Graduation Photo"
                                fill
                                className="object-contain"
                                priority
                              />
                            </div>
                          </div>
                        </div>
                        <p className="text-[1vw] min-text-[12px] text-white/80 leading-relaxed">
                        I'm currently looking for a job in the software engineering industry or game development, and I'm always looking to connect with other developers, learn from new experiences, and grow in this field together.
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
                          Computer Science Society (CSS) is a student organization at Texas Christian University that supports students in Computer Science, Computer Information Technology, and related fields. I worked closely with the Department of Computer Science to host events, provide professional development opportunities, and build a strong sense of community within the major. One of my key roles is welcoming incoming students helping them get acclimated to the program, connect with peers, and feel at home from the start.
                        </p>
                        <p className="text-[1vw] min-text-[14px] text-white/80 leading-relaxed mt-4">
                          I served as the President of CSS. With no formal cabinet, I managed all aspects of the organization from planning and leading events to coordinating with faculty and maintaining our operations. My focus is on creating a space where students can grow, explore their interests, and support one another throughout their time at TCU.
                        </p>
                        <div className="w-[80%] mx-auto mt-6">
                          
                              <div className="flex flex-col">
                                <div className="aspect-[16/9] relative rounded-lg overflow-hidden border border-secondary/30 h-[40vh]">
                                  <Image
                                    src="/Main/CSSFreshmanSem.jpg"
                                    alt="Computer Science Society Freshman Event"
                                    fill
                                    className="object-cover"
                                    priority
                                  />
                                </div>
                                <p className="text-[0.9vw] min-text-[12px] text-white/70 italic text-center mt-4 px-4">
                                  This was a meeting specifically for freshmen. We helped get their computers ready with all the software needed for their four years, such as their preferred IDE, GitHub accounts, and all the free software available to students, along with answering any other questions they had.
                                </p>
                              </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-[1.5vw] min-text-[18px] font-bold text-secondary mb-4">TCU Esports League of Legends Team</h3>
                        <div className="flex flex-col gap-6">
                          <p className="text-[1vw] min-text-[14px] text-white/80 leading-relaxed">
                            Competing in collegiate League of Legends tournaments, I've developed strong teamwork and strategic thinking skills while representing TCU in esports competitions. Notably, I've participated in the annual "Esports Iron Skillet" tournament against SMU, which began in February 2022, and have proudly contributed to TCU's consecutive victories in both 2024 and 2025. This experience has enhanced my ability to work under pressure and collaborate effectively in high-stakes environments.
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
                                <div className="flex flex-col">
                                  <div className="aspect-[16/9] relative rounded-lg overflow-hidden border border-secondary/30 h-[40vh]">
                                    <Image
                                      src="/Main/Skillet.jpg"
                                      alt="TCU Esports League of Legends Team"
                                      fill
                                      className="object-cover"
                                      priority
                                    />
                                  </div>
                                  <p className="text-[0.9vw] min-text-[12px] text-white/70 italic text-center mt-4 px-4">
                                    TCU VS SMU Iron Skillet Trophy 2024.
                                  </p>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="flex flex-col">
                                  <div className="aspect-[16/9] relative rounded-lg overflow-hidden border border-secondary/30 h-[40vh]">
                                    <Image
                                      src="/Main/SkilletBump.jpg"
                                      alt="TCU Esports Team Practice"
                                      fill
                                      className="object-cover"
                                      priority
                                    />
                                  </div>
                                  <p className="text-[0.9vw] min-text-[12px] text-white/70 italic text-center mt-4 px-4">
                                    Team celebration after a  win.
                                  </p>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="flex flex-col">
                                  <div className="aspect-[16/9] relative rounded-lg overflow-hidden border border-secondary/30 h-[40vh]">
                                    <Image
                                      src="/Main/SkilletGame.jpg"
                                      alt="TCU Esports Team Match"
                                      fill
                                      className="object-cover"
                                      priority
                                    />
                                  </div>
                                  <p className="text-[0.9vw] min-text-[12px] text-white/70 italic text-center mt-4 px-4">
                                    Picture of TCU's 2025 League of Legends Team
                                  </p>
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
                    Outside of coding, I'm passionate about weightlifting, playing guitar, cooking and baking, and gaming. Whether I'm trying out a new recipe, working on a tricky solo, or diving into a favorite game, I enjoy spending my free time doing things that keep me creative, engaged, and active 
                    </p>
                    <div className="w-[80%] mx-auto mt-6">
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
                          <div className="aspect-[16/9] relative rounded-lg overflow-hidden h-[70vh] bg-black/40 flex items-center justify-center">
                            <Image
                              src="/Main/RyanSable.jpg"
                              alt="My dog Sable"
                              fill
                              className="object-contain"
                              priority
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="aspect-[16/9] relative rounded-lg overflow-hidden h-[70vh] bg-black/40 flex items-center justify-center">
                            <Image
                              src="/Main/Horse.jpg"
                              alt="Riding a horse in the StockYards"
                              fill
                              className="object-contain"
                              priority
                            />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-transparent text-white py-20 relative z-10 scroll-mt-[70px] mt-[-10vh]">
        <div className="max-w-7xl mx-auto pt-0 pb-16">
          <div className="flex justify-center mb-[8vh]">
            <motion.h2
              className="text-center text-[2.5vw] sm:text-[2.8vw] md:text-[3vw] lg:text-[3.2vw] font-bold text-white tracking-tighter relative inline-block"
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
      <section id="contact" className="bg-transparent text-white py-28 relative z-10 scroll-mt-[70px]">
        <div className="max-w-4xl mx-auto pt-12 pb-16">
          <div className="flex justify-center mb-10">
            <h2 className="text-center text-3xl md:text-7xl font-bold text-white tracking-tighter relative inline-block">
              Get in Touch
              <span className="block w-full h-1 bg-secondary mt-2"></span>
            </h2>
          </div>
          <p className="text-xl text-white/80 mb-16 text-center max-w-2xl mx-auto">
           want to connect? Feel free to reach out via email or connect with me on GitHub and LinkedIn!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Email */}
            <a
              href="mailto:ryanpsmith2003@outlook.com"
              className="inline-flex items-center px-8 py-4 bg-secondary text-background-dark rounded-md hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all transform hover:scale-105 duration-200 text-lg font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ryanpsmith2003@outlook.com
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/RyanPNSmith"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#24292e] text-white rounded-md hover:bg-[#2c3238] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#24292e] transition-all transform hover:scale-105 duration-200 text-lg font-medium"
            >
              <svg className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ryan-smith-67717729b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#0077b5] text-white rounded-md hover:bg-[#005983] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0077b5] transition-all transform hover:scale-105 duration-200 text-lg font-medium"
            >
              <svg className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
              </svg>
              LinkedIn
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
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0);
          background: linear-gradient(rgba(32, 49, 63, 0), rgba(32, 49, 63, 0)),
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
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
          border: 0px solid rgba(255, 255, 255, 0);
          background: linear-gradient(rgba(137, 123, 174, 0.7), rgba(255, 255, 255, 0.7)),
                      url('') center/cover;
          overflow: hidden;
          border-radius: 1rem;
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

        /* Fix for scrolling to sections */
        section[id] {
          scroll-margin-top: 70px;
        }
      `}</style>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, isActive }: ProjectCardProps) {
  // Determine the link for the project
  let projectLink = '#';
  if (project.title === 'PsychWorks Report Generation Tool') {
    projectLink = '/psychworks';
  } else if (project.title === 'Constellation Connection') {
    projectLink = '/constellation';
  } else if (project.title === "Darwin's Sandbox") {
    projectLink = '/darwinssandbox';
  } else if (project.title === "Object Oriented Tanks") {
    projectLink = '/OOT';
  }

  // Determine if this is the PsychWorks project
  const isPsychWorks = project.title === 'PsychWorks Report Generation Tool';
  const isConstellation = project.title === 'Constellation Connection';
  const isDarwinSandbox = project.title === "Darwin's Sandbox";
  const isOOT = project.title === "Object Oriented Tanks";

  return (
    <div
      className={`
        ${isPsychWorks 
          ? 'bg-gradient-to-br from-[#897bae]/80 to-[#b3c6d1]/80' 
          : isConstellation
            ? 'relative bg-gradient-to-br from-background-dark/80 to-background-dark'
            : isDarwinSandbox
              ? 'bg-gradient-to-br from-[#31982f]/80 to-[#67d067]/80'
              : isOOT
                ? 'relative bg-gradient-to-br from-[#2c3e50]/80 to-[#3498db]/80'
                : 'bg-gradient-to-br from-background-dark/80 to-background-dark'}
        p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg border 
        ${isPsychWorks 
          ? 'border-[#897bae]/30' 
          : 'border-secondary/30'} 
        flex flex-col rounded-xl h-full transition-all
      `}
    >
      {/* Background image for Constellation Connection */}
      {isConstellation && (
        <img 
          src="/ConstellationConnections/SlideImg.png" 
          alt="Constellation Connection Background"
          className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-65 pointer-events-none z-0"
        />
      )}
      {/* Image for Darwin's Sandbox */}
      {isDarwinSandbox && (
        <img
          src="/DarwinSandbox/SwiperSlide.png"
          alt="Darwin's Sandbox Preview"
          className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-65 pointer-events-none z-0"
        />
      )}
      {/* Image for Object Oriented Tanks */}
      {isOOT && (
        <img
          src="/OOT/SwiperSlideOOT.png"
          alt="Object Oriented Tanks Preview"
          className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-65 pointer-events-none z-0"
        />
      )}
      <div className={`
        ${isPsychWorks 
          ? 'bg-[#5a4d7a]/20' 
          : 'bg-secondary/20'} 
        p-3 sm:p-4 md:p-5 rounded-lg mb-4 sm:mb-6 inline-block backdrop-blur-sm relative z-10`}
      >
        {isConstellation ? (
          <img
            src="/ConstellationConnections/Ship Sprite.png"
            alt="Constellation Connection Ship Icon"
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        ) : isOOT ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-secondary" fill="none">
            <rect x="6" y="20" width="36" height="16" rx="8" fill="#b3c6d1" stroke="#5a4d7a" strokeWidth="2"/>
            <circle cx="16" cy="28" r="2.5" fill="#5a4d7a"/>
            <circle cx="32" cy="28" r="2.5" fill="#5a4d7a"/>
            <rect x="22" y="26" width="4" height="4" rx="1" fill="#5a4d7a"/>
            <rect x="12" y="24" width="2" height="8" rx="1" fill="#5a4d7a"/>
            <rect x="34" y="24" width="2" height="8" rx="1" fill="#5a4d7a"/>
          </svg>
        ) : isDarwinSandbox ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 48" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-secondary" fill="none">
            {/* Input Layer */}
            <circle cx="12" cy="14" r="3" fill="#67d067" stroke="#31982f" strokeWidth="1.5"/>
            <circle cx="12" cy="24" r="3" fill="#67d067" stroke="#31982f" strokeWidth="1.5"/>
            <circle cx="12" cy="34" r="3" fill="#67d067" stroke="#31982f" strokeWidth="1.5"/>
            {/* Hidden Layer 1 */}
            <circle cx="28" cy="10" r="3" fill="#67d067" stroke="#31982f" strokeWidth="1.5"/>
            <circle cx="28" cy="20" r="3" fill="#67d067" stroke="#31982f" strokeWidth="1.5"/>
            <circle cx="28" cy="28" r="3" fill="#67d067" stroke="#31982f" strokeWidth="1.5"/>
            <circle cx="28" cy="38" r="3" fill="#67d067" stroke="#31982f" strokeWidth="1.5"/>
            {/* Hidden Layer 2 */}
            <circle cx="44" cy="14" r="3" fill="#67d067" stroke="#31982f" strokeWidth="1.5"/>
            <circle cx="44" cy="24" r="3" fill="#67d067" stroke="#31982f" strokeWidth="1.5"/>
            <circle cx="44" cy="34" r="3" fill="#67d067" stroke="#31982f" strokeWidth="1.5"/>
            {/* Output Layer */}
            <circle cx="58" cy="24" r="3" fill="#67d067" stroke="#31982f" strokeWidth="1.5"/>
            {/* Connections: Input to Hidden 1 */}
            <line x1="15" y1="14" x2="25" y2="10" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="15" y1="14" x2="25" y2="20" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="15" y1="14" x2="25" y2="28" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="15" y1="14" x2="25" y2="38" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="15" y1="24" x2="25" y2="10" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="15" y1="24" x2="25" y2="20" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="15" y1="24" x2="25" y2="28" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="15" y1="24" x2="25" y2="38" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="15" y1="34" x2="25" y2="10" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="15" y1="34" x2="25" y2="20" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="15" y1="34" x2="25" y2="28" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="15" y1="34" x2="25" y2="38" stroke="#31982f" strokeWidth="1.2"/>
            {/* Connections: Hidden 1 to Hidden 2 */}
            <line x1="31" y1="10" x2="41" y2="14" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="31" y1="10" x2="41" y2="24" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="31" y1="10" x2="41" y2="34" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="31" y1="20" x2="41" y2="14" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="31" y1="20" x2="41" y2="24" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="31" y1="20" x2="41" y2="34" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="31" y1="28" x2="41" y2="14" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="31" y1="28" x2="41" y2="24" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="31" y1="28" x2="41" y2="34" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="31" y1="38" x2="41" y2="14" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="31" y1="38" x2="41" y2="24" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="31" y1="38" x2="41" y2="34" stroke="#31982f" strokeWidth="1.2"/>
            {/* Connections: Hidden 2 to Output */}
            <line x1="47" y1="14" x2="55" y2="24" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="47" y1="24" x2="55" y2="24" stroke="#31982f" strokeWidth="1.2"/>
            <line x1="47" y1="34" x2="55" y2="24" stroke="#31982f" strokeWidth="1.2"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 ${
            isPsychWorks 
              ? 'text-[#5a4d7a]' 
              : 'text-secondary'
          }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={project.icon} />
          </svg>
        )}
      </div>
      <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${
        isPsychWorks 
          ? 'text-[#5a4d7a]' 
          : 'text-white'
      } mb-2 sm:mb-4 relative z-10`}>
        {project.title}
      </h3>
      <p className={`text-sm sm:text-base md:text-lg ${
        isPsychWorks 
          ? 'text-white/90' 
          : 'text-white/80'
      } mb-4 sm:mb-6 md:mb-8 flex-grow relative z-10`}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6 md:mb-8 relative z-10">
        {project.tags.map((tag: string, index: number) => (
          <span key={index} className={`$
            {isPsychWorks 
              ? 'bg-[#5a4d7a]/20 text-[#5a4d7a] border-[#5a4d7a]/30' 
              : 'bg-secondary/20 text-white border-secondary/30'}
            px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border`}>
            {tag}
          </span>
        ))}
      </div>
      <a href={projectLink} className={`$
        {isPsychWorks 
          ? 'text-[#5a4d7a] hover:text-[#5a4d7a]/80' 
          : 'text-secondary hover:text-secondary-light'}
        transition-colors inline-flex items-center mt-auto text-sm sm:text-base md:text-lg font-medium group ${isActive ? '' : 'pointer-events-none opacity-70'} relative z-10`}>
        View Project
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
} 