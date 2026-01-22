
import test from './test.json'
export default function ProfileAtivity() {
    return (
        <div className="profile__card profile__activity">
            <div className="profile__card-header">
                <h2 className="profile__card-title">Последняя активность</h2>
                <a href="#" className="profile__card-link">Посмотреть все</a>
            </div>
            <div className="profile__activity-list">
                {test.activityList.map((item) => (
                    <div className="profile__activity-item">
                        <div className="profile__activity-icon profile__activity-icon_buy">
                            <img src={item.icon} alt="" />
                        </div>
                        <div className="profile__activity-details">
                            <p className="profile__activity-text">{item.details.text}</p>
                            <span className="profile__activity-time">{item.details.time}</span>
                        </div>
                        <span className={`profile__activity-amount ${item.amountType == "positive" ? "profile__activity-amount_negative" : "profile__activity-amount_positive"}`}>{item.amountType == "positive" ? "+" : "-"}${item.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}