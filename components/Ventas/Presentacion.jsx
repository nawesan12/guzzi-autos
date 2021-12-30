export default function Presentacion() {
    return(
        <>
        <section className="presentacion">
            <h1 className="title">Ventas</h1>
            <span>Autos de todo tipo</span>
            <p className="lema">Tenemos el usado que buscas</p>
        </section>
        <div></div>
        <style jsx>{`
            .presentacion {
                height:100vh;
                width:100%;
                color:white;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                background:url('https://monophy.com/media/jtbfEofwMbVrG/monophy.gif') no-repeat left;
                background-size:cover;
            }    

            .presentacion h1 {
                font-family: 'Black Ops One', cursive;
                font-size:2.8rem;
                margin-bottom:5rem;
            }
        `}</style>
        </>
    )
}