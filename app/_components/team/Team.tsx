import { type Bio } from "@/app/types"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { bios } from "@/app/_data/bios"
import Image from "next/image"

const Team = () => {

    const [selected, setSelected] = useState<Bio | null>(null)
    const [showSlate, setShowSlate] = useState(true)
    const [open, setOpen] = useState(false)

    const handleOpen = (bio: Bio) => {
        setSelected(bio)
        setTimeout(() => setOpen(true), 100)
    }

    useEffect(() => {
        open && setShowSlate(false)
        !open && setTimeout(() => setShowSlate(true), 500)
    }, [open])

    return (
        <section className="relative bg-custom-black py-40 sm:py32">
            <div className="flex flex-wrap justify-center gap-10 max-w-screen-2xl mx-auto">
                {
                    bios.map(bio => {
                        return (
                            <motion.div
                                key={bio.id}
                                layoutId={bio.id}
                                className={`
                                relative 
                                bg-custom-alt-black
                                rounded-lg 
                                overflow-hidden 
                                w-[350px] 
                                h-[400px]
                                pt-6 
                                border 
                                border-custom-light-black
                                ${selected?.id === bio.id ? "z-40" : "z-0"}
                                `}
                            >
                                <motion.div layoutId={`head-con-${bio.id}`} className="flex justify-center">
                                    <motion.div layoutId={`head-${bio.id}`} className="relative rounded-full overflow-hidden w-[200px] h-[200px]">
                                        <Image className="object-cover" src={bio.img} alt="" fill />
                                    </motion.div>
                                </motion.div>
                                {
                                    showSlate || bio.id !== selected.id ?
                                        <div className="px-4 py-8 grid gap-4">
                                            <motion.h3 className="text-2xl text-center font-bold">{bio.name}</motion.h3>
                                            <motion.h4 className="text-xl font-bold text-custom-pink text-center">{bio.prof}</motion.h4>
                                            <button onClick={() => handleOpen(bio)} className="bg-custom-light-black px-6 py-2 rounded-full place-self-center">bio</button>
                                        </div> : null
                                }
                            </motion.div>
                        )
                    })
                }
            </div>
            {
                open ?
                    <>
                        <div onClick={() => setOpen(false)} className="fixed inset-0 cursor-pointer bg-custom-light-black">
                            <motion.div
                                layout
                                layoutId={selected.id}
                                className="
                                relative z-40 
                                bg-custom-alt-black 
                                border-custom-light-black
                                w-[95%]
                                sm:w-[80%] 
                                max-w-[800px]
                                h-[80vh] 
                                sm:h-[500px] 
                                mx-auto 
                                my-20
                                sm:my-24 
                                px-6
                                md:px-4
                                py-6
                                cursor-default 
                                rounded-lg 
                                shadow-2xl
                                grid
                                grid-cols-12
                                gap-8
                                overflow-x-hidden
                                overflow-y-auto
                                "
                            >
                                <motion.div layoutId={`head-con-${selected.id}`} className="hidden md:flex justify-center col-span-2">
                                    <motion.div layoutId={`head-${selected.id}`} className="relative rounded-full overflow-hidden min-w-[100px] h-[100px]">
                                        <Image className="object-cover" src={selected.img} alt="" fill />
                                    </motion.div>
                                </motion.div>
                                <motion.div className="col-span-10">
                                    <div className="mb-4">
                                        <motion.p className="text-white text-xl">{selected.name}</motion.p>
                                        <motion.p className="text-custom-pink text-xl">{selected.prof}</motion.p>
                                    </div>
                                    <ul className="columns-1 sm:columns-2 list-disc list-inside mb-6">
                                        {
                                            selected.curriculum.map(i => {
                                                return (
                                                    <li key={i} className="text-white mb-2">
                                                        {i}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    {
                                        selected.statement ?
                                            <p className="p-6 rounded-lg bg-custom-light-black">
                                                {selected.statement}
                                            </p>
                                            : null
                                    }
                                </motion.div>
                            </motion.div>
                        </div>
                    </> : null
            }
        </section>
    )
}

export default Team