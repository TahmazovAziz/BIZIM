import advantages from './Advantages.json'
import './Advantages.scss'
export default function Advantages(){
    return(
            <section className="advantages">
                <div className="advantages__container">
                    <ol className="advantages__list">
                        {Object.values(advantages).map(item => (
                                <li className="advantages__item">
                                        <div className="advantages__item-icon">
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <div className="advantages__item-text">
                                            <p className="advantages__item-title">{item.title}</p>
                                            <p className="advantages__item-subtitle">{item.subtitle}</p>
                                        </div>
                                </li>
                        ))}
                    </ol>
                </div>
            </section>
    )
}