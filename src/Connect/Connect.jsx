import React, { useState } from 'react';
import './Connect.css'; // Import custom styles for this page
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export function Connect() {
  const [message, setMessage] = useState('');
  const [friend, setFriend] = useState('friend1');
  const [messages, setMessages] = useState([]);

  // Function to send a message
  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        `${friend} says: ${message}`,
      ]);
      setMessage(''); // Clear the message box
    }
  };

  return (
    <main className="container-fluid bg-light text-center">
      {/* Title Section */}
      <h1>Connect With Friends 😎</h1>

      {/* Main Section with Messages */}
      <section className="message-section mt-5">
        <h2>Message Your Friends</h2>

        {/* Display Messages */}
        <div className="message-list mb-4">
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>

        {/* Friend Selector */}
        <div className="friend-select mb-3">
          <label htmlFor="friend-select" className="form-label">Select Friend:</label>
          <select
            id="friend-select"
            className="form-select"
            value={friend}
            onChange={(e) => setFriend(e.target.value)}
          >
            <option value="friend1">Friend 1</option>
            <option value="friend2">Friend 2</option>
            <option value="friend3">Friend 3</option>
          </select>
        </div>

        {/* Message Box */}
        <div className="message-box mb-3">
          <textarea
            id="message-box"
            className="form-control"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* Send Button */}
        <div className="button-select">
          <button className="btn btn-primary" onClick={sendMessage}>Send Message</button>
        </div>
      </section>
    </main>
  );
}
