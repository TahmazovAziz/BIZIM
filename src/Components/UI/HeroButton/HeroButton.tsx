import type React from "react"

interface HeroButtonProps {
    dopClass:string,
    children: React.ReactNode;
}

export default function HeroButton({children, dopClass}:HeroButtonProps){
    return(
        <button className={`hero__button ${dopClass}`}>{children}</button>
    )
}