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
            <button className="leave_a_comment_btn" onClick={() => router.push('/comment-form')}>Dejanos tu comentario!</button>
            {
                comments.map((comment, index) => (
                    <div key={index} className='comment'>
                        <p>{comment.email}</p>
                        <h1>{comment.name}</h1>
                        <p>{comment.comment}</p>
                    </div>
                ))
            }

            <style jsx>{`
                button {
                    border:none;
                    outline:none;
                    color:white;
                    background: #802020;
                }

                .comment {
                    background:rgba(150,150,150,.6);
                    width:50vw;
                    border-radius:1rem;
                    padding:1rem;
                }
            `}</style>
        </>
    )
}

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        return {
            props: {
                data
            }
        }
    } catch (err) {
        console.log(err)
    }
}