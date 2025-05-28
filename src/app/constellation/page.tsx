"use client";
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/next";

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const AsteriodSprites = [
  '/ConstellationConnections/Asteriod Sprite1.png', // Update with your actual filenames
  '/ConstellationConnections/Asteriod Sprite2.png'
];

function Asteriod({ sprite, top, duration, delay, size, direction }: any) {
  return (
    <img
      src={sprite}
      alt="Asteroid"
      style={{
        position: 'absolute',
        top: `${top}%`,
        left: direction === 'right' ? '-80px' : '100vw',
        width: size,
        height: 'auto',
        animation: `Asteriod-move-${direction} ${duration}s linear ${delay}s forwards`,
        pointerEvents: 'none',
        zIndex: 5,
      }}
    />
  );
}

function AsteroidShow() {
  const [Asteriods, setAsteriods] = useState<any[]>([]);

  useEffect(() => {
    let isMounted = true;
    function spawnAsteroid() {
      if (!isMounted) return;
      const duration = getRandomInt(6, 14);
      const direction = Math.random() > 0.5 ? 'right' : 'left';
      const key = Date.now() + '-' + Math.random();
      setAsteriods(prev => [
        ...prev,
        {
          sprite: AsteriodSprites[getRandomInt(0, AsteriodSprites.length - 1)],
          top: getRandomInt(5, 80),
          duration,
          delay: 0,
          size: getRandomInt(32, 64),
          direction,
          key,
        }
      ]);
      setTimeout(spawnAsteroid, getRandomInt(1000, 2500)); // spawn every 1-2.5 seconds
      // Remove asteroids after their animation duration
      setTimeout(() => {
        setAsteriods(prev => prev.filter(a => a.key !== key));
      }, duration * 1000 + 100); // +100ms buffer
    }
    spawnAsteroid();
    return () => { isMounted = false; };
  }, []);

  return (
    <>
      {Asteriods.map((m) => (
        <Asteriod key={m.key} {...m} />
      ))}
      <style jsx global>{`
        @keyframes Asteriod-move-right {
          0% { left: -80px; }
          100% { left: 100vw; }
        }
        @keyframes Asteriod-move-left {
          0% { left: 100vw; }
          100% { left: -80px; }
        }
      `}</style>
    </>
  );
}

