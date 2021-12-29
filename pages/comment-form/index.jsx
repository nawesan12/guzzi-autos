import { addDoc, collection } from 'firebase/firestore';
import db from '../../database/firebase'
import Head from 'next/head'
import { useState } from 'react'

export default function CommentForm() {

    const [data, setData] = useState({email: '', name: '', comment: '', createdAt: new Date().toLocaleDateString() });    

    const enviarDatos = async () => { 
        if(data.email == '' || data.name == '' || data.comment == '') {
            alert('Todos los campos son obligatorios!')
        } else {
            await addDoc(collection(db, 'comments'), data)
            console.log("El documento fue subido exitosamente!")
        }
        
    }

    const handleChangeText = (name, event) => {
        setData({...data, [name]: event.target.value})
        console.log(data)
    }

    return(
        <>
            <Head>
            <title>Dejanos tu comentario!</title>
            <meta name="description" content="Pagina web para Guzzi Autos" />
            <link rel="icon" href="/images/car.ico" />
            </Head>
            <section className="comment-form">
                <h1>Dejanos tu comentario!</h1>
                <section className="form">
                    <input onChange={(value) => handleChangeText('email', value)} type="email" className='email' placeholder="Escribe tu email" autoFocus/>
                    <input onChange={(value) => handleChangeText('name', value)} type="text" className="name" placeholder='Escribe tu nombre' />
                    <textarea onChange={(value) => handleChangeText('comment', value)} className='comment' cols="30" rows="10" placeholder='Escribe tu comentario!'></textarea>
                    <button className='submit' onClick={() => enviarDatos()}>Enviar</button>
                </section>
            </section>

            <style jsx>{`
                .comment-form {
                    background:#292929;
                    padding:2rem;
                    color:white;
                    height:80vh;
                    width:100vw;
                    text-align:center;
                }    

                .form {
                    display:flex;
                    flex-direction:column;
                    height:80vh;
                }

                input {
                    margin-bottom:2rem;
                    border:none;
                    outline:none;
                    border-radius:1rem;
                    padding:1rem;
                }

                textarea {
                    margin-bottom:2rem;
                    border:none;
                    outline:none;
                    border-radius:1rem;
                    padding:1rem;
                    max-width:100%;
                    min-width:100%;
                    max-height:16rem;
                    min-height:16rem;
                }

                button {
                    border:none;
                    outline:none;
                    color:white;
                    background: #802020;
                    padding:1.5rem;
                    border-radius:.8rem;
                }
            `}</style>
        </>
    )
}