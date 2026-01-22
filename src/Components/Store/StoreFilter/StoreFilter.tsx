export default function StoreFilter() {
    return (
        <div className="store__filters">
            <div className="store__filter-buttons">
                <button className="popular__button popular__button_active">Все</button>
                <button className="popular__button">Винтовки</button>
                <button className="popular__button">Пистолеты</button>
                <button className="popular__button">Ножи</button>
                <button className="popular__button">Перчатки</button>
                <button className="popular__button">Снайперские</button>
                <button className="popular__button">Дробовики</button>
            </div>

            <div className="store__sort">
                <label className="store__sort-label">Сортировка:</label>
                <select className="store__sort-select">
                    <option value="popular">По популярности</option>
                    <option value="price-asc">Цена: По возрастанию</option>
                    <option value="price-desc">Цена: По убыванию</option>
                    <option value="newest">Сначала новые</option>
                </select>
            </div>
        </div>
    )
}