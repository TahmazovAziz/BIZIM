import HeroButton from "../../UI/HeroButton/HeroButton";
import './HeroDescription.scss'
export default function HeroDescription(){
    return(
        <div className="hero__discript">
            <div className="hero__text">
                <h1 className="hero__title"> Купи, продай или обменяй <span className="hero__gardient">скины CS:GO</span>мгновенно! </h1>
                <p className="hero__subtitle"> Безопасная платформа для трейдинга с минимальной комиссией и моментальным выводом средств. </p>
            </div>
            <div className="hero__buttons">
                <HeroButton dopClass="hero__button_green">Начать торговлю</HeroButton>
                <HeroButton dopClass="hero__button_perple">Каталог скинов</HeroButton>
            </div>
        </div>
    )
}