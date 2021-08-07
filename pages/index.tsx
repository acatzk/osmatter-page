import React, { useState } from 'react'
import { NextPage } from 'next'
import Header from 'components/Header'
import Layout from 'components/Layout'
import { settings } from 'mock/settings'
import { Carousel } from 'react-responsive-carousel'

const Index: NextPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Carousel {...settings}>
          <Slide background="bg-blue-300">1</Slide>
          <Slide background="bg-indigo-300">2</Slide>
          <Slide background="bg-pink-300">3</Slide>
        </Carousel>
      </main>
    </Layout>
  )
}

function Slide({ background, children }) {
  return (
    <section
      className={`${background} min-h-screen flex items-center justify-center font-2xl font-black text-white`}
    >
      {children}
    </section>
  )
}

export default Index
