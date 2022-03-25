import Image from "next/image"

export default function ContactList() {
    return (
        <>
        <section className="contact-list">
            <section className="list">
                <li className="item">
                    <span className="image_container">
                        <Image src="/images/icons/whatsapp.png" alt="" width={28} height={28} />
                    </span>
                    <p><b>Telefono:</b>    223 5 929292</p>
                </li>
                <li className="item">
                    <span className="image_container">
                        <Image src="/images/icons/instagram.png" alt="" width={28} height={28} />
                    </span>
                    <p><b>Instagram:</b>    @guzziautos</p>
                </li>
                <li className="item">
                    <span className="image_container">
                        <Image src="/images/icons/facebook.png" alt="" width={28} height={28} />
                    </span>
                    <p><b>Facebook:</b>    Guzzi Autos</p>
                </li>
                <li className="item">
                    <span className="image_container">
                        <Image src="/images/icons/address.png" alt="" width={28} height={28} />
                    </span>
                    <p><b>Direccion:</b>    Bordabehere 9292</p>
                </li>
            </section>
        </section>

        <style jsx>{`
            .contact-list {
                padding:2.5rem;
                display:flex;
                align-items:center;
            }

            .item {
                display:flex;
                align-items:center;
            }

            p {
                display:flex;
                width:18rem;
                justify-content:space-between;
                font-size:1.25rem;
                margin-left: .5rem;
            }
        `}</style>
        </>
    )
}