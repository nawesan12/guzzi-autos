import Servicio from './Servicio';	


export default function ServiciosCont() {

    const servicios = [
        {
            title: 'Lavado Completo',
            description: 'Lavamos su vehiculo para dejarlo en condiciones optimas! Sin perder ningun detalle, y dando la mejor entrega posible.',
            image1: '/images/before-and-after/auto1.jpeg',
            image2: '/images/before-and-after/auto2.jpeg',
        },
        {
            title: 'Lavado y Acondicionado de Motor',
            description: 'Limpieza total y detallada de su motor para que quede en condiciones optimas! \n' + 'Beneficios: \n' + '-Mejor respiracion del motor \n' + '-Detectar perdidas de fluidos \n' + '-Limpieza de fluidos de perdidas solucionadas \n' + '-Hidratacion de plasticas y mangueras maltratadas por suciedad y temperatura',
            image1: '/images/before-and-after/motor4.jpeg',
            image2: '/images/before-and-after/motor6.jpeg',
        },
        {
            title: 'Lavado y Acondicionado de llantas',
            description:'Lavado de llantas para dejarlas como recien compradas',
            image1: '/images/before-and-after/ruedasola1.jpeg',
            image2: '/images/before-and-after/ruedasola2.jpeg',
        },
        {
            title: 'Limpieza de tapizados',
            description:'',
            image1: '/images/before-and-after/interioratras1.jpeg',
            image2: '/images/before-and-after/interioratras2.jpeg',
        },
        {
            title: 'Limpieza interior COMPLETA',
            description:'- Tapizados completos: Se desmontan las butacas al exterior para un mejor acceso a lo que no se ve. - Paneles de puerta:Botones, manijas, guantera al detalle- Tablero/torpedo:Volante, comando de luces, botones,  comando de limpiaparabrisas, salidas de calefacción/aire, etc.- Burletes y colizas- Bisagras de puertas y baul con sus respectivos parantes- Alfombras de goma y piso- Techo-           Limpieza detallada (endija por endija) resultados MUY notorios!!',
            image1: '/images/before-and-after/interior1.jpeg',
            image2: '/images/before-and-after/interior2.jpeg',
        },
        {
            title: 'Abrillantados',
            description:'Pulido y encerado en un solo paso',
            image1: '/images/before-and-after/auto1.jpeg',
            image2: '/images/before-and-after/auto2.jpeg',
        },
        {
            title: 'Pulido de optica',
            description:'',
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