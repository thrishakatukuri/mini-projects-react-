import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-yellow-500 p-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="text-3xl font-bold text-black hover:text-white">Thrisha</Link>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-xl font-bold">
                    <Link to="/Home"    className="hover:text-white">Home   </Link>
                    <Link to="/About"   className="hover:text-white">About  </Link>
                    <Link to="/Contact" className="hover:text-white">Contact</Link>
                    <Link to="/"        className="hover:text-white">Login  </Link>
                </nav>
                {/* Mobile Menu Icon */}
                <button className="md:hidden focus:outline-none cursor-pointer" 
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="md:hidden flex flex-col mt-3  text-xl font-semibold bg-yellow-400 p-3 rounded-b font-bold text-center">
                    <Link to="/Home"     className="hover:text-white my-2" onClick={() => setIsOpen(false)}>Home   </Link>
                    <Link to="/About"    className="hover:text-white my-2" onClick={() => setIsOpen(false)}>About  </Link>
                    <Link to="/Contact"  className="hover:text-white my-2" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link to="/"         className="hover:text-white my-2" onClick={() => setIsOpen(false)}>Login  </Link>
                </nav>
            )}
        </header>
    );
};

export { Header };
