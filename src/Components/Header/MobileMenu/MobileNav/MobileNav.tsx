import './MobileNav.scss'

export default function MobileNav(){
    return(
                <nav className="header__mobile-nav">
                    <ul className="header__mobile-links">
                        <li className="header__mobile-item"><a href="">Главное</a></li>
                        <li className="header__mobile-item"><a href="">Купить скины</a></li>
                        <li className="header__mobile-item"><a href="">Продать скины</a></li>
                        <li className="header__mobile-item"><a href="">Обмен</a></li>
                        <li className="header__mobile-item"><a href="">Балас</a></li>
                    </ul>
                </nav>
    )
}