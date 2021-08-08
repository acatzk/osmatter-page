import React from 'react'
import Image from 'next/image'
import { CgClose } from 'react-icons/cg'
import { GrWindows } from 'react-icons/gr'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: Function
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <aside className={`${isOpen && 'fixed z-10 inset-0'}`}>
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transform top-0 left-0 w-full bg-white text-black
        fixed h-full shadow overflow-auto ease-in-out transition-all duration-300 z-30`}
      >
        <div className="flex items-center justify-between py-10 mx-10">
          <div className="flex items-center space-x-3 flex-shrink-0">
            <GrWindows className="w-6 h-6 text-blue-logo" />
            <span className="text-base font-medium text-blue-logo">
              OS Installation
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-logo active:scale-75 transition ease-in-out duration-100"
          >
            <CgClose className="w-5 h-5" />
          </button>
        </div>
        <nav className="mt-6 mx-8">
          <ul className="flex flex-col text-2xl space-y-4">
            <li>
              <a
                href="#"
                className="block font-medium text-blue-logo text-center py-2 bg-blue-logo/10 rounded-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block font-medium hover:text-blue-logo text-center py-2 rounded-full hover:bg-blue-logo/10 transition ease-in-out duration-150"
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block font-medium hover:text-blue-logo text-center py-2 rounded-full hover:bg-blue-logo/10 transition ease-in-out duration-150"
              >
                Price
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-0 cursor-default"
        ></div>
      )}
    </aside>
  )
}

export default Sidebar
