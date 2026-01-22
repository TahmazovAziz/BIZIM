interface ProfileButtom{
    imagePath:string,
    children: React.ReactNode,
    active: boolean,
    onClick:()=>void
}

export default function ProfileButtom({imagePath, children, active, onClick}:ProfileButtom){
    return(
        <button className={`profile__nav-item ${active ? "profile__nav-item_active" : ""}`} onClick={onClick}>
            <img src={imagePath} alt="" />                
            {children}
        </button>
    )
}