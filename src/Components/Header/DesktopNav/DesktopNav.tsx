import './DesktopNav.scss'

export default function DesktopNav(){
    return(
        <nav className="header__nav">
            <ul className="header__links">
                <li className="header__item"><a href="">Главное</a></li>
                <li className="header__item"><a href="">Купить скины</a></li>
                <li className="header__item"><a href="">Продать скины</a></li>
                <li className="header__item"><a href="">Обмен</a></li>
                <li className="header__item"><a href="">Балас</a></li>
            </ul>
        </nav>
    )
}