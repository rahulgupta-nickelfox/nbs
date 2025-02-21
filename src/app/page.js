'use client'

import dynamic from 'next/dynamic'
import '../app/globals.css'
import { useEffect } from 'react'
import Head from 'next/head'

const Header = dynamic(() => import('./components/LandingComponents/Header'))
const BenefitsSection = dynamic(() => import('./components/LandingComponents/BenefitsSection'))
const HomeBanner = dynamic(() => import('./components/LandingComponents/HomeBanner'))
const Intro = dynamic(() => import('./components/LandingComponents/Intro'))

export default function Home() {

  useEffect(() => {
    if (typeof window !== undefined) { document.title = "CEEW NBS | Home" }

  }, [])
  return (
    <>
      <Head>
        <title>CEEW NBS | Home</title>
      </Head>
      <Header />
      <HomeBanner />
      <Intro />
      <BenefitsSection />
    </>
  )
}