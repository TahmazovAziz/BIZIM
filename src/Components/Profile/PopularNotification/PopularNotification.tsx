import { useState } from "react";
import ProfileNotificationItem from "../ProfileNotificationItem/ProfileNotificationItem";

export default function ProfileNotification() {
    const [check, setCheck] = useState<Record<number,boolean>>({})
    const noti = [
        {
            id: 0,
            name: "Trade-офферы",
            description: "Получать уведомления о новых предложениях"
        },
        {
            id: 1,
            name: "Новости платформы",
            description: "Важные обновления и новости"
        },
        {
            id: 2,
            name: "Email уведомления",
            description: "Отправлять копии на почту"
        }
    ]
    return (
        <div className="profile__card profile__notifications">
            <div className="profile__card-header">
                <h2 className="profile__card-title">Уведомления</h2>
            </div>
            <div className="profile__notifications-list">
                {noti.map((item) => (
                    <ProfileNotificationItem
                        key={item.id}
                        onClick={() => setCheck(prev => ({...prev, [item.id]: !prev[item.id]}))}
                        check={check[item.id] ||  false}
                        name={item.name}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}