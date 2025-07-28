import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 backdrop-blur-md shadow-2xl">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg"></div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            StartupValidator<span className="text-yellow-300">.ai</span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">Home</a>
          <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">About</a>
          <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">Docs</a>
        </nav>
        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
