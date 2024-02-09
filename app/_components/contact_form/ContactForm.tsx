"use client"

import emailjs from '@emailjs/browser'
import { useRef, useState } from "react"
import { ContactSchema } from "@/app/_utils/schemas"
import Spinner from "../common/spinner/Spinner"

const ContactForm = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const formRef = useRef<HTMLFormElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (formData: FormData) => {

    if (error) setError(null)
    
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
    }

    const validatedParams = ContactSchema.safeParse(templateParams)

    if (validatedParams.success === false) {
      setError(validatedParams.error.issues[0].message)
      setLoading(false)
      return
    }

    try {

      const response = await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE, "template_y58521m", templateParams, process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY);
      
      if (response.status !== 200) {
        setError("Ocurrió un error")
        return
      }

      setSuccess(true)
      setTimeout(() => setSuccess(null), 3000)

    } catch (err) {

      console.log(err)
      setError("Ocurrió un error")

    }

    setLoading(false)

    formRef.current.reset()
  }

  return (
    <form ref={formRef} noValidate action={handleSubmit} className="relative flex flex-col gap-4 w-full md:w-1/2 max-w-[35rem]">
      <input
        className="rounded-full p-4"
        id="name"
        name="name"
        type="text"
        placeholder="nombre / empresa"
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
        ref={emailRef}
      />
      <button onClick={() => setLoading(true)} className="flex justify-center self-center md:self-start font-bold rounded-full p-4 bg-custom-light-black w-36">
        {loading ? <Spinner /> : null} Enviar
      </button>
      {error ? <span className="absolute -bottom-8 left-2 text-red-400">{error}</span> : null}
      {success ? <span className="absolute -bottom-8 left-2 text-green-400">Recibimos tu mensaje</span> : null}
    </form>
  )
}

export default ContactForm