import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Alarms } from './Alarms/Alarms';
import { DailyMotivation } from './Daily Motivation/DailyMotivation';
import { PersonalStats } from './Personal Stats/PersonalStats';
import { Connect } from './Connect/Connect';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Main app styles

function App() {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');

  const handleLogin = (username) => {
    setUserName(username);
  };

  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="navbar-brand">GETUP ☀️</div>
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/alarms">Alarms</NavLink>
              <NavLink className="nav-link" to="/daily-motivation">Daily Motivation</NavLink>
              <NavLink className="nav-link" to="/personal-stats">Personal Stats</NavLink>
              <NavLink className="nav-link" to="/connect">Connect</NavLink>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/alarms" element={<Alarms />} />
          <Route path="/daily-motivation" element={<DailyMotivation />} />
          <Route path="/personal-stats" element={<PersonalStats />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50">
          <div className="container text-center">
            <p>&copy; Author: Abigail Preece</p>
            <p><a href="https://github.com/apreece1/startup-html.git">GitHub Repository</a></p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container text-center">404: Page not found.</main>;
}

export default App;
