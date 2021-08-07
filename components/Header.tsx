import React from 'react'
import Image from 'next/image'
import { GrWindows } from 'react-icons/gr'
import { CgMenuLeft } from 'react-icons/cg'

const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow w-full absolute z-10 transition-all ease-in-out duration-300">
      <div className="mx-auto w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl flex items-center justify-between px-4 py-2">
        <div className="block sm:hidden">
          <button>
            <CgMenuLeft className="w-6 h-6" />
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
          <ul className="flex items-center text-base lg:text-lg space-x-10">
            <li>
              <a href="#" className="font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold">
                Location
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold">
                Price
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <button
            className="text-sm sm:text-lg font-semibold py-1 px-4 md:px-6 rounded-full border-2 border-blue-600
           bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white
           transition ease-in-out duration-150"
          >
            Contact US
          </button>
        </div>
      </div>
    </header>
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
