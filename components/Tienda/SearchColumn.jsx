import { handleInput } from "../../utils/handleInput"

export default function SearchColumn({ setQuery, query }) {

    

    return (
        <>
            <section className="search_column">
                <h1>Guzzi Autos</h1>
                <input type="text" placeholder="Buscar Producto" onChange={(value) => handleInput('query', value, setQuery, query)}/>        
            </section>
            <style jsx>{`
                .search_column {
                    display:flex;
                    flex-direction:column;
                    margin: 0 0 1.2rem;
                }

                h1 {
                    font-size: 2.5rem;
                    text-align:center;
                    padding: 0 2.5rem;
                    margin: 1rem 0;
                    font-family: 'Russo One';
                    letter-spacing: .2rem;
                }    

                input {
                    padding: .8rem 1.2rem;
                    margin: 0 2rem;
                    border: 1px solid #555;
                    border-radius: .4rem;
                    outline:none;
                }
            `}</style>
        </>
    )
}