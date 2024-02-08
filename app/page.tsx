"use client"

import Hero from "./_components/hero/Hero"
import Why from "./_components/why/Why"
import Team from "./_components/team/Team"
import Methods from "./_components/methods/Methods"
import Presentation from "./_components/presentation/Presentation"

export default function Home() {
  return (
    <>
      <Hero />
      <Presentation />
      <Methods />
      <Why />
      <Team />
    </>
  )
}
