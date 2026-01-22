import MobileNav from "./MobileNav/MobileNav.tsx";
import MobileSearchBar from "./MobileSearchBar/MobileSearchBar.tsx";
import './MobileMenu.scss'
interface MobileMenuProps {
    isOpen:boolean;
}
export default function MobileMenu({isOpen}:MobileMenuProps){

    return (
        <div className={`header__mobile-menu ${isOpen ? 'active' : ''}`}>
            <MobileSearchBar/>
            <MobileNav/>
        </div>
    )
}