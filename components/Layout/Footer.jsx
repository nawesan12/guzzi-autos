import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <>
        <footer className="app_footer">

        </footer>

        <style jsx>{`
            .app_footer {
                background: var(--boring-bg);
                width:100vw;
                height:70vh;
                border-top:5px solid var(--bordeaux);
                display:grid;
                grid-template-columns:repeat(4, 1fr);
                grid-template-rows:4fr 2fr 1fr;
                padding:8vh 8vh 2vh;
            }    
        `}</style>
        </>
    )
}

// 1 3 2 1