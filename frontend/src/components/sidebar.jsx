import React, { useState } from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';

// Sample logo URLs
const logos = {
  homepage: 'https://img.icons8.com/?size=256&id=i6fZC6wuprSu&format=png',
  profile: 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png ',
  users: 'users_logo.png',
  products: 'products_logo.png',
  posts: 'posts_logo.png',
  notes: 'notes_logo.png',
  calendar: 'calendar_logo.png',
  settings: 'settings_logo.png',
  charts: 'charts_logo.png',
  logout: 'https://cdn-icons-png.flaticon.com/512/1286/1286853.png '
};

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="sidebar-container">
      <nav className={`sidebar ${sidebarVisible ? 'active' : ''}`}>
        <ul className="sidebar-list">
          <li>
            <img src={logos.homepage} alt="Homepage" />
            Homepage
          </li>
          <li>
            <img src={logos.profile} alt="Profile" />
            Profile
          </li>
          <li>
            <img src={logos.users} alt="Users" />
            Users
          </li>
          <li>
            <img src={logos.products} alt="Products" />
            Products
          </li>
          <li>
            <img src={logos.posts} alt="Posts" />
            Posts
          </li>
          <li>
            <img src={logos.notes} alt="Notes" />
            Notes
          </li>
          <li>
            <img src={logos.calendar} alt="Calendar" />
            Calendar
          </li>
          <li>
            <img src={logos.settings} alt="Settings" />
            Settings
          </li>
          <li>
            <img src={logos.charts} alt="Charts" />
            Charts
          </li>
          <li>
            <img src={logos.logout} onClick={handleLogout} alt="Log Out" />
            log out
          </li>
        </ul>
      </nav>
      <button className="hamburger-toggle" onClick={toggleSidebar}>
        <img className="hamburger-icon" src="https://cdn-icons-png.flaticon.com/512/12127/12127259.png" />
      </button>
    </div>
  );
};

export default Sidebar;