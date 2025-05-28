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

export default function ObjectOrientedTanks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c3e50] to-[#3498db]">
      <Analytics />
      <NavBar fromColor="rgba(0, 0, 0, 0.2)" toColor="rgba(26, 26, 46, 0.2)" textColor="white" />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Object Oriented Tanks</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A 3D action shooter demonstrating object-oriented programming principles through engaging gameplay mechanics.
          </p>
        </div>

        {/* Project Overview Intro */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-white/80">
              Object Oriented Tanks is a 3D action shooter where players control a tank, navigate dynamic environments, and battle AI enemies. The game features destructible terrain, health pickups, and strategic shooting mechanics—all designed to demonstrate object-oriented programming principles in a fun, interactive way.
            </p>
          </div>
        </div>

        {/* Gameplay Showcase */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">Gameplay Showcase</h2>
            <video controls className="w-full rounded-lg shadow-lg mb-4">
              <source src="/OOT/OOTGameplay.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-white/80">
              Watch a short gameplay demo highlighting the core mechanics and action-packed moments of Object Oriented Tanks.
            </p>
          </div>
        </div>

        {/* Key Mechanics */}
        <div className="max-w-4xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Terrain Destruction */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-4">Destructible Terrain</h3>
            <img src="/OOT/Terrain.gif" alt="Terrain Destruction" className="rounded-lg mb-2 w-full" />
            <p className="text-white/80 text-center">
              Blast through obstacles! The environment is fully destructible, allowing for dynamic strategies and ever-changing battlefields.
            </p>
          </div>
          {/* Health Pack Mechanic */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-4">Health Pack System</h3>
            <img src="/OOT/Healing.gif" alt="Health Pack Mechanic" className="rounded-lg mb-2 w-full" />
            <p className="text-white/80 text-center">
              Stay in the fight by collecting health packs scattered across the map. Timing your pickups can turn the tide of battle!
            </p>
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
            <div className="space-y-6 text-white/80">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  <li>Player Movement: Smooth 3D movement with WASD/Arrow keys</li>
                  <li>Dynamic Shooting: Adjustable arc trajectories for strategic gameplay</li>
                  <li>Health System: Comprehensive health management for players and enemies</li>
                  <li>Enemy AI: Intelligent enemies that detect and engage with the player</li>
                  <li>Visual Effects: Particle systems for shooting trails and explosions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">How to Play</h3>
                <div className="space-y-4 text-white/80">
                  <div>
                    <h4 className="font-bold mb-2">Basic Controls</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Movement: W (forward), S (backward), A (left), D (right)</li>
                      <li>Camera: Mouse movement for aiming</li>
                      <li>Shooting: Left Mouse Button</li>
                      <li>Arc Height: E (increase), Q (decrease)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Game Objective</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Eliminate all enemy tanks to win</li>
                      <li>Maintain health by avoiding enemy fire and collecting health packs</li>
                      <li>Game ends if health reaches zero</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {['Unity', 'C#', 'OOP', '3D Graphics', 'Game Development'].map((tech) => (
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
        </div>

        {/* Installation Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">Installation</h2>
            <div className="space-y-4 text-white/80">
              <p>To install the game:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Download the latest patch from GitHub</li>
                <li>Unzip the downloaded file</li>
                <li>Run "Tanks (OOP Project).exe"</li>
              </ol>
              <div className="mt-6">
                <a 
                  href="https://github.com/RyanPNSmith/Object-Oriented-Tanks/blob/main/OOTanksWindows.7z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#24292e] hover:bg-[#2c3238] text-white rounded-lg transition-colors"
                >
                  Download Game
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* UML Diagram Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">System Architecture</h2>
            <div className="flex items-center gap-2 mb-4 text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-sm">Interactive diagram - Click and drag to pan, scroll to zoom</p>
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
              <iframe
                src="https://mermaid.live/view#pako:eNq9V02P4jgQ_StRTr3antPeOKxEQ0_3SKBBwPRhhbQq4iLxdmIj26FBo_7vW7YT8uHAsKOe5eS4nu2q51dV5nucSIbxKE5y0HrKIVVQbEREPzcTLXI4oXpGyE0WffcW-_udCxMVcPSW3nxSKoXCBDa_2YwfUEf7ZtxCHCRn0cqAMne_9afX8IpTKCDFO3sIc8MANeUYLrWeuEVQyFKYtn2XSzDRE1beLlAl5Lo9pEK9b0RIiI-hz4eRBvJ-SC1C-qb1fPH3Go8myvkOJ9YzVPb7RkJmUuOMVoaWJWr0p4W2Jyjw6wFVx2KdJA4mLT_Dld_2DIw7sfL1KkVzecCCNuuw5NkuyLTaI7LAoohBw6XoW9cKhN5JVUQJua_g_D2IMSBeH0Bjy7jkKWdbyU6R2t5I72d-ROZjvhroKpOyG6WjePsPJibalnmOZqFwB9tBX3dccZEuJN1AwAao5Bl5ml2xTDIQKS7JxwBDOw8bBEnsMxnXvMDhOw7JcEF2pl8oPKn-iCaQJ2VOi8YqecFcJtyc7mqjttS64O6jeg4Fq2Z6sVwjecyLGRfYodlOLGk3VKgohZqPS0Rjn-aJzKVf6ka9hLDzK0ytiNtZO3EKpOLHhR8GFc4rYt-Mb1TcJfKnCt6I3TOrtDpFT-v_ciMt7Txqwwva2mpnLdfOkY-87bo6zUFQDVaX0iqtYBMQB-hXW4X2biirHgUW_Ob-8gyC5ehvcIpgsksQu-3pAoKu--2p49xgdbYeWNhQUQc2J_fnKMrQ-lVMabGSpwsVybn2Qd1a21KcROPEFmQ6uQn7lzbsbivyXt3a0YfYGH_5kA7krQwNOj6WtuwGZm2TnYTXt35UQ7hY0oc6RbOlr0S3VpulZYCS-w0U0z4dQpDt7j-AuMo3NlWN-CWFKrtSSR6P-1wyovJBHjsKWNC-PMlxddIGiwgtTtOVPu52dEyYcdQacu4A7s1z_oySehSE7s--9GyoXpqQvAY5mpFp7BQd-rFWPKWS2PKCml0kTYbq2jkPoL51U2DlV2bO7D-CFlbVkH3r47p-Brs2LWQzKbtx9nVpQf8xDamUjUWa441duZYPeWZegAKeUh65NP6pxnwOtUPVp09_dv4cjKJS172n9yJuoP6lEEL9fIOrnz9tZL9VNujKoxG9YEji4gq-3S968Lp4DmzLrQQhqV9FnUz7Mbwl_1vBXsMDaMa1FZHu3YcXXYM_M9_aP76PSSakF0Z_f50-NzHlEj2J4xENGajXTbwR74SD0sjVSSTxyKgS72MlyzSLRzvINX2VThzVf-casgfxl5RFBXr_F4PS2do"
                className="w-full h-full"
                title="UML Diagram"
              />
            </div>
          </div>
        </div>

        {/* Divider before Source Code */}
        <hr className="my-8 border-white/10 max-w-4xl mx-auto" />

        {/* GitHub Section */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">Source Code</h2>
            <div className="flex items-center justify-center">
              <a 
                href="https://github.com/RyanPNSmith/Object-Oriented-Tanks"
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
      </main>

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