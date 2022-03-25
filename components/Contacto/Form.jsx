import Star from '../icons/Star'

export default function Form() {
    return (
        <>
        <section className="form">
            <h2>Deja tu opinion!</h2>
            <input type="text" placeholder='Nombre'/>
            <input type="text" placeholder='Email'/>

            <section className="stars_container">
                <Star size={'1.5rem'} strokeWidth={'1.5'} strokeColor={'#fff'} fillColor={'#fff'} />
                <Star size={'1.5rem'} strokeWidth={'1.5'} strokeColor={'#fff'} fillColor={'#fff'} />
                <Star size={'1.5rem'} strokeWidth={'1.5'} strokeColor={'#fff'} fillColor={'#fff'} />
                <Star size={'1.5rem'} strokeWidth={'1.5'} strokeColor={'#fff'} fillColor={'#fff'} />
                <Star size={'1.5rem'} strokeWidth={'1.5'} strokeColor={'#fff'} fillColor={'#fff'} />
            </section>
            
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Escribe tu reseña...'/>
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
                justify-content:space-around;
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
                height:30rem;
            }

            .stars_container {
                margin:1rem 0 .8rem;
            }
        `}</style>
        </>
    )
}