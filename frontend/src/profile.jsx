import React from 'react';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'JohnDoe',
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
