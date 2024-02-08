import { motion } from "framer-motion"
import { slideIn } from "@/app/_variants/variants" 
import { features } from "@/app/_data/features"

const Why = () => {
    return (
        <section className="bg-custom-alt-black py-16 sm:py32">
            <motion.div
                initial="initial"
                whileInView="appear"
                viewport={{ once: true }}
                className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-16"
            >
                <div className="md:col-span-5 lg:col-span-6">
                    <motion.h2 className="text-4xl font-bold" variants={slideIn}>
                        ¿Para qué confiar <span className="text-custom-pink">la expansión y el posicionamiento de tu marca </span> a Expandiem?
                    </motion.h2>
                </div>
                <div className="max-w-2xl md:col-span-7 lg:col-span-6 space-y-8">
                    <div className="grid grid-cols-1 divide-y">
                        {
                            features.map(feature => {
                                return (
                                    <motion.div
                                        key={feature.id}
                                        variants={slideIn}
                                        className=" px-3 py-4 space-y-4 transition-colors hover:bg-custom-light-black"
                                    >
                                        <h3 className="font-bold uppercase tracking-widest">
                                            <span className="border-l-8 rounded-lg mr-2 border-custom-pink" aria-hidden="true"></span>
                                            <span>{feature.slug}</span>
                                        </h3>
                                        <p>{feature.text}</p>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </motion.div>
        </section >
    )
}

export default Why