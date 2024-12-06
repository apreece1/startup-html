import React, { useState, useEffect } from 'react';
import './PersonalStats.css'; // Import custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export function PersonalStats() {
  const [goal, setGoal] = useState(7); // Default goal
  const [activeDays, setActiveDays] = useState(0); // Active days tracked
  const [rewards, setRewards] = useState([]); // Array to track rewards
  const [clickedDays, setClickedDays] = useState(new Set()); // Tracks clicked days
  const [rewardMessage, setRewardMessage] = useState(''); // Message for reward notification
  const [goalMessage, setGoalMessage] = useState(''); // Message for goal set notification
  const [rewardIndex, setRewardIndex] = useState(0); // To track which reward to unlock

  // Default set of reward images (reuse the same images)
  const rewardImages = [
    '/reward1.png', 
    '/medal.png', 
    '/reward2.png'
  ];

  // Function to handle day clicks
  const handleDayClick = (day) => {
    setClickedDays((prev) => {
      const updated = new Set(prev);
      if (updated.has(day)) {
        updated.delete(day);
        setActiveDays(activeDays - 1);
      } else {
        updated.add(day);
        setActiveDays(activeDays + 1);
      }
      return updated;
    });
  };

  // Function to reset the week (active days and clicked days)
  const handleReset = () => {
    setActiveDays(0);
    setClickedDays(new Set());
    setRewardMessage(''); // Clear reward message on reset
  };

  // Function to handle goal setting directly when input value changes
  const handleGoalChange = (newGoal) => {
    if (newGoal >= 1 && newGoal <= 7) {
      setGoal(newGoal);
      setGoalMessage(`Goal set to ${newGoal} days!`); // Notify user about the goal set
      handleReset();
    } else {
      alert('Please set a valid goal between 1 and 7.');
    }
  };

  // Effect to check if goal is reached and unlock reward
  useEffect(() => {
    // If goal is reached and we haven't yet unlocked a reward
    if (activeDays >= goal && activeDays !== 0) {
      // Unlock the next reward (reuse images continuously)
      const nextReward = rewardImages[rewardIndex % rewardImages.length]; // Loop through the images
      setRewards((prevRewards) => [...prevRewards, nextReward]);
      setRewardMessage(`Congratulations! You've earned a reward!`);
      setRewardIndex(rewardIndex + 1); // Increment reward index for the next time
      setActiveDays(0); // Reset active days, but not clicked days
    }
  }, [activeDays, goal, rewardIndex]); // Depend on activeDays, goal, and rewardIndex to trigger this effect

  return (
    <main className="container-fluid bg-light text-center">
      <h1>Personal Stats 📈</h1>

      <section>
        <div>
          <label htmlFor="goal-input">How many days do you want to wake up early? </label>
          <input
            type="number"
            id="goal-input"
            value={goal}
            min="1"
            max="7"
            onChange={(e) => handleGoalChange(Number(e.target.value))}
          />
        </div>

        {/* Show the goal set message */}
        {goalMessage && (
          <div className="goal-message mt-3">
            <h3>{goalMessage}</h3>
          </div>
        )}
        
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${(activeDays / goal) * 100}%` }}
            role="progressbar"
            aria-valuenow={activeDays}
            aria-valuemin="0"
            aria-valuemax={goal}
          />
        </div>

        <div className="week-buttons d-flex justify-content-center">
          {['S', 'M', 'T', 'W', 'Th', 'F', 'S'].map((day, index) => (
            <button
              key={index}
              className={`calendar-button btn btn-secondary mx-1 ${clickedDays.has(index) ? 'active' : ''}`}
              onClick={() => handleDayClick(index)}
            >
              {day}
            </button>
          ))}
        </div>

        <button className="btn btn-danger mt-3" onClick={handleReset}>
          Reset Week
        </button>

        {/* Reward notification */}
        {rewardMessage && (
          <div className="reward-message mt-3">
            <h3>{rewardMessage}</h3>
          </div>
        )}

        {/* Display rewards */}
        {rewards.length > 0 && (
          <div>
            <div className="trophy-case d-flex justify-content-center">
              {rewards.map((reward, index) => (
                <img
                  key={index}
                  src={reward} // Reuse the same images from rewardImages
                  alt={`Reward ${index + 1}`}
                  className="reward"
                  style={{ width: 80, height: 80 }}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
