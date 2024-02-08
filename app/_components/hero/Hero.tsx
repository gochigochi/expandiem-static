"use client"

const Hero = () => {
    return (
        <div className="relative h-svh sm:h-screen w-screen bg-black overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none scale-[1.3]">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[.35]">
                    <source src="/assets/astro.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="relative max-w-screen-2xl mx-auto px-4 top-[55svh] sm:top-[80svh]">
                <h1 className="text-4xl font-bold">Acompañamos a las empresas para <br></br><span className="text-custom-pink">escalar y optimizar su crecimiento</span></h1>
                <h3 className="text-lg">Diseñando procesos de transformación personal y organizacional</h3>
            </div>
        </div>
    )
}

export default Hero