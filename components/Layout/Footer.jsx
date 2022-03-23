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
            }    
        `}</style>
        </>
    )
}