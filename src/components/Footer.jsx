import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#101828] border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Binod Bist. All rights reserved.
        </p>

        {/* <div className="flex gap-6 text-gray-400 text-sm">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/projects" className="hover:text-white transition">Projects</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </div> */}

      </div>
    </footer>
  );
};

export default Footer;