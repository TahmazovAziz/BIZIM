import './HowWork.scss'

export default function HowWork(){
    const list = [
        {
            num:1,
            title:"Выбери скин",
            discript:"Найди нужный скин в каталоге, используя удобные фильтры по цене и оружию."
        },
        {
            num:2,
            title:"Оплати",
            discript:"Пополни баланс любым удобным способом: карта, криптa или другие сайты."
        },
        {
            num:3,
            title:"Получи",
            discript:"Прими трейд-оффер от нашего бота или переведи в Steam на счетанные секунды."
        },
        {
            num:4,
            title:"Продай свой",
            discript:"Выставь ненужные скины на продажу и выводи реальные деньги."
        },
    ]
    return(
        <section className="how-it-works">
            <div className="how-it-works__container">
                <div className="how-it-works__header">
                    <h2 className="how-it-works__title">Как это работает?</h2>
                    <p className="how-it-works__subtitle">Простой путь от выбора до получения скина в инвентарь</p>
                </div>

                <div className="how-it-works__steps">
                {list.map(item=>(
                    <div className="how-it-works__step">
                        <div className="how-it-works__step-number">{item.num}</div>
                        <h3 className="how-it-works__step-title">{item.title}</h3>
                        <p className="how-it-works__step-description">
                            {item.discript}
                        </p>
                    </div>                    
                ))}
                </div>
            </div>
        </section>
    )
}