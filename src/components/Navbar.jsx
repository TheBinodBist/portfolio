import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About me", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Portfolio", href: "/projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black text-white">

        {/* Main Navbar */}
        <div className="h-14 md:h-8 px-5 md:px-7 flex items-center justify-between">

          {/* Mobile Logo */}
          <Link
            to="/"
            className="font-black italic text-xl md:hidden"
          >
            B
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-end w-full gap-9 text-[9px] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-gray-300 transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="
                bg-white
                text-black
                rounded-full
                px-4
                py-1.5
                text-[8px]
                font-semibold
                hover:bg-gray-200
                transition
              "
            >
              CONTACT ME
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X size={27} strokeWidth={2} />
            ) : (
              <Menu size={27} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 px-5 pb-5 pt-3">
            <div className="flex flex-col gap-3">

              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-sm hover:text-gray-300 transition"
              >
                Home
              </Link>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm hover:text-gray-300 transition"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  inline-flex
                  w-fit
                  bg-white
                  text-black
                  rounded-full
                  px-5
                  py-2
                  text-xs
                  font-semibold
                "
              >
                CONTACT ME
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}