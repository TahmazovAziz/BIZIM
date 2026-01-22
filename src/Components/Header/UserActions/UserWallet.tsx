import wallet from '../../../assets/wallet.svg'

export default function UserWallet(){
    return(
        <div className="header__money">
            <a href="./profile.html">
                <img className="header__money-image" src={wallet} alt="wallet" />
                <p className="header__money-text">$1,240.50</p>
            </a>
        </div>
    )
}
