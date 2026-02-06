interface Card {
  id: number;
  category: string;      // "knives", "rifles", "pistols" и т.д.
  name: string;
  image: string;
  link: string;
  rarity: {
    type: string;       // "COVERT", "CLASSIFIED" и т.д.
    class: string;
  };
  condition: {
    type: string;       // "FACTORY NEW", "MINIMAL WEAR" и т.д.
    class: string;
  };
  price: number;         // 1850.00, 2450.00 и т.д.
}

interface StoreProductProps{
    currentCards:Card[];
}
export default function StoreProduct({currentCards}:StoreProductProps) {

    return (
        <div className="store__products">
            <div className="popular__cards">
                {currentCards.map((item) => (
                    <div key={item.id} className="popular__card">
                        <a href="view-product.html" className="popular__card-image">
                            <img src="./images/product-1.png" alt="Karambit | Fade" />
                        </a>
                        <div className="popular__card-content">
                            <h3 className="popular__card-title"><a href="view-product.html">{item.name}</a></h3>
                            <div className="popular__card-labels">
                                <span className="popular__card-label popular__card-label_covert">{item.rarity.type}</span>
                                <span className="popular__card-label popular__card-label_new">{item.condition.type}</span>
                            </div>
                            <div className="popular__card-footer">
                                <p className="popular__card-price">${item.price}</p>
                                <div className="popular__card-actions">
                                    <button className="popular__card-compare" aria-label="Compare">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                    <button className="popular__card-cart">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}