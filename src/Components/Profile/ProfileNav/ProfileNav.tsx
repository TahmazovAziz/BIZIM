import { useState } from "react";
import ProfileButtom from "../../UI/ProfileButton/ProfileButton";
export default function ProfileNav() {
    const [select,setSelect] = useState<number|null>(null)
    const buttons = [
        {
            imagePath:'../../src/assets/review.svg',
            text:'обзор'
        },
        {
            imagePath:'../../src/assets/inventory.svg',
            text:'Инвентарь'
        },
        {
            imagePath:'../../src/assets/history.svg',
            text:'История'
        },
        {
            imagePath:'../../src/assets/secure.svg',
            text:'Безопасность'
        },
        {
            imagePath:'../../src/assets/settings.svg',
            text:'Настройки'
        }
    ]
    return (
        <div className="profile__nav">
            {buttons.map((item, index) => <ProfileButtom imagePath={item.imagePath} active={select == index} onClick={()=>setSelect(index)}>{item.text}</ProfileButtom>)}
            
        </div>

    )
}