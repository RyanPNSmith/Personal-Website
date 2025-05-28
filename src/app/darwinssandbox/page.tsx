'use client';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Analytics } from "@vercel/analytics/next";

export default function DarwinsSandbox() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#31982f] to-[#67d067]">
      <Analytics />
      <NavBar fromColor="rgba(0, 0, 0, 0.2)" toColor="rgba(26, 26, 46, 0.2)" textColor="white" />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Darwin's Sandbox</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A natural selection and evolution simulator powered by Unity, demonstrating artificial neural networks and genetic algorithms through a virtual ecosystem.
          </p>
        </div>

        {/* Project Overview */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
            <div className="space-y-6 text-white/80">
              <p>
                Darwin's Sandbox is a natural selection and evolution simulator powered by Unity. This project demonstrates artificial neural networks (ANNs) and genetic algorithms through a virtual ecosystem of creatures (wolves) that hunt, mate, and evolve over time.
              </p>
              <p>
                Built using Unity and C#, this project allows users to observe and interact with evolving neural networks in real-time. The simulation includes various environmental factors that influence the evolution of the AI agents, creating a fascinating demonstration of artificial life and adaptation.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Neural Network-Driven Creatures: Each creature is controlled by a neural network that evolves through generations</li>
                <li>Natural Selection: Creatures that better adapt to find food and mates survive longer and reproduce more frequently</li>
                <li>Dynamic Ecosystem: Food spawns throughout the environment, creating a balanced ecosystem</li>
                <li>Realistic Behaviors: Hunting, mating, and wandering states with genetic inheritance</li>
                <li>Simulation Controls: Adjust simulation speed with = to increase and - to decrease speed</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">How It Works</h3>
              <div className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-bold mb-2">Creature States</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Wandering: Default exploration state</li>
                    <li>Hunting: Activated when hunger falls below 50% and prey is detected</li>
                    <li>Mating: Triggered when love level is full and creature isn't hungry</li>
                    <li>Resting: Brief recovery period after reproduction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Neural Networks</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Inputs: Environmental sensors, hunger level, prey direction and distance</li>
                    <li>Outputs: Movement controls (forward/backward and turning)</li>
                    <li>Evolution: Neural networks evolve through inheritance and mutation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Energy System</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Hunger decreases over time</li>
                    <li>Consuming food restores hunger</li>
                    <li>Creatures die if hunger reaches zero</li>
                    <li>Reproduction costs energy for both parents</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {['Unity', 'C#', 'Neural Networks', 'Genetic Algorithms', 'Machine Learning'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/20 text-white rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/DarwinSandbox/Darwins Sandbox Demo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Evolution in Action</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Watch as neural networks learn and adapt to their environment through natural selection.
            </p>
          </div>
        </div>

        {/* Main Content Swiper */}
        <div className="max-w-6xl mx-auto mb-20">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="darwins-swiper"
          >
            <SwiperSlide>
              <div className="aspect-video relative rounded-lg overflow-hidden bg-black/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Neural Network Architecture</h2>
                  <p className="text-white/90 max-w-2xl mx-auto">
                    The project uses a sophisticated neural network system that evolves through generations,
                    with successful traits being passed down to future generations while less successful ones
                    are gradually phased out.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="aspect-video relative rounded-lg overflow-hidden bg-black/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Interactive Environment</h2>
                  <div className="text-white/90 max-w-2xl mx-auto">
                    <p>Users can interact with the simulation by adjusting various parameters such as:</p>
                    <ul className="list-disc list-inside mt-4 text-left max-w-md mx-auto">
                      <li>Population size</li>
                      <li>Mutation rate</li>
                      <li>Selection pressure</li>
                      <li>Environmental conditions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Wolf AI State Machine Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Wolf AI State Machine</h2>
          <div className="space-y-12">
            {/* Hunting State */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 rounded-lg p-6">
              <div className="md:w-1/2 w-full flex justify-center">
                <Image
                  src="/DarwinSandbox/Hunting.gif"
                  alt="Wolf Hunting State"
                  width={400}
                  height={250}
                  className="rounded-lg object-contain border border-secondary/30"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#19571b' }}>Hunting</h3>
                <p className="text-white/80">
                  When a wolf's hunger drops below 50, it enters the <b>Hunting</b> state. The wolf will pathfind toward the nearest sheep and attempt to eat it—if its neural network decides to do so (some are better at hunting than others). This decision-making process is influenced by the wolf's current neural network weights, allowing for emergent and evolving behaviors.
                </p>
              </div>
            </div>

            {/* Mating State */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white/5 rounded-lg p-6">
              <div className="md:w-1/2 w-full flex justify-center">
                <Image
                  src="/DarwinSandbox/Mating.gif"
                  alt="Wolf Mating State"
                  width={400}
                  height={250}
                  className="rounded-lg object-contain border border-secondary/30"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#19571b' }}>Mating</h3>
                <p className="text-white/80">
                  If two wolves both have their <b>Love</b> at 100 and their <b>Hunger</b> above 50, they can enter the <b>Mating</b> state. If their neural networks decide to mate, a new wolf is created, inheriting a combination of neural network weights from both parents. This allows for the evolution of more successful behaviors over generations.
                </p>
              </div>
            </div>

            {/* Wandering State */}
            <div className="flex flex-col items-center gap-8 bg-white/5 rounded-lg p-6">
              <div className="w-full max-w-2xl">
                <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#19571b' }}>Wandering</h3>
                <p className="text-white/80 text-center">
                  Wolves enter the <b>Wandering</b> state when they are not hungry enough to hunt or not ready to mate. In this state, they move around the environment in a more random or exploratory fashion, waiting for their internal conditions to change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* GitHub Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-6">Source Code</h2>
          <div className="flex items-center justify-center">
            <a 
              href="https://github.com/RyanPNSmith/Darwins-Sandbox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#24292e] hover:bg-[#2c3238] text-white rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
          <p className="text-white/80 text-center mt-4">
            Check out the source code on GitHub
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .darwins-swiper {
          width: 100%;
          padding: 40px 0;
        }
        
        .darwins-swiper .swiper-slide {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .darwins-swiper .swiper-button-next,
        .darwins-swiper .swiper-button-prev {
          color: rgba(179, 198, 209, 0.9);
          background: rgba(32, 49, 63, 0.7);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(179, 198, 209, 0.3);
        }
        
        .darwins-swiper .swiper-button-next:after,
        .darwins-swiper .swiper-button-prev:after {
          font-size: 18px;
        }
        
        .darwins-swiper .swiper-pagination-bullet {
          background: rgba(179, 198, 209, 0.7);
          opacity: 0.5;
        }
        
        .darwins-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: rgba(179, 198, 209, 1);
        }
      `}</style>
    </div>
  );
}

