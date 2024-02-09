import Image from "next/image"

const Consulting = () => {
  return (
    <article className="bg-custom-alt-black min-h-screen px-4 py-24 sm:py-32">
      <div className="w-full max-w-screen-md mx-auto">
        <section className="relative w-full h-[20rem]">
          <Image
            className="object-cover rounded-md"
            src="/assets/conv.jpg"
            alt="astronautas conversando"
            priority
            fill
          />
        </section>
        <section className="grid gap-6 mt-6">
          <h1 className="text-3xl font-bold">Consultoría</h1>
          <p>El programa “ Mentoring” de Expandiem, nació para ayudarte a vos y tu organización.
            Los lideres, somos personas que compartimos muchas caracteristicas en comun, somos
            personas que tomamos decisiones en busqueda de un proposito exitoso.</p>
          <p>De nosotros depende el funcionamiento de nuestra empresa, con la responsabilidad que
            esto conlleva (el sustento familiar de nuestros empleados y familia). A la hora de tomar
            decisiones operativas, sabemos como resolverlas y como proceder.</p>
          <p>Lo que vamos a
            lograr con este programa es tomar decisiones estratégicas, con claridad y enfoque.</p>
          <p>Vamos a profundizar en 7 conceptos fundamentales para potenciar tu
            negocio:</p>
          <div>
            <h3 className="mb-2 text-xl font-bold sticky">Estrategia de valor</h3>
            <p>Analizaremos la situacion actual, y vamos a cotejarla con el proposito de la empresa. Plantearemos nuevas estrategias, para conseguir los objetivos deseados.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Intraemprendedurismo</h3>
            <p>A medida que las empresas crecen, tambien lo hacen las estructuras internas, y este proceso de delegar a colaboradores profesionales, nos da una oportunidad unica. Poder generar nuevos puntos de vista, para lograr nuevas unidades de negocio, o diagramar nuevos procesos.Incentivar que nuestros colaboradores emprendan dentro de distintas areas de la organizacion, puede ser el factor clave para el proximo salto evolutivo.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Expansión</h3>
            <p>Una de las maximas aspiraciones a conseguir en cualquier organizacion, es la expansion. Analizamos diversas estrategias para lograrlo, consolidando la empresa en nuevos mercados.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Sustentabilidad</h3>
            <p>Desde hace años, y sobre todo actualmente, la sustentabilidad en las empresas es un faro para muchas organizaciones, logrando trascender en la mente de los consumidores. La exigencia de la poblacion, para adquirir productos/servicios, que provengan de empresas socialmente responsables, es una realidad, y en nuestro caso, una oportunidad. Analizaremos los procesos de la empresa, para lograr anexar politicas responsables, que hagan de la empresa, un mundo mejor.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Comunicación y posicionamiento</h3>
            <p>El secreto de los negocios, es estar en la mente de los consumidores. Y la única manera de lograrlo, es diseñando el posicionamiento deseado para la marca, con una estrategia de omnicanalidad, para mejorar nuestro market share, y fidelizar a nuestros clientes actuales.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Comercialización</h3>
            <p>Desde hace mas de 60 años, diferentes expertos (sociólogos, psicólogos, economistas, publicistas, etc), pudieron deconstruir los motivos por el cual los clientes deciden comprar. Todos estos procedimientos, están al alcance de nuestro negocio. Como Licenciado en Comercialización, vamos a desarrollar un plan de marketing para alcanzar los objetivos propuestos.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold">Equilibrio personal</h3>
            <p>Vamos a trabajar, con un coach experto, para entender que te apasiona, como te gustaríaque sea tu vida hoy, dentro de 2 años, y dentro de 5 años.Es importante encontrar el equilibrio personal. Todas las personas, lidiamos con varios frentes, y a veces ahí es donde nos desenfocamos, ya que dejamos de prestar atencion a lo que realmente nos mueve. Sobre eso vamos a trabajar. En tu persona. Vamos a ayudarte a alcanzar tus propósitos.</p>
          </div>
          <p>
            Durante el programa te va a acompañar un equipo, para trabajar en tus Objetivos personales y empresariales.
          </p>
          <div className=" bg-custom-light-black rounded-lg p-8 mt-10">
            <p className="font-thin max-w-64 mx-auto">
              “Una onza de acción vale una tonelada de teoría.”<br></br>
              <span className="font-semibold">Ralph Emerson</span>
            </p>
          </div>
        </section>
      </div>
    </article>
  )
}

export default Consulting