export default function ConstellationProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Analytics />
      <NavBar fromColor="rgba(0, 0, 0, 0.2)" toColor="rgba(26, 26, 46, 0.2)" textColor="white" />
      <div className="min-h-screen bg-gradient-to-b from-black via-black to-background-dark text-white py-20 px-4 pt-32 relative overflow-hidden constellation-cursor">
        <AsteroidShow />
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-secondary hover:underline text-base mb-8 inline-block">&larr; Back to Home</Link>
          
          <h1 className="text-5xl font-bold mb-6 text-white">Constellation Connection</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-white/80 mb-8">
              Constellation Connection is an innovative space-themed game where players navigate through the cosmos, connecting stars to create constellations while avoiding obstacles. The game combines intuitive controls with challenging gameplay mechanics, creating an engaging experience that tests both reflexes and strategic thinking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-black/40 p-6 rounded-lg border border-secondary/30">
                <h3 className="text-2xl font-semibold text-secondary mb-4">Core Mechanics</h3>
                <ul className="list-disc list-inside text-white/80 space-y-3 text-lg">
                  <li>Cursor-based star connection system</li>
                  <li>Dynamic ship acceleration mechanics</li>
                  <li>Procedurally generated asteroid fields</li>
                  <li>Score multiplier system</li>
                  <li>Progressive difficulty scaling</li>
                </ul>
              </div>
              <div className="bg-black/40 p-6 rounded-lg border border-secondary/30">
                <h3 className="text-2xl font-semibold text-secondary mb-4">Technical Features</h3>
                <ul className="list-disc list-inside text-white/80 space-y-3 text-lg">
                  <li>Unity game engine implementation</li>
                  <li>Custom physics system</li>
                  <li>Particle effects and visual feedback</li>
                  <li>Optimized performance</li>
                  <li>Steam integration</li>
                </ul>
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-lg mb-12 border border-secondary/30">
              <h2 className="text-3xl font-semibold text-secondary mb-6">Latest Gameplay Demo</h2>
              <p className="text-xl text-white/80 mb-6">
                Check out this recent test demo from the latest version of Constellation Connection. Watch as the player navigates through space, connecting stars while avoiding asteroids. The gameplay showcases the dynamic speed mechanics and the risk-reward system of star connections.
              </p>
              <div className="relative w-full aspect-video bg-black/30 rounded-lg border border-secondary/30 overflow-hidden">
                <video
                  src="/ConstellationConnections/Gameplay.mp4"
                  className="w-full h-full object-cover"
                  controls
                  muted
                  loop
                />
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-secondary mb-6">Game Interface</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div 
                    className="relative w-full aspect-video bg-black/30 rounded-lg border border-secondary/30 overflow-hidden cursor-pointer hover:border-secondary/60 transition-colors"
                    onClick={() => setSelectedImage('/ConstellationConnections/MainMenu.png')}
                  >
                    <Image
                      src="/ConstellationConnections/MainMenu.png"
                      alt="Constellation Connection Main Menu"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-secondary mb-2">Main Menu</h3>
                    <p className="text-white/60">The game's main interface, featuring navigation options and game settings.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div 
                    className="relative w-full aspect-video bg-black/30 rounded-lg border border-secondary/30 overflow-hidden cursor-pointer hover:border-secondary/60 transition-colors"
                    onClick={() => setSelectedImage('/ConstellationConnections/PauseMenu.png')}
                  >
                    <Image
                      src="/ConstellationConnections/PauseMenu.png"
                      alt="Constellation Connection Pause Menu"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-secondary mb-2">Pause Menu</h3>
                    <p className="text-white/60">Access game options, settings, and return to the main menu during gameplay.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-lg mb-12 border border-secondary/30">
              <h2 className="text-3xl font-semibold text-secondary mb-6">Game Sprites</h2>
              <p className="text-xl text-white/80 mb-6">
                Take a look at some of the sprites that I have made that are currently in the game. Click on any sprite to view it in full size.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div 
                  className="relative aspect-square bg-black/30 rounded-lg border border-secondary/30 overflow-hidden cursor-pointer hover:border-secondary/60 transition-colors"
                  onClick={() => setSelectedImage('/ConstellationConnections/Ship Sprite.png')}
                >
                  <Image
                    src="/ConstellationConnections/Ship Sprite.png"
                    alt="Player Ship Sprite"
                    fill
                    className="object-contain p-4"
                    quality={100}
                    unoptimized
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 text-center text-sm">
                    Player Ship
                  </div>
                </div>
                <div 
                  className="relative aspect-square bg-black/30 rounded-lg border border-secondary/30 overflow-hidden cursor-pointer hover:border-secondary/60 transition-colors"
                  onClick={() => setSelectedImage('/ConstellationConnections/DogSpriteShipNormal.png')}
                >
                  <Image
                    src="/ConstellationConnections/DogSpriteShipNormal.png"
                    alt="Dog Ship Sprite"
                    fill
                    className="object-contain p-4"
                    quality={100}
                    unoptimized
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 text-center text-sm">
                    Dog Ship
                  </div>
                </div>
                <div 
                  className="relative aspect-square bg-black/30 rounded-lg border border-secondary/30 overflow-hidden cursor-pointer hover:border-secondary/60 transition-colors"
                  onClick={() => setSelectedImage('/ConstellationConnections/DogSpriteDamage.gif')}
                >
                  <Image
                    src="/ConstellationConnections/DogSpriteDamage.gif"
                    alt="Dog Ship Damage Animation"
                    fill
                    className="object-contain p-4"
                    quality={100}
                    unoptimized
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 text-center text-sm">
                    Dog Ship Damage
                  </div>
                </div>
                <div 
                  className="relative aspect-square bg-black/30 rounded-lg border border-secondary/30 overflow-hidden cursor-pointer hover:border-secondary/60 transition-colors"
                  onClick={() => setSelectedImage('/ConstellationConnections/Asteriod Sprite1.png')}
                >
                  <Image
                    src="/ConstellationConnections/Asteriod Sprite1.png"
                    alt="Asteroid Sprite 1"
                    fill
                    className="object-contain p-4"
                    quality={100}
                    unoptimized
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 text-center text-sm">
                    Asteroid Type 1
                  </div>
                </div>
                <div 
                  className="relative aspect-square bg-black/30 rounded-lg border border-secondary/30 overflow-hidden cursor-pointer hover:border-secondary/60 transition-colors"
                  onClick={() => setSelectedImage('/ConstellationConnections/Asteriod Sprite2.png')}
                >
                  <Image
                    src="/ConstellationConnections/Asteriod Sprite2.png"
                    alt="Asteroid Sprite 2"
                    fill
                    className="object-contain p-4"
                    quality={100}
                    unoptimized
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 text-center text-sm">
                    Asteroid Type 2
                  </div>
                </div>
                <div 
                  className="relative aspect-square bg-black/30 rounded-lg border border-secondary/30 overflow-hidden cursor-pointer hover:border-secondary/60 transition-colors"
                  onClick={() => setSelectedImage('/ConstellationConnections/CursorSprite.png')}
                >
                  <Image
                    src="/ConstellationConnections/CursorSprite.png"
                    alt="Custom Cursor Sprite"
                    fill
                    className="object-contain p-4"
                    quality={100}
                    unoptimized
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 text-center text-sm">
                    Custom Cursor
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-lg mb-12 border border-secondary/30">
              <h2 className="text-3xl font-semibold text-secondary mb-6">Development Status</h2>
              <div className="space-y-4">
                <p className="text-xl text-white/80">
                  Constellation Connection is currently in active development. Please note that:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-3 text-xl">
                  <li>All images, UI elements, and gameplay features shown are subject to change</li>
                  <li>Some features and content are still in development</li>
                  <li>A Steam page will be added here once the game is ready for wishlisting</li>
                </ul>
                <p className="text-xl text-white/80 mt-4">
                  Stay tuned for updates as we continue to develop and refine the game! For updates on the project's progress or to learn more about the development process, please check back regularly or contact me directly.
                </p>
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-lg border border-secondary/30">
              <h2 className="text-3xl font-semibold text-secondary mb-6">Project Roadmap</h2>
              <p className="text-xl text-white/80 mb-6">
                Follow the development progress of Constellation Connection through my  GitHub project board. Here you can track upcoming features, current development tasks, and the overall project timeline.
              </p>
              <a 
                href="https://github.com/users/RyanPNSmith/projects/3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-secondary/20 hover:bg-secondary/30 text-white rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Project Roadmap
              </a>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-[70vw] max-h-[70vh] bg-black/50 p-4 rounded-lg">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                width={800}
                height={600}
                className="object-contain w-full h-full"
              />
              <button 
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
        <style jsx>{`
          .constellation-cursor {
            cursor: url('/ConstellationConnections/CursorSprite.png'), auto;
          }
        `}</style>
      </div>
    </>
  );
} 