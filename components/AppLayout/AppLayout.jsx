import Header from './Header'
import Footer from './Footer'

export default function AppLayout({children}) {
    return(
        <>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
}