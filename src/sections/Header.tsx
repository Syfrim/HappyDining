import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-red-800 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-white">
              <span className="md:inline hidden">Happy Dining Seafood</span>
              <span className="md:hidden inline">
                Happy Dining<br />
                Seafood
              </span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex space-x-8">
              <a href="#home" className="text-white hover:text-red-200 px-3 py-2 transition-colors">Home</a>
              <a href="#menu" className="text-white hover:text-red-200 px-3 py-2 transition-colors">Menu</a>
              <a 
                href="#contact" 
                className="text-white hover:text-red-200 px-3 py-2 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://api.whatsapp.com/send?phone=6589100288&text=Hello! Can I get more info on this?", "_blank");
                }}
              >
                Contact
              </a>
              <a 
                href="#reservation" 
                className="text-white hover:text-red-200 px-3 py-2 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://api.whatsapp.com/send?phone=6589100288&text=Hello! I would like to make a reservation.", "_blank");
                }}
              >
                Reservation
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-200"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

       
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="text-white block px-3 py-2 hover:bg-red-700 rounded-md">Home</a>
              <a href="#menu" className="text-white block px-3 py-2 hover:bg-red-700 rounded-md">Menu</a>
              <a 
                href="#contact" 
                className="text-white block px-3 py-2 hover:bg-red-700 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://api.whatsapp.com/send?phone=6589100288&text=Hello! Can I get more info on this?", "_blank");
                }}
              >
                Contact
              </a>
              <a 
                href="#reservation" 
                className="text-white block px-3 py-2 hover:bg-red-700 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://api.whatsapp.com/send?phone=6589100288&text=Hello! I would like to make a reservation.", "_blank");
                }}
              >
                Reservation
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;