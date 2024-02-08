import Image from "next/image"

const Coaching = () => {
    return (
        <article className="bg-custom-alt-black min-h-screen py-32">
            <div className="w-screen max-w-screen-md mx-auto">
                <section className="relative w-full h-[20rem]">
                    <Image
                        className="object-cover rounded-md"
                        src="/assets/coaching.jpg"
                        alt="astronautas conversando"
                        priority
                        fill
                    />
                </section>
                <section className="grid gap-6 mt-6">
                    <h1 className="text-3xl font-bold">Coaching</h1>
                    <p>Un estudio realizado por la Asociación Internacional de Dirección de Personal (2010), revela que la formación o training llevado a cabo en una empresa, incrementa la productividad en un 22%, mientras que combinando cursos de Coaching, la productividad se eleva hasta un 88%.</p>
                    <p>Si en la empresa el enfoque está primordialmente basado en la productividad y no en el individuo, que es quien produce los beneficios para la empresa, algo fundamental falla.</p>
                    <p>La humanización de las empresas es inminente y las que ya han tenido la visión de así hacerlo, ya están cosechando los frutos de tal cambio</p>
                    <p>Con nuestra metodologia, vas a lograr un proceso de transformacion integral. Alcanzando los siguientes beneficios:</p>
                    <div>
                        <h3 className="mb-2 text-xl font-bold sticky">Mayor Liderazgo y Eficiencia</h3>
                        <p>Entrenaremos en las habilidades que se requieren para liderar las diferentes áreas y/o equipos en las organizaciones. De una manera integral para asegurarnos un mayor desempeño, alineando valores, objetivos y aumentando la motivación.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-xl font-bold">Receptividad al cambio</h3>
                        <p>El coaching es un potencial portador del CAMBIO. Generaremos conversaciones poderosas con los miembros de los equipos y líderes sobre los desafíos que presentan. Los alentaremos a conectarse con la creatividad como medio, para favorecer la comunicación y la confianza.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-xl font-bold">Confianza y Autoconocimiento</h3>
                        <p>En los equipos de trabajo, pocas veces conocen realmente a sus pares o líderes. Es por esta razón que la comunicación y los juicios que se emiten son los principales boicoteadores a los objetivos organizacionales. Generaremos encuentros de manera individual y grupal para fortalecer el autoconocimiento y los vínculos.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-xl font-bold">Coherencia en la toma de decisiones</h3>
                        <p>Es indispensable para los referentes de las organizaciones incorporar herramientas, para gestionar nuevos aprendizajes personales y profesionales. A la hora de tomar decisiones podrán avanzar en coherencia de manera integral desde el SER - SABER - HACER. Desde Expandiem facilitamos su aprendizaje y ejecución.'</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-xl font-bold">Trabajo en equipo y Comunicación efectiva</h3>
                        <p>Con nuestra intervención, trabajamos holisticamente cada encuentro para lograr un abordaje desde lo individual a la comunión del equipo. Proveemos al cliente todas las herramientas de la comunicación efectiva desde el coaching. Beneficiando la productividad y el fortalecimiento de los vínculos en dicha organización.</p>
                    </div>
                    <div className=" bg-custom-light-black rounded-lg p-8 mt-10">
                        <p className="font-thin max-w-64 mx-auto">
                            “Estamos constantemente a una decisión de una vida completamente diferente”
                        </p>
                    </div>
                </section>
            </div>
        </article>
    )
}

export default Coaching