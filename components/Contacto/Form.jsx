import { useState } from 'react'

import { handleInput } from '../../utils/handleInput'
import { uploadData } from '../../utils/uploadData'

export default function Form() {

    const [data, setData] = useState({
        name: '',
        email: '',
        estrellas: [],
        content: '',
        createdAt: new Date().toLocaleDateString('es')
    })

    return (
        <>
        <section className="form">
            <h2>Deja tu opinion!</h2>
            <input type="text" placeholder='Nombre' onChange={(value) => handleInput('name', value, setData, data)}/>
            <input type="text" placeholder='Email'  onChange={(value) => handleInput('email', value, setData, data)}/>

            <section className="stars_container">
                    
            </section>
            
            <textarea placeholder='Escribe tu reseña...' onChange={(value) => handleInput('content', value, setData, data)}/>
            <button onClick={() => uploadData(data, 'comentarios', () => {
                console.log("Se envio el comentario: ", data)
            })}>
                ENVIAR COMENTARIO
            </button>
        </section>

        <style jsx>{`
            .form {
                grid-column:2 / 3;
                grid-row:1 / 3;
                width:100%;
                height:80%;
                border-left:2px solid var(--boring-bg);
                margin:auto;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                padding:1rem 2rem;
            }   

            h2 {
                font-size:1.8rem;
            }

            input, textarea {
                resize:none;
                width:70%;
                padding:.8rem 1rem;
                border-radius:.5rem;
                outline:none;
                border:none;
                margin-top:.5rem;
            }       

            textarea {
                min-height:30vh;
            }

            .stars_container {
                margin:1rem 0 .8rem;
            }

            button {
                background: var(--bordeaux);
                border:none;
                border-radius:.2rem;
                outline:none;
                margin:1rem 0;
                padding:1rem 2.4rem;
                font-weight:500;
                color:var(--primary-text);
                font-size:1.1rem;
                width:70%;
            }

            @media screen and (max-width:1200px) {
                input,textarea {
                    width:100%;
                }
            }
        `}</style>
        </>
    )
}