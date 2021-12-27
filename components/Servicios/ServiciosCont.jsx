import Servicio from './Servicio';	


export default function ServiciosCont() {

    const servicios = [
        {
            title: 'Lavado Completo',
            description: 'Lavado completo de autos y motos',
            image1: '/images/before-and-after/auto1.jpeg',
            image2: '/images/before-and-after/auto2.jpeg',
        },
        {
            title: 'Lavado y Detallado de Motor',
            description: 'Lavado y detallado de motor de autos y motos',
            image1: '/images/before-and-after/auto1.jpeg',
            image2: '/images/before-and-after/auto2.jpeg',
        },
        {
            title: 'Limpieza de llantas y pasaruedas',
            description:'',
            image1: '/images/before-and-after/auto1.jpeg',
            image2: '/images/before-and-after/auto2.jpeg',
        },
        {
            title: 'Limpieza de tapizados',
            description:'',
            image1: '/images/before-and-after/auto1.jpeg',
            image2: '/images/before-and-after/auto2.jpeg',
        },
        {
            title: 'Limpieza interior completa',
            description:'',
            image1: '/images/before-and-after/auto1.jpeg',
            image2: '/images/before-and-after/auto2.jpeg',
        },
        {
            title: 'Abrillantados',
            description:'',
            image1: '/images/before-and-after/auto1.jpeg',
            image2: '/images/before-and-after/auto2.jpeg',
        },
        {
            title: 'Pulido de optica',
            description:'',
            image1: '/images/before-and-after/auto1.jpeg',
            image2: '/images/before-and-after/auto2.jpeg',
        },
        {
            title: 'Y mucho mas...',
            description:'',
            image1: '/images/before-and-after/auto1.jpeg',
            image2: '/images/before-and-after/auto2.jpeg',
        }
    ];

    console.log(servicios)

    return(
        <>
            <section style={{paddingBottom:'10vh'}}>
                {
                    servicios.map((e, index) => (
                        <Servicio 
                            key={index} 
                            title={e.title}
                            description={e.description}
                            image1={e.image1}
                            image2={e.image2}    
                        />
                    ))
                }
            </section>
        </>
    )
}