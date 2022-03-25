import Presentation from './Presentation';
import ServicesGrid from './ServicesGrid'

export default function Main() {
    return(
        <>
            <Presentation 
                title="Servicios"
                subtitle="Tenemos lo que tu vehiculo necesita."
                background="servicios2.gif"
                resBackground="servicios.gif"
            />
            <ServicesGrid />
        </>
    )
}