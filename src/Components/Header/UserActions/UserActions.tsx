import UserAccount from "./UserAccount";
import UserWallet from "./UserWallet";
import SearchBar from "./SearchBar/SearchBar";
import './UserAction.scss';

export default function UserActions(){
    return(
        <div className="header__get-info">
            <SearchBar/>
            <UserAccount/>
            <UserWallet/>
        </div>
    )
}