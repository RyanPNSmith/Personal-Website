import React from 'react';
import Link from 'next/link';

interface NavBarProps {
  fromColor: string; // e.g. '#897bae' or 'black'
  toColor: string;   // e.g. 'white' or 'to-background-dark'
  textColor: string; // e.g. 'black' or 'white'
}

const NavBar: React.FC<NavBarProps> = ({ fromColor, toColor, textColor }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-lg z-50 shadow-md border-b border-black/10`}
      style={{
        background: `linear-gradient(to right, ${fromColor}CC, ${toColor}CC)`
      }}
    >
      <div className="w-full px-0 sm:px-2">
        <div className="flex justify-between items-center h-16">
          <div className={`font-bold text-xl pl-4`} style={{ color: textColor }}>Ryan Smith</div>
          <div className="flex space-x-8 pr-4">
            <a
              href="/#about"
              className={`hover:text-secondary transition-colors text-lg`}
              style={{ color: textColor }}
            >
              about
            </a>
            <a
              href="/#projects"
              className={`hover:text-secondary transition-colors text-lg`}
              style={{ color: textColor }}
            >
              projects
            </a>
            <a
              href="/#contact"
              className={`hover:text-secondary transition-colors text-lg`}
              style={{ color: textColor }}
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 