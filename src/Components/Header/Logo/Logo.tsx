import './Logo.scss'
import logo from '../../../assets/logo.svg'
export default function Logo(){
    return(
        <div className="logo">
            <img className="logo__image" src={logo} alt="logo" />
            <p className="logo__text">Bizim!</p>
        </div>
    )
}