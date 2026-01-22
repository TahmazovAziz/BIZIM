import acount from '../../../assets/account.svg'

export default function UserAccount(){
    return(
        <div className="header__account">
               <a href="./profile.html">
               <img className="header__account-image" src={acount} alt="account" />
               <p className="header__money-text">Кабинет</p>
            </a>
        </div>
    )
}
