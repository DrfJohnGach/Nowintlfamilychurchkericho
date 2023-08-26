import AppHero from '../components/carousal';
import Services from '../components/services';
import Map from '../components/map';


export default function HomePage(){
    return(
        <>
        <section>
            <AppHero />
        </section>
        <section>
            <Services />
        </section>
        <section>
            <Map />
        </section>
        </>
    )
}