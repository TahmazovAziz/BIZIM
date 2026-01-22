import StoreHeader from "./StoreHeader/StoreHeader";

export default function Store() {
    return (
        <section className="store">
            <div className="store__container">
                <StoreHeader/>

                {/* <div className="store__filters">
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
                </div> */}

                <div className="store__products">
                    <div className="popular__cards">
                        <div className="popular__card">
                            <a href="view-product.html" className="popular__card-image">
                                <img src="./images/product-1.png" alt="Karambit | Fade" />
                            </a>
                            <div className="popular__card-content">
                                <h3 className="popular__card-title"><a href="view-product.html">Karambit | Fade</a></h3>
                                <div className="popular__card-labels">
                                    <span className="popular__card-label popular__card-label_covert">COVERT</span>
                                    <span className="popular__card-label popular__card-label_new">FACTORY NEW</span>
                                </div>
                                <div className="popular__card-footer">
                                    <p className="popular__card-price">$ 1,850.00</p>
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

                        <div className="popular__card">
                            <a href="view-product.html" className="popular__card-image">
                                <img src="./images/product-1.png" alt="M4A4 | Howl" />
                            </a>
                            <div className="popular__card-content">
                                <h3 className="popular__card-title"><a href="view-product.html">M4A4 | Howl</a></h3>
                                <div className="popular__card-labels">
                                    <span className="popular__card-label popular__card-label_contraband">CONTRABAND</span>
                                    <span className="popular__card-label popular__card-label_tested">FIELD-TESTED</span>
                                </div>
                                <div className="popular__card-footer">
                                    <p className="popular__card-price">$ 3,200.00</p>
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

                        <div className="popular__card">
                            <a href="view-product.html" className="popular__card-image">
                                <img src="./images/product-1.png" alt="USP-S | Kill Confirmed" />
                            </a>
                            <div className="popular__card-content">
                                <h3 className="popular__card-title"><a href="view-product.html">USP-S | Kill Confirmed</a></h3>
                                <div className="popular__card-labels">
                                    <span className="popular__card-label popular__card-label_covert">COVERT</span>
                                    <span className="popular__card-label popular__card-label_minimal">MINIMAL WEAR</span>
                                </div>
                                <div className="popular__card-footer">
                                    <p className="popular__card-price">$ 85.00</p>
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

                        <div className="popular__card">
                            <a href="view-product.html" className="popular__card-image">
                                <img src="./images/product-1.png" alt="Butterfly | Doppler" />
                            </a>
                            <div className="popular__card-content">
                                <h3 className="popular__card-title"><a href="view-product.html">Butterfly | Doppler</a></h3>
                                <div className="popular__card-labels">
                                    <span className="popular__card-label popular__card-label_covert">COVERT</span>
                                    <span className="popular__card-label popular__card-label_new">FACTORY NEW</span>
                                </div>
                                <div className="popular__card-footer">
                                    <p className="popular__card-price">$ 1,450.00</p>
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

                        <div className="popular__card">
                            <a href="view-product.html" className="popular__card-image">
                                <img src="./images/product-1.png" alt="AK-47 | Asiimov" />
                            </a>
                            <div className="popular__card-content">
                                <h3 className="popular__card-title"><a href="view-product.html">AK-47 | Asiimov</a></h3>
                                <div className="popular__card-labels">
                                    <span className="popular__card-label popular__card-label_covert">COVERT</span>
                                    <span className="popular__card-label popular__card-label_tested">FIELD-TESTED</span>
                                </div>
                                <div className="popular__card-footer">
                                    <p className="popular__card-price">$ 45.00</p>
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

                        <div className="popular__card">
                            <a href="view-product.html" className="popular__card-image">
                                <img src="./images/product-1.png" alt="Glock-18 | Fade" />
                            </a>
                            <div className="popular__card-content">
                                <h3 className="popular__card-title"><a href="view-product.html">Glock-18 | Fade</a></h3>
                                <div className="popular__card-labels">
                                    <span className="popular__card-label popular__card-label_restricted">RESTRICTED</span>
                                    <span className="popular__card-label popular__card-label_new">FACTORY NEW</span>
                                </div>
                                <div className="popular__card-footer">
                                    <p className="popular__card-price">$ 1,100.00</p>
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

                        <div className="popular__card">
                            <a href="view-product.html" className="popular__card-image">
                                <img src="./images/product-1.png" alt="AWP | Asiimov" />
                            </a>
                            <div className="popular__card-content">
                                <h3 className="popular__card-title"><a href="view-product.html">AWP | Asiimov</a></h3>
                                <div className="popular__card-labels">
                                    <span className="popular__card-label popular__card-label_covert">COVERT</span>
                                    <span className="popular__card-label popular__card-label_worn">WELL-WORN</span>
                                </div>
                                <div className="popular__card-footer">
                                    <p className="popular__card-price">$ 95.00</p>
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

                        <div className="popular__card">
                            <a href="view-product.html" className="popular__card-image">
                                <img src="./images/product-1.png" alt="Desert Eagle | Blaze" />
                            </a>
                            <div className="popular__card-content">
                                <h3 className="popular__card-title"><a href="view-product.html">Desert Eagle | Blaze</a></h3>
                                <div className="popular__card-labels">
                                    <span className="popular__card-label popular__card-label_restricted">RESTRICTED</span>
                                    <span className="popular__card-label popular__card-label_new">FACTORY NEW</span>
                                </div>
                                <div className="popular__card-footer">
                                    <p className="popular__card-price">$ 650.00</p>
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

                        <div className="popular__card">
                            <a href="view-product.html" className="popular__card-image">
                                <img src="./images/product-1.png" alt="M4A1-S | Icarus Fell" />
                            </a>
                            <div className="popular__card-content">
                                <h3 className="popular__card-title"><a href="view-product.html">M4A1-S | Icarus Fell</a></h3>
                                <div className="popular__card-labels">
                                    <span className="popular__card-label popular__card-label_covert">COVERT</span>
                                    <span className="popular__card-label popular__card-label_new">FACTORY NEW</span>
                                </div>
                                <div className="popular__card-footer">
                                    <p className="popular__card-price">$ 320.00</p>
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

                        <div className="popular__card">
                            <a href="view-product.html" className="popular__card-image">
                                <img src="./images/product-1.png" alt="Bayonet | Crimson Web" />
                            </a>
                            <div className="popular__card-content">
                                <h3 className="popular__card-title"><a href="view-product.html">Bayonet | Crimson Web</a></h3>
                                <div className="popular__card-labels">
                                    <span className="popular__card-label popular__card-label_covert">COVERT</span>
                                    <span className="popular__card-label popular__card-label_minimal">MINIMAL WEAR</span>
                                </div>
                                <div className="popular__card-footer">
                                    <p className="popular__card-price">$ 890.00</p>
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

                        <div className="popular__card">
                            <a href="view-product.html" className="popular__card-image">
                                <img src="./images/product-1.png" alt="AWP | Dragon Lore" />
                            </a>
                            <div className="popular__card-content">
                                <h3 className="popular__card-title"><a href="view-product.html">AWP | Dragon Lore</a></h3>
                                <div className="popular__card-labels">
                                    <span className="popular__card-label popular__card-label_covert">COVERT</span>
                                    <span className="popular__card-label popular__card-label_new">FACTORY NEW</span>
                                </div>
                                <div className="popular__card-footer">
                                    <p className="popular__card-price">$ 5,200.00</p>
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

                        <div className="popular__card">
                            <a href="view-product.html" className="popular__card-image">
                                <img src="./images/product-1.png" alt="Five-SeveN | Hyper Beast" />
                            </a>
                            <div className="popular__card-content">
                                <h3 className="popular__card-title"><a href="view-product.html">Five-SeveN | Hyper Beast</a></h3>
                                <div className="popular__card-labels">
                                    <span className="popular__card-label popular__card-label_restricted">RESTRICTED</span>
                                    <span className="popular__card-label popular__card-label_tested">FIELD-TESTED</span>
                                </div>
                                <div className="popular__card-footer">
                                    <p className="popular__card-price">$ 25.00</p>
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
                    </div>
                </div>

                <div className="store__pagination">
                    <button className="store__pagination-button store__pagination-button_prev" disabled>Назад</button>
                    <div className="store__pagination-numbers">
                        <button className="store__pagination-number store__pagination-number_active">1</button>
                        <button className="store__pagination-number">2</button>
                        <button className="store__pagination-number">3</button>
                        <button className="store__pagination-number">4</button>
                        <button className="store__pagination-number">5</button>
                    </div>
                    <button className="store__pagination-button store__pagination-button_next">Вперед</button>
                </div>
            </div>
        </section>
    )
}