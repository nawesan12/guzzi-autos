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
                grid-template-columns:1fr 1fr;
                grid-template-rows:1fr 1fr;
            }

            .form {
                grid-column:2 / 3;
                grid-row:1 / 3;
            }

            

            .contact-list {
                grid-column:1 / 2;
                grid-row:1 / 2;
            }
        `}</style>
        </>
    )
}