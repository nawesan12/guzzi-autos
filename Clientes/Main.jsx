import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import db from '../../database/firebase'
import { getDocs, collection } from 'firebase/firestore'

export default function Main() {

    const router = useRouter();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            const comment = await getDocs(collection(db, 'comments'));
            const comments = []
    
            comment.forEach((doc) => {
                const { id, email, name, comment, createdAt } = doc.data()
                comments.push({ id, name, email, comment, createdAt })
            })
            setComments(comments)
        }
        getComments();
    }, [])

    return(
        <>
        <section className="comments">
            <button 
                className="leave_a_comment_btn" 
                onClick={() => router.push('/comment-form')}>Dejanos tu comentario!</button>
            {
                comments.map((comment, index) => (
                    <div key={index} className='comment' >
                        <h3>{comment.name}</h3>
                        <p>{comment.comment}</p>
                        <span>{comment.createdAt}</span>
                    </div>
                ))
            }
        </section>
            <style jsx>{`
                button {
                    border:none;
                    outline:none;
                    color:white;
                    background: #802020;
                    padding: 1rem 2rem;
                    font-weight:bold;
                    margin:1.5rem;
                    font-size:1.1rem;
                    border-radius:.5rem;
                    border: 2px dashed black;
                }

                .comments {
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }

                .comment {
                    margin-top:3vh;
                    background:rgba(150,150,150,.7);
                    width:80vw;
                    border-radius:.3rem;
                    padding:0 1rem;
                }

                .comment h3 {
                    text-transform:capitalize;
                }

                .comment p {
                    padding:0 .5rem;
                    margin:.2rem 0;
                }

                .comment span {
                    font-size:.8rem;
                    float:right;
                    padding:.5rem;
                }
            `}</style>
        </>
    )
}