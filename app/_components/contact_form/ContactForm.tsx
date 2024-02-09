"use client"

import { useRef } from "react"

const ContactForm = () => {

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const templateParams = {
      from_name: "hola",
      from_email: "email"
    }

    console.log(nameRef.current.value)

    // emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE, template_y58521m, templateParams, process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY);


    //HOW TO RESET THE FORM
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2 max-w-[35rem]">
      <input
      className="rounded-full p-4"
        id="name"
        name="name"
        type="text"
        placeholder="Nombre / Empresa"
        aria-label="nombre"
        aria-required="true"
        ref={nameRef}
      />
      <input
      className="rounded-full p-4"
        id="email"
        name="email"
        type="email"
        placeholder="e@mail.com"
        aria-label="nombre"
        aria-required="true"
        ref={nameRef}
      />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default ContactForm