import { useState, useEffect } from 'react';
import './App.css';
import ProfileList from './components/profile-list/profile-list.component';

const App = () => {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setProfiles(users));
  }, []);

  if(!profiles) {
    return <h1>Loading...</h1>
  }

  return (
        <div className="App">
          <h1 className='app-title'>List of Profiles</h1>
          {/* <LoadingProfiles/> */}
            <ProfileList profiles = {profiles}/>
        </div>
  )
}

export default App;