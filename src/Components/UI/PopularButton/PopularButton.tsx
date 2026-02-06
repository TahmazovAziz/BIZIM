interface PopularButtonProps{
    active:boolean,
    children: React.ReactNode,
    standartClass:string,
    activeClass:string,
    onClick:()=>void
}
export default function PopularButton({active, children, onClick, standartClass , activeClass }:PopularButtonProps){
    return(
        <button className={`${standartClass} ${active ? activeClass  : ''}`} onClick={onClick}>{children}</button>
    )
}