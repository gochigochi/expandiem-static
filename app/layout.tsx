import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './_components/layout/nav_bar/NavBar'
import Footer from './_components/layout/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Expandiem - Consultora empresarial',
  description: 'Consultoría y coaching empresarial - Acompañamos a las empresas para escalar y optimizar su crecimiento',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        <main className='overflow-x-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
