interface StoreSort{
    sortType:string;
    setSortType:(val:string) => void;
    setCurrentPage:(val:number) => void;
}

export default function StoreSort({sortType, setCurrentPage, setSortType}:StoreSort) {
    return (
        <div className="store__sort">
            <label className="store__sort-label">Сортировка:</label>
            <select className="store__sort-select" value={sortType} onChange={(e) => { setSortType(e.target.value); setCurrentPage(1) }}>
                <option value="price-asc">Цена: По возрастанию</option>
                <option value="price-desc">Цена: По убыванию</option>
            </select>
        </div>
    )
}