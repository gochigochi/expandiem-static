"use client"

import { useState } from "react"
import Link from "next/link"
import Menu from "./menu/Menu"

const NavBar = () => {

  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="max-w-screen-2xl mx-auto px-4 py-8 flex justify-between">
        <Link className="uppercase font-bold text-2xl text-white" href="/">expan<span className="text-custom-pink">diem</span></Link>
        <div className="hidden lg:flex lg:gap-10 lg:items-center">
          <Link className="uppercase" href="/consultoria">consultoria</Link>
          <Link className="uppercase" href="/coaching">coaching</Link>
        </div>
        <div className="lg:hidden relative grid place-items-center">
          <svg onClick={() => setOpen(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#EC2AC1" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
          {open ? <Menu setOpen={setOpen} /> : null}
        </div>
      </nav>
    </header>
  )
}

export default NavBar