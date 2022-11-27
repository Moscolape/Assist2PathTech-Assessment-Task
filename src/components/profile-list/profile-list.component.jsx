import Profile from "../profile/profile.component";
import './profile-list.styles.css'

const ProfileList = ({profiles}) => {

    return (
        <div  className="profile-list">
            {profiles.map(profile => {
                return (
                    <Profile profile={profile}/>
                )
            })}
        </div>
    )
}

export default ProfileList;