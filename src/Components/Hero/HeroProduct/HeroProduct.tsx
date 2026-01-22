import product from '../Hero.json';
import './HeroProduct.scss'
export default function HeroProduct(){
    return(
        <div className="hero__product">
            {Object.values(product).filter(item => item.status == 'VitrineHero').map(item => (
                <>
                    <div className="hero__image">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="hero__product-info">
                        <p className="hero__product-name">{item.name}</p>
                        <p className="hero__product-price">{item.price}</p>
                    </div>
                </>
            ))}
        </div>
    )
}