import './BurgerButton.scss'

interface BurgerButtonProps{
    isOpen:boolean;
    onClick: () => void;
}
export default function BurgerButton({isOpen, onClick}:BurgerButtonProps){
    return(
        <button className={`header__burger ${isOpen ? 'active': ''}`} aria-label="Menu" onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}
