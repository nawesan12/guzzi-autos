import Servicio from './Servicio';	


export default function ServiciosCont() {

    const servicios = [
        {
            title: 'Lavado Completo',
            description: 'Lavamos enteramente su vehiculo para dejarlo en condiciones optimas! Sin perder ningun detalle, y dando la mejor entrega posible.',
            image1: '/images/before-and-after/auto1.jpeg',
            image2: '/images/before-and-after/auto2.jpeg',
        },
        {
            title: 'Lavado y Detallado de Motor',
            description: 'Limpieza total y detallada de su motor, para que su interior quede en condiciones optimas!',
            image1: '/images/before-and-after/motor4.jpeg',
            image2: '/images/before-and-after/motor6.jpeg',
        },
        {
            title: 'Limpieza de llantas y pasaruedas',
            description:'Lavado de llantas y pasaruedas, dejandolas con un brillo inigualable!',
            image1: '/images/before-and-after/ruedasola1.jpeg',
            image2: '/images/before-and-after/ruedasola2.jpeg',
        },
        {
            title: 'Limpieza de tapizados',
            description:'Limpieza a fondo de su tapizado automotriz.',
            image1: '/images/before-and-after/interioratras1.jpeg',
            image2: '/images/before-and-after/interioratras2.jpeg',
        },
        {
            title: 'Limpieza interior completa',
            description:'Limpieza, aspiracion y puesta a punto del interior de su vehiculo! Dejandolo como recien comprado.',
            image1: '/images/before-and-after/interior1.jpeg',
            image2: '/images/before-and-after/interior2.jpeg',
        },
        {
            title: 'Abrillantados',
            description:'Abrillantamos su vehiculo dejandolo como nuevo!',
            image1: '/images/before-and-after/puerta1.jpeg',
            image2: '/images/before-and-after/puerta2.jpeg',
        },
        {
            title: 'Pulido de optica',
            description:'Pulido y limpieza de luces para una buena funcion de las mismas!',
            image1: '/images/before-and-after/optica1.jpeg',
            image2: '/images/before-and-after/optica2.jpeg',
        },
        {
            title: 'Y mucho mas...',
            description:'Consultar por nuestros demas servicios!',
            image1: '/images/before-and-after/ruedasola4.jpeg',
            image2: '/images/before-and-after/ruedapuesta2.jpeg',
        }
    ];

    return(
        <>
            <section style={{paddingBottom:'10vh', paddingTop:'5vh'}}>
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