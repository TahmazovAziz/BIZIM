import Logo from "../Header/Logo/Logo";
import FooterLinks from "./FooterLinks/FooterLinks";
import './Footer.scss';
export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <Logo/>
                        <p className="footer__description">
                            Ведущая платформа для безопасной торговли игровыми предметами CS:GO. 
                            Мы гарантируем честность каждой сделки.
                        </p>
                        <p className="footer__copyright">© 2025 Bizim! Все права защищены.</p>
                    </div>
                    <FooterLinks/>
                </div>
            </div>
        </footer>
    )
}