import React from 'react';
import './login.css'; // Updated to link to login.css

export const Login = () => {
  return (
    <main className="container">
      {/* Welcome Section with Login Form */}
      <section>
        <h1>Welcome to GETUP</h1> {/* Title Added */}
        <form method="get" action="play.html">
          <div>
            <label htmlFor="user-email">User Login:</label>
            <input
              type="email"
              id="user-email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="user-password">Password:</label>
            <input
              type="password"
              id="user-password"
              name="password"
              placeholder="password"
              required
            />
          </div>
          <div>
            <button type="submit">Login</button>
            <button type="button">Create</button>
          </div>
        </form>
      </section>
    </main>
  );
};
