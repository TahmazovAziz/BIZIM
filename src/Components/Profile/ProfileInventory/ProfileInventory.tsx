import test from './test.json'
export default function ProfileInventory() {
    return (
        <div className="profile__card profile__inventory">
            <div className="profile__card-header">
                <h2 className="profile__card-title">Инвентарь</h2>
                <a href="#" className="profile__card-link">Посмотреть все (47 предметов)</a>
            </div>
            <div className="profile__inventory-grid">
                {Object.values(test).map(item => (
                    <div className="profile__inventory-item">
                        <img src={item.image} alt={item.name} />
                        <div className="profile__inventory-item-info">
                            <span className="profile__inventory-item-name">{item.name}</span>
                            <span className="profile__inventory-item-price">${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}