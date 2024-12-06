import React from 'react';
import './DailyMotivation.css'; // Import custom styles for this page
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export function DailyMotivation() {
  return (
    <main className="container-fluid bg-light text-center">
      <h1>Daily Motivation 😊</h1>

      {/* Main Section with Categories */}
      <section className="categories mt-5">
        <h2>Try Something:</h2>
        <nav>
          <div className="category-container">
            <ul className="list-unstyled">
              <li><a href="https://www.calm.com/blog/affirmations-for-anxiety" className="text-primary">Affirmations</a></li>
              <li><a href="https://www.mindful.org/category/mindful-skills/meditation/guided-meditation/" className="text-primary">Meditations</a></li>
              <li><a href="https://www.ted.com/" className="text-primary">Pep Talks</a></li>
              <li><a href="https://www.healthline.com/health/fitness-exercise/at-home-workouts" className="text-primary">Workouts</a></li>
            </ul>
          </div>
        </nav>
      </section>
    </main>
  );
}
