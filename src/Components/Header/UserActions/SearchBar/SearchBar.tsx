import './SearchBar.scss'
import image from '../../../../assets/loupe.svg'
export default function SearchBar(){
    return(
        <div className="header__search">
            <img className="header__search-image" src={image} alt="loupe" />
            <input type="text" className="header__search-input" placeholder="Поиск скинов..." />
        </div>
    )
}