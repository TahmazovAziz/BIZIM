import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProfileNotification from "./PopularNotification/PopularNotification";
import ProfileAtivity from "./ProfileActivity/ProfileActivity";
import ProfileBalance from "./ProfileBalance/ProfileBalance";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInventory from "./ProfileInventory/ProfileInventory";
import ProfileNav from "./ProfileNav/ProfileNav";
import './Profile.scss';
export default function Profile(){
    return(
        <>
        <Header/>
            <section className="profile">
                <div className="profile__container">
                    <ProfileHeader />

                    <ProfileNav />

                    <div className="profile__content">
                        <ProfileBalance/>
                        <ProfileAtivity/>
                        <ProfileInventory/>
                        <ProfileNotification/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
        
    )
}