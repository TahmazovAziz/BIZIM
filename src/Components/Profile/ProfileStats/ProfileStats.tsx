
interface ProfileStatsProps{
    deal:number,
    turnover:number,
    rating:number,
}
export default function ProfileStats({deal, turnover, rating}:ProfileStatsProps){
    return(
        <div className="profile__stats">
            <div className="profile__stat">
                <span className="profile__stat-value">{deal}</span>
                <span className="profile__stat-label">Сделок</span>
            </div>
            <div className="profile__stat">
                <span className="profile__stat-value">${turnover}</span>
                <span className="profile__stat-label">Оборот</span>
            </div>
            <div className="profile__stat">
                <span className="profile__stat-value">{rating}%</span>
                <span className="profile__stat-label">Рейтинг</span>
            </div>
        </div>
    )
}