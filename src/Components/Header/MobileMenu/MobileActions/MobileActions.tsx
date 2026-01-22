import MobileAccount from "./MobileAccount";
import MobileWallet from "./MobileWallet";
import './MobileActions.scss';
export default function MobileActions(){
    return(
        <div className="header__mobile-actions">
            <MobileWallet/>
            <MobileAccount/>
        </div>
    )
}