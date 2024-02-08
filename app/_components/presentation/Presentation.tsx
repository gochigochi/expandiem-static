import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn, slideIn } from "@/app/_variants/variants"

const Presentation = () => {
    return (
        <section className="bg-custom-alt-black py-16 sm:py32">
            <motion.div
                initial="initial"
                whileInView="appear"
                viewport={{ once: true }}
                className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 sm:gap-16"
            >
                <div className="md:col-span-5 lg:col-span-6">
                    <motion.div variants={fadeIn} className="relative w-full h-full" >
                        <Image className="object-cover rounded-lg" src="/assets/walk.jpg" alt="personas trabajando" fill />
                    </motion.div>
                </div>
                <div className="max-w-2xl md:col-span-7 lg:col-span-6 space-y-8">
                    <motion.h2 className="text-4xl font-bold" variants={slideIn}>
                        Llevamos tu organización <br></br><span className="text-custom-pink">al próximo nivel</span>
                    </motion.h2>
                    <motion.p variants={slideIn}>En Expandiem acompañamos al Directorio en todo el proceso, para alcanzar los siguientes beneficios</motion.p>
                    <motion.div variants={slideIn} className="space-y-6">
                        <h3 className="font-bold uppercase tracking-widest">
                            <span className="border-l-8 rounded-lg mr-2 border-custom-pink" aria-hidden="true"></span>
                            <span>Consultoría</span>
                        </h3>
                        <p>Analizar el negocio, descubrir nuevas oportunidades y potenciarlas.</p>
                        <Link className="inline-block bg-custom-light-black rounded-md p-3" href="/consultoria">Ver programa</Link>
                    </motion.div>
                    <motion.div variants={slideIn} className="space-y-6">
                        <h3 className="font-bold uppercase tracking-widest">
                            <span className="border-l-8 rounded-lg mr-2 border-custom-pink" aria-hidden="true"></span>
                            <span>Coaching</span>
                        </h3>
                        <p>Optimizar el bienestar organizacional, fortaleciendo la eficiencia y el liderazgo.</p>
                        <Link className="inline-block bg-custom-light-black rounded-md p-3" href="/coaching">Ver programa</Link>
                    </motion.div>
                </div>
            </motion.div>
        </section >
    )
}

export default Presentation