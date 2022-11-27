import './profile.styles.css';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Profile = ({profile}) => {
    const {name, username, id, email, phone, website} = profile;

    return (
        <LazyLoadComponent>
            <div className="card-container" key={id}>
                <LazyLoadImage alt={`${username} profile pics`} effect='blur' src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}/>
                <h2>{name}</h2>
                <div className='profile-details'>
                    <p><b>Email:</b> {email}</p>
                    <p><b>Phone no.:</b> {phone}</p>
                    <p><b>Website:</b> {website}</p>
                </div>
            </div>
        </LazyLoadComponent>
    )
};

export default Profile;