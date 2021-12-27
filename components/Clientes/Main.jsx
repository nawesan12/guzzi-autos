import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Main({ data }) {

    const router = useRouter();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            const response = await fetch(`http://localhost:3000/api/comments`);
            const data = await response.json();

            setComments(data);
        }

        getComments();
    }, [])

    return(
        <>
            <button onClick={() => router.push('/comment-form')}>Dejanos tu comentario!</button>
            {
                comments.map((comment, index) => (
                    <div key={index}>
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