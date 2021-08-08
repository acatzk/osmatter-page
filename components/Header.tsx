import React, { useState } from 'react'
import Image from 'next/image'
import { GrWindows } from 'react-icons/gr'
import Sidebar from './Sidebar'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <React.Fragment>
      <header className="bg-white/70 backdrop-blur-md shadow w-full absolute z-10 transition-all ease-in-out duration-300">
        <div className="mx-auto w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl flex items-center justify-between px-4 py-2">
          <div className="block sm:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="focus:outline-none active:scale-95"
            >
              <svg
                className="w-6 h-6 text-blue-logo"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                color="#000000"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M4 6h16M4 12h16M4 18h7"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            {/* Show on large size */}
            <div className="hidden md:block">
              <Logo
                src="/assets/svgs/windows-with-name.svg"
                width={150}
                heigth={40}
                objectFit="cover"
              />
            </div>
            {/* Show on small size */}
            <div className="block md:hidden">
              <GrWindows className="w-6 h-6 text-blue-logo" />
            </div>
          </div>
          <nav className="hidden sm:block">
            <ul className="flex items-center text-sm lg:text-base space-x-10">
              <li>
                <a href="#" className="font-medium text-blue-logo">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium hover:text-blue-logo transition ease-in-out duration-150"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium hover:text-blue-logo transition ease-in-out duration-150"
                >
                  Price
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <button
              className="text-sm sm:text-base font-medium md:font-semibold py-1 px-3 md:px-6 rounded-full border sm:border-2 border-blue-logo
           bg-transparent text-blue-logo hover:bg-blue-logo hover:text-white
           transition ease-in-out duration-150 active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </React.Fragment>
  )
}

function Logo({ src, width, heigth, objectFit }) {
  return (
    <div className="flex-shrink-0">
      <Image
        src={src}
        width={width}
        height={heigth}
        objectFit={objectFit}
        alt="main-logo"
        className="text-blue-600"
        quality={100}
      />
    </div>
  )
}

export default Header
