import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'home', href: '#home' },
    { name: 'works', href: '#works' },
    { name: 'about-me', href: '#about-me' },
    { name: 'contacts', href: '#contacts' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#282c33] border-b-0 py-6 px-4 md:px-12 lg:px-24 flex justify-between items-center">
      <div className="flex items-center gap-4 font-bold text-white text-xl z-50">
        <img src="public/image/personal.png" alt="Logo" className="w-8 h-8 rounded-full border border-[#c778dd]" />
        <div className="flex items-center gap-2">
            <span className="text-[#c7ba03]">//</span>
            <span>Avijit Biswas</span>
        </div>
      </div>
      
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-[#abb2bf] font-medium">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-white transition-colors">
            <span className="text-[#c778dd]">#</span>{link.name}
          </a>
        ))}
        
        <div className="flex items-center gap-1 font-bold">
            <span className="text-white">EN</span>
            <span className="text-[#abb2bf] cursor-pointer hover:text-white">▼</span>
        </div>
      </div>
      
      {/* Burger Icon */}
      <div className="md:hidden text-white cursor-pointer z-50" onClick={toggleMenu}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isOpen ? (
            <line x1="18" y1="6" x2="6" y2="18"></line>
          ) : (
            <line x1="3" y1="12" x2="21" y2="12"></line>
          )}
          {isOpen ? (
            <line x1="6" y1="6" x2="18" y2="18"></line>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#282c33] flex flex-col pt-32 px-12 gap-8 text-3xl text-[#abb2bf] md:hidden z-40 animate-in fade-in slide-in-from-right duration-300">
           {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors" onClick={toggleMenu}>
              <span className="text-[#c778dd]">#</span>{link.name}
            </a>
          ))}
          <div className="flex items-center gap-2 font-bold text-white mt-8">
            <span>EN</span>
            <span className="text-[#abb2bf]">▼</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
