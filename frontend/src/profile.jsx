import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './components/sidebar';

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state ? location.state.username : null;

  useEffect(() => {
    const checkTokenExpiration = () => {
      const tokenExpiration = localStorage.getItem('tokenExpiration');
      if (tokenExpiration && Date.now() > tokenExpiration) {
        // Token expired, remove it
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiration');
        navigate('/login'); // Redirect to the login page
      }
    };

    checkTokenExpiration();
  }, [navigate]);

  return (
    <div>
      <Sidebar />
      <Profile username={username} />
    </div>
  );
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username || 'JohnDoe', // Use the prop if provided, otherwise use a default value
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      followers: 100,
      following: 50
    };
  }

  render() {
    return (
      <div className="profile">
        <h1>{this.state.username}</h1>
        <p>{this.state.bio}</p>
        <div className="stats">
          <div className="stat">
            <span className="stat-value">{this.state.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-value">{this.state.following}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;