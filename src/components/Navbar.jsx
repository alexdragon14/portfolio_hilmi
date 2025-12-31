import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import {
  LightbulbIcon,
  MenuIcon,
  MoonIcon,
  MoonStarIcon,
  SettingsIcon,
  SunIcon,
  XIcon,
} from "lucide-react";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-sky-100/60 backdrop-blur-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src={logo}
                alt="Logo"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 center"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-sky-700 pixel-font-600">Hilmi </span>
              <span className="text-black pixel-font-600">Hashim</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-6 pixel-font-400 flex-1 justify-end">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm lg:text-base transition duration-300 ${
                  isActive ? "text-sky-700" : "text-gray-500 hover:text-sky-700"
                }`
              }
            >
              Home
            </NavLink>
            <div className="relative group">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-sm lg:text-base transition duration-300 ${
                    isActive
                      ? "text-sky-700"
                      : "text-gray-500 hover:text-sky-700"
                  }`
                }
              >
                About
              </NavLink>

              {/* Dropdown on hover */}
              <div
                className={`absolute mt-0 w-30 rounded-md shadow-lg z-50 transition-all duration-150 transform scale-95 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto ${
                  isDarkMode
                    ? "bg-slate-800 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                <NavLink
                  to="/about#experience"
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm ${
                      isDarkMode ? "hover:bg-slate-700" : "hover:bg-slate-100"
                    } transition-colors`
                  }
                >
                  Experience
                </NavLink>
                <NavLink
                  to="/about#education"
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm ${
                      isDarkMode ? "hover:bg-slate-700" : "hover:bg-slate-100"
                    } transition-colors`
                  }
                >
                  Education
                </NavLink>
                <NavLink
                  to="/about#skills"
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm ${
                      isDarkMode ? "hover:bg-slate-700" : "hover:bg-slate-100"
                    } transition-colors`
                  }
                >
                  Skills
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-sm lg:text-base transition duration-300 ${
                  isActive ? "text-sky-700" : "text-gray-500 hover:text-sky-700"
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/achievements"
              className={({ isActive }) =>
                `text-sm lg:text-base transition duration-300 ${
                  isActive ? "text-sky-700" : "text-gray-500 hover:text-sky-700"
                }`
              }
            >
              Achievements
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm lg:text-base transition duration-300 ${
                  isActive ? "text-sky-700" : "text-gray-500 hover:text-sky-700"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Menu & Setting Buttons */}
          <div className="flex items-center space-x-2 ml-6">
            <button
              className="md:hidden p-2 text-gray-500 hover:text-sky-700 transition duration-300 cursor-pointer"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <XIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <MenuIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>

            <button
              className="p-2 text-gray-500 hover:text-sky-700 transition duration-300 cursor-pointer"
              onClick={() => setIsSettingOpen((prev) => !prev)}
            >
              {isSettingOpen ? (
                <SettingsIcon className="h-5 w-5 sm:h-6 sm:w-6 text-sky-700" />
              ) : (
                <SettingsIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 hover:text-sky-700 transition duration-300 cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top pixel-font-400">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm lg:text-base transition duration-300 ${
                  isActive ? "text-sky-400" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm lg:text-base transition duration-300 ${
                  isActive ? "text-sky-400" : "text-gray-300 hover:text-white"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm lg:text-base transition duration-300 ${
                  isActive ? "text-sky-400" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/achievements"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm lg:text-base transition duration-300 ${
                  isActive ? "text-sky-400" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Achievements
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm lg:text-base transition duration-300 ${
                  isActive ? "text-sky-400" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}

      {/* Setting Menu */}
      {isSettingOpen && (
        <div
          className={`fixed top-14 sm:top-16 md:top-20 right-4 ${
            isDarkMode
              ? "bg-slate-800 border-white"
              : "bg-sky-50 border-slate-700"
          } backdrop-blur-lg border rounded-lg shadow-lg w-40 animate-in fade-in zoom-in-95 duration-200`}
        >
          <div className="px-3 py-2 space-y-1">
            {/* Theme Toggle Switch */}
            <div className="flex space-x-4 block w-full text-left px-3 py-2 text-black text-sm rounded transition duration-300">
              <SunIcon
                className={`h-5 w-5 mt-0.5 transition-colors ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              />
              <div className="relative inline-block w-11 h-5">
                <input
                  checked={isDarkMode}
                  onChange={() => setIsDarkMode(!isDarkMode)}
                  id="switch-component"
                  type="checkbox"
                  className="peer appearance-none w-11 h-5 bg-slate-700 rounded-full checked:bg-white cursor-pointer transition-colors duration-300"
                />
                <label
                  htmlFor="switch-component"
                  className="absolute top-0 left-0 w-5 h-5 bg-sky-200 rounded-full border border-black shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
                ></label>
              </div>
              <MoonStarIcon
                className={`h-5 w-5 mt-0.5 transition-colors ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              />
            </div>

            {/* Language Option */}
            <button
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 text-sm rounded transition duration-300"
              onClick={() => setIsSettingOpen(false)}
            >
              Language
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
