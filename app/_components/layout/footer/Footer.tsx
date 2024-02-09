import React from 'react'
import ContactForm from '../../contact_form/ContactForm'

const Footer = () => {
  return (
    <footer className="bg-custom-alt-black py-16 sm:py32">
        <div className="max-w-screen-2xl mx-auto px-4">
            <div className="flex flex-wrap gap-10 justify-between">
                <div>
                    <p className="text-3xl font-bold mb-2">Dejanos tu correo para que podamos contactarte</p>
                    <p className="text-xl">O contactanos a info@expandiem.com</p>
                </div>
                <ContactForm />
            </div>
            <div>
                <p>derechos</p>
                <div>
                    <i>social</i>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer