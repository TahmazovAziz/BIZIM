import ProfileStats from "../ProfileStats/ProfileStats";
import ProfileUserInfo from "../ProfileUserInfo/ProfileUserInfo";
export default function ProfileHeader() {
      return (
            <div className="profile__header">
                  <ProfileUserInfo userName="Nagibator" avatarImage="../../../src/assets/fast.jpeg" userId={1242346} />
                  <ProfileStats deal={127} turnover={12.450} rating={98.5} />
            </div>
      )
}