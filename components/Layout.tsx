import React from 'react'
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Windows OS Format and Installation</title>
      </Head>
      <div className="antialiased text-gray-900 bg-white min-h-screen">
        {children}
      </div>
    </React.Fragment>
  )
}

export default Layout
