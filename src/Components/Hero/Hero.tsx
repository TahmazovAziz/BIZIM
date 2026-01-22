import HeroDescription from "./HeroDescription/HeroDescription";
import HeroProduct from "./HeroProduct/HeroProduct";
import './Hero.scss'
export default function Hero(){
    return(
            <section className="hero">
                <div className="hero__container">
                    <HeroDescription/>
                    <HeroProduct/>
                </div>
            </section>
    )
}