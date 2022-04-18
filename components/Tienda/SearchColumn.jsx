import { handleInput } from "../../utils/handleInput"

export default function SearchColumn({ setQuery, query, setCartOpen }) {
    return (
        <>
            <section className="search_column">
                <h1>Guzzi Store</h1>
                <input type="text" placeholder="Buscar Producto" onChange={(value) => handleInput('query', value, setQuery, query)}/>        
                <button onClick={() => setCartOpen(true)}>Ver Carrito 
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="26" height="26" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                </button>
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

                button {
                    font-size:1.05rem;
                    padding:.5rem 1rem;
                    margin:1rem 2rem;
                    border-radius:.5rem;
                    border:1px solid var(--primary);
                    background:var(--bordeaux);
                    max-width:max-content;
                    display:flex;
                    align-items:center;
                    cursor:pointer;
                }
            `}</style>
        </>
    )
}