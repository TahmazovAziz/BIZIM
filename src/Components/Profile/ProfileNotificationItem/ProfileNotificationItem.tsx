interface ProfileNotificationItemProps{
    name:string,
    description:string,
    check:boolean,
    onClick:()=>void,
}
export default function ProfileNotificationItem({name, description, check, onClick}:ProfileNotificationItemProps) {
    return (
        <div className="profile__notification-item" onClick={onClick}>
            <div className="profile__notification-info">
                <span className="profile__notification-label">{name}</span>
                <span className="profile__notification-description">{description}</span>
            </div>
            <label className="profile__toggle">
                <input type="checkbox" checked={check} />
                <span className="profile__toggle-slider"></span>
            </label>
        </div>
    )
}