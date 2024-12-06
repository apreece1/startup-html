import React, { useState, useEffect } from 'react';
import './Alarms.css'; // Link to your CSS file

export const Alarms = () => {
  const [alarms, setAlarms] = useState([]);
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [amPm, setAmPm] = useState('AM');

  useEffect(() => {
    // Load saved alarms from localStorage on component mount
    const savedAlarms = JSON.parse(localStorage.getItem('alarms')) || [];
    setAlarms(savedAlarms);
  }, []);

  useEffect(() => {
    // Save alarms to localStorage whenever the alarms array changes
    localStorage.setItem('alarms', JSON.stringify(alarms));
  }, [alarms]);

  // Handle adding a new alarm
  const addAlarm = () => {
    const timeString = `${hour}:${minute} ${amPm}`;
    const newAlarm = { time: timeString, active: true };
    setAlarms([...alarms, newAlarm]);
  };

  // Toggle alarm activation
  const toggleAlarm = (index) => {
    const updatedAlarms = [...alarms];
    updatedAlarms[index].active = !updatedAlarms[index].active;
    setAlarms(updatedAlarms);
  };

  // Delete an alarm
  const deleteAlarm = (index) => {
    const updatedAlarms = alarms.filter((_, i) => i !== index);
    setAlarms(updatedAlarms);
  };

  return (
    <main className="container">
      <h1>Alarms ⏰</h1>

      <section className="alarm-section">
        <h2>Create Alarm ☀️</h2>
        <div className="alarm-details">
          <label htmlFor="alarm-hour">Hour:</label>
          <select
            id="alarm-hour"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          >
            <option value="">Select Hour</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>

          <label htmlFor="alarm-minute">Minute:</label>
          <select
            id="alarm-minute"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
          >
            <option value="">Select Minute</option>
            {Array.from({ length: 60 }, (_, i) => (
              <option key={i} value={String(i).padStart(2, '0')}>{String(i).padStart(2, '0')}</option>
            ))}
          </select>

          <label htmlFor="alarm-am-pm">AM/PM:</label>
          <select
            id="alarm-am-pm"
            value={amPm}
            onChange={(e) => setAmPm(e.target.value)}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>

          <button
            id="add-alarm-btn"
            className="btn btn-primary mt-2"
            onClick={addAlarm}
          >
            Add Alarm
          </button>
        </div>

        <h3>Your Alarms:</h3>
        <table className="table">
          <thead>
            <tr>
              <th>On/Off</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {alarms.map((alarm, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={alarm.active}
                    onChange={() => toggleAlarm(index)}
                  />
                </td>
                <td>{alarm.time}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteAlarm(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <audio id="alarm-sound" src="guitarsound.mp3" preload="auto"></audio>
    </main>
  );
};

export default Alarms;
