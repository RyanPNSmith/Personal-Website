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

            <h2 className="text-3xl font-semibold text-secondary mb-6 mt-12">Game Concept</h2>
            <p className="text-xl text-white/80 mb-6">
              Players control a ship that moves automatically through space, using their cursor to connect stars and form constellations. Each successful connection increases the ship's speed, creating an exciting risk-reward dynamic. The challenge intensifies as players must navigate through increasingly dense asteroid fields while maintaining their star connections.
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

            <h2 className="text-3xl font-semibold text-secondary mb-6 mt-12">Development Process</h2>
            <p className="text-xl text-white/80 mb-6">
              The development of Constellation Connection began with prototyping the core star-connecting mechanic, followed by iterative testing and refinement of the gameplay feel. The project is being developed in Unity, utilizing C# for game logic and custom shaders for visual effects. The game is planned for release on Steam, with ongoing development focused on polishing the gameplay experience and implementing additional features.
            </p>

            <div className="mb-8">
              <div className="w-full aspect-[16/9] bg-black/40 rounded-lg border border-secondary/30 flex items-center justify-center">
                <span className="text-white/40 text-lg">[Game screenshots coming soon]</span>
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-lg mt-12 border border-secondary/30">
              <h2 className="text-3xl font-semibold text-secondary mb-6">Project Goals</h2>
              <ul className="list-disc list-inside text-white/80 space-y-3 text-xl">
                <li>Create an engaging and unique gameplay experience</li>
                <li>Implement smooth and responsive controls</li>
                <li>Develop visually appealing space environments</li>
                <li>Ensure balanced difficulty progression</li>
                <li>Successfully launch on Steam platform</li>
              </ul>
            </div>

            <p className="text-xl text-white/70 mt-12">
              Constellation Connection is currently in active development. For updates on the project's progress or to learn more about the development process, please check back regularly or contact me directly.
            </p>
          </div>
        </div>
        <style jsx>{`
          .constellation-cursor {
            cursor: url('/CursorSprite.png'), auto;
          }
        `}</style>
      </div>
    </>
  );
} 