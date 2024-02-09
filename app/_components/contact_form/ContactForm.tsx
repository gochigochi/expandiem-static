"use client"

import { useRef, useState } from "react"
import { ContactSchema } from "@/app/_utils/schemas"
import Spinner from "../common/spinner/Spinner"

const ContactForm = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    setLoading(true)
    if(error) setError(null)
    
    const target = e.target as HTMLFormElement
    const formData = new FormData(target)

    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
    }

    const validatedParams = ContactSchema.safeParse(templateParams)

    console.log(validatedParams)
    
    if (!validatedParams.success) {
      setLoading(false)
      setError("error")
      return
    }

    // emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE, template_y58521m, templateParams, process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY);
    console.log("send mail")

    //HOW TO RESET THE FORM
    setLoading(false)
  }

  return (
    <form noValidate action={handleSubmit} className="flex flex-col gap-4 w-full md:w-1/2 max-w-[35rem]">
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
      <button className="flex justify-center self-center md:self-start font-bold rounded-full p-4 bg-custom-light-black w-36">
        { loading ? <Spinner /> : "Enviar"}
      </button>
    </form>
  )
}

export default ContactForm