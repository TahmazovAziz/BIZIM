import BurgerButton from "./BurgerButton/BurgerButton";
import DesktopNav from "./DesktopNav/DesktopNav";
import Logo from "./Logo/Logo";
import MobileMenu from "./MobileMenu/MobileMenu";
import './Header.scss'
import UserActions from "./UserActions/UserActions";
import { useState } from "react";

export default function Header(){
    const [isOpen,setIsOpen] = useState(false)

    const OpenMenu = () =>{
        setIsOpen(e => e = !e)    
    }
    
    return(
        <header className="header">
            <div className="header__container">
                <Logo/>
                <DesktopNav/>
                <BurgerButton isOpen={isOpen} onClick={OpenMenu}/>
                <UserActions/>
            </div>
            <MobileMenu isOpen={isOpen}/>
        </header>
    )
}
