import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Landingpage from "../pages/landingpage";
import { ClerkProvider } from "@clerk/clerk-react";
import {
  SignedIn,
  SignedOut,
  useUser,
  SignInButton,
  UserButton,
  SignIn
} from "@clerk/clerk-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";



const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      <nav className="bg-black text-white p-5 flex justify-around items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Spend-Wise" className="h-[40px] w-[40px]" />
          
          <Link to={"/"}><span className="font-bold text-xl sm:text-2xl">MediLock</span></Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="text-white sm:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:gap-10 font-semibold mt-4 sm:mt-0 text-sm sm:text-base`}
        >
          <Link to={"/"}>
            <li className="hover:underline cursor-pointer mt-2 sm:mt-0">
              Home
            </li>
          </Link>
          
          <Link to={"/fetch"}>
            <li className="hover:underline cursor-pointer mt-2 sm:mt-0">
              Fetch My Data
            </li>
          </Link>
          <div className="flex space-x-8 items-center">
            <SignedOut>
              <button className="hover:bg-white hover:text-black cursor-pointer hover:rounded-3xl p-2" variant="destructive" onClick={() => setShowSignIn(true)}>
                Login
              </button>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>
          </div>
        </ul>
      </nav>

      {showSignIn && (
        <div
          className="fixed flex inset-0 items-center z-50 bg-black bg-opacity-50 justify-center"
          onClick={handleOverlayClick}
        >
          <SignIn signUpForceRedirectUrl="/" fallbackRedirectUrl="/" />
        </div>
      )}
    </>
  );
};

export default Nav;
