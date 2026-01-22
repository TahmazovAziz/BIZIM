import './MobileSearchBar.scss'
import loupe from '../../../../assets/loupe.svg'
export default function MobileSearchBar(){
    return (
        <div className="header__mobile-search">
            <img className="header__search-image" src={loupe} alt="loupe" />
            <input type="text" className="header__search-input" placeholder="Поиск скинов..." />
        </div>
    )
}