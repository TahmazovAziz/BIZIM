interface PopularButtonProps{
    active:boolean,
    children: React.ReactNode,
    onClick:()=>void
}
export default function PopularButton({active, children, onClick}:PopularButtonProps){
    return(
        <button className={`popular__button ${active ? 'popular__button_active' : ''}`} onClick={onClick}>{children}</button>
    )
}