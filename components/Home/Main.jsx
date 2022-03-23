import HomeSlider from "./HomeSlider"
import ServicesGallery from "./ServicesGallery"
import QuoteSection from "./QuoteSection"
import Banner from "./Banner"

export default function Main() {
    return(
        <section className="home_main">
            <HomeSlider />
            <ServicesGallery />
            <QuoteSection />
            <Banner />
        </section>
    )
}