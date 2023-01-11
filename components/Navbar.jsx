//import {useState, useEffect,useRef} from 'react'
import React from "react";
import { A, Nav, P, Span } from "./Tags";

const Navbar = (props) => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Nav aria-label="Site Header" className="bg-white">
        <div className="mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
          <A className="block text-blog" href="/">
            <Span className="sr-only">Home</Span>
            <P className="text-2xl font-bold text-blog hover:text-blog/75 ">
              Pot Game
            </P>
          </A>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <A
                    className="font-semibold text-gray-700 transition hover:text-blog/75"
                    href="/#services"
                  >
                    Services
                  </A>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <button className="block rounded-md bg-blog px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blog/75">
                  <A href="/login">Sign in</A>
                </button>

                <A
                  className="hidden rounded-md bg-red-100 px-5 py-2.5 text-sm font-medium text-blog transition hover:text-blog/75 sm:block"
                  href="/"
                >
                  Register
                </A>
              </div>

              <button
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-blog/75 md:hidden"
                onClick={() => setShow(!show)}
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile View toggle menu */}
          <div
            className={
              `absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-10 mt-16 flex flex-col w-full gap-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 justify-end` +
              (show ? " block" : " hidden")
            }
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 align-middle content-center">
              <A
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blog/75 hover:bg-gray-50"
              >
                Game
              </A>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default React.memo(Navbar);
