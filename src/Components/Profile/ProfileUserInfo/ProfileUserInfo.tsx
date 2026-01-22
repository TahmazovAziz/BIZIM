
interface ProfileUserInfoProps{
    avatarImage:string,
    userName:string,
    userId:number,
}
export default function ProfileUserInfo({avatarImage,userName,userId}:ProfileUserInfoProps){
    return(
        <div className="profile__user-info">
            <div className="profile__avatar">
                <img src={avatarImage} alt="User Avatar"/>
                <div className="profile__avatar-status"></div>
            </div>
            <div className="profile__user-details">
                <h1 className="profile__username">{userName}</h1>
                <p className="profile__user-id">ID: {userId}</p>
            </div>
        </div>
    )
}