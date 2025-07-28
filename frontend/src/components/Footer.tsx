import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12 py-4 text-center text-sm text-gray-600">
      <p>&copy; {new Date().getFullYear()} StartupValidator.ai. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
