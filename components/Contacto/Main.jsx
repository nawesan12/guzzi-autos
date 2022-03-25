import ContactList from "./ContactList"
import Map from "./Map"
import Form from "./Form"

export default function Main() {
    return(
        <>
        <section className="contact">
            <ContactList />
            <Map />
            <Form />
        </section>

        <style jsx>{`
            .contact {
                display:grid;
                height:100vh;
                width:100vw;
                grid-template-columns:1.5fr 1fr;
                grid-template-rows:1fr 1fr;
            }
        `}</style>
        </>
    )
}