import React, { useState, useEffect } from 'react';
import './Alarms.css'; // Link to your CSS file

export const Alarms = () => {
  const [alarms, setAlarms] = useState([]);
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [amPm, setAmPm] = useState('AM');
  const [isAlarmPlaying, setIsAlarmPlaying] = useState(false); // Track if the alarm is playing

  // Function to convert 12-hour time to 24-hour time for comparison
  const convertTo24Hour = (hour, amPm) => {
    let convertedHour = parseInt(hour, 10);
    if (amPm === 'PM' && convertedHour !== 12) {
      convertedHour += 12;  // Convert PM time to 24-hour format (except for 12 PM)
    } else if (amPm === 'AM' && convertedHour === 12) {
      convertedHour = 0;  // Convert 12 AM to 00 (midnight)
    }
    return convertedHour;
  };

  // Check every minute if any alarm should trigger
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();
      
      console.log("Current Time:", `${currentHour}:${currentMinute}`);

      alarms.forEach((alarm) => {
        const [alarmHour, alarmMinute] = alarm.time.split(':');
        const [alarmMin, amPm] = alarmMinute.split(' ');

        const alarmHour24 = convertTo24Hour(alarmHour, amPm);
        const alarmMinute24 = parseInt(alarmMin, 10);

        console.log(`Alarm Time: ${alarmHour24}:${alarmMinute24}`);

        // Check if current time matches any alarm time
        if (
          alarm.active && 
          alarmHour24 === currentHour && 
          alarmMinute24 === currentMinute
        ) {
          console.log("Triggering Alarm!");
          triggerAlarm();
        }
      });
    }, 60000); // Check every minute (60000 ms)

    return () => clearInterval(interval); // Clean up interval when component unmounts
  }, [alarms]);

  // Function to trigger the alarm sound
  const triggerAlarm = () => {
    const alarmSound = document.getElementById('alarm-sound');
    if (alarmSound) {
      alarmSound.play(); // Play the sound
      setIsAlarmPlaying(true); // Set the alarm as playing
    }
  };

  // Function to stop the alarm sound
  const stopAlarm = () => {
    const alarmSound = document.getElementById('alarm-sound');
    if (alarmSound) {
      alarmSound.pause(); // Stop the sound
      alarmSound.currentTime = 0; // Reset the sound to the beginning
      setIsAlarmPlaying(false); // Set the alarm as not playing
    }
  };

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

  useEffect(() => {
    // Load saved alarms from localStorage on component mount
    const savedAlarms = JSON.parse(localStorage.getItem('alarms')) || [];
    setAlarms(savedAlarms);
  }, []);

  useEffect(() => {
    // Save alarms to localStorage whenever the alarms array changes
    localStorage.setItem('alarms', JSON.stringify(alarms));
  }, [alarms]);

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

      {isAlarmPlaying && (
        <div className="alarm-controls">
          <button onClick={stopAlarm} className="btn btn-danger">
            Stop Alarm
          </button>
        </div>
      )}

      <audio id="alarm-sound" src="guitarsound.mp3" preload="auto"></audio>
    </main>
  );
};

export default Alarms;
