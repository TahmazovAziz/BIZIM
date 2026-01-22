export default function ProfileBalance(){
    return(
        <div className="profile__card profile__balance">
            <div className="profile__card-header">
                 <h2 className="profile__card-title">Баланс</h2>
                <button className="profile__card-button">
                    <img src="../../src/assets/plus.svg" alt="" />
                    Пополнить
                </button>
            </div>
             <div className="profile__balance-info">
                 <div className="profile__balance-main">
                    <span className="profile__balance-label">Доступно</span>
                    <span className="profile__balance-amount">$1,240.50</span>
                </div>
                <div className="profile__balance-actions">
                    <button className="profile__balance-action">
                        <img src="../../src/assets/withdraw.svg" alt="" />
                        Вывести
                    </button>
                    <button className="profile__balance-action">
                        <img src="../../src/assets/transfer.svg" alt="" />
                        Перевести
                    </button>
                </div>
            </div>
        </div>
    )
}
// обсудить с беком как это будет риализоватваться
// но как я понимаю все кнопку должны ввести на стороний сервис