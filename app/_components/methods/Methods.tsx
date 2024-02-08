import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, slideIn } from "@/app/_variants/variants"

const Methods = () => {
    return (
        <section className="bg-custom-black py-16 sm:py32">
            <motion.div
                initial="initial"
                whileInView="appear"
                viewport={{ once: true }}
                className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 sm:gap-16"
            >
                <div className="hidden md:block md:order-last md:col-span-5 lg:col-span-6">
                    <motion.div variants={fadeIn} className="relative w-full h-full" >
                        <Image className="object-cover rounded-lg" src="/assets/touch.jpg" alt="personas trabajando" fill />
                    </motion.div>
                </div>
                <div className="max-w-2xl md:col-span-7 lg:col-span-6 space-y-8">
                    <motion.h2 className="text-4xl font-bold" variants={slideIn}>
                        ¿Cómo logramos <br></br><span className="text-custom-pink">potenciar </span> tu empresa?
                    </motion.h2>
                    <motion.p variants={slideIn}>Estos son los pasos del proceso</motion.p>
                    <motion.div
                        variants={slideIn}
                        className="border border-custom-light-black rounded-md px-3 py-4 space-y-4 transition-colors hover:bg-custom-light-black"
                    >
                        <h3 className="font-bold uppercase tracking-widest">
                            <span className="border-l-8 rounded-lg mr-2 border-custom-pink" aria-hidden="true"></span>
                            <span>Análisis + propósito</span>
                        </h3>
                        <p>Introducción de la empresa.</p>
                        <p>Análisis de la situación actual, en lo personal y empresarial.</p>
                    </motion.div>
                    <motion.div
                        variants={slideIn}
                        className="border border-custom-light-black rounded-md px-3 py-4 space-y-4 transition-colors hover:bg-custom-light-black"
                    >
                        <h3 className="font-bold uppercase tracking-widest">
                            <span className="border-l-8 rounded-lg mr-2 border-custom-pink" aria-hidden="true"></span>
                            <span>Plan de acción</span>
                        </h3>
                        <p>Adónde quiero llegar en 2 y 5 años.</p>
                        <p>Tiempos de ejecución, inversión y objetivos medibles.</p>
                    </motion.div>
                    <motion.div
                        variants={slideIn}
                        className="border border-custom-light-black rounded-md px-3 py-4 space-y-4 transition-colors hover:bg-custom-light-black"
                    >
                        <h3 className="font-bold uppercase tracking-widest">
                            <span className="border-l-8 rounded-lg mr-2 border-custom-pink" aria-hidden="true"></span>
                            <span>Consultoría + Coaching</span>
                        </h3>
                        <p>Acompañamiento profesional durante todo el proceso.</p>
                        <p>Medir resultados, ir por nuevos objetivos.</p>
                    </motion.div>
                </div>
            </motion.div>
        </section >

    )
}

export default Methods