import React, { useState, useEffect } from 'react';
import axios from 'axios'; // To make API requests
import './DailyMotivation.css'; // Import custom styles for this page
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export function DailyMotivation() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Fetch daily quote when the component mounts
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        // Request quote from the backend API
        const response = await axios.get('/api/motivation');
        setQuote(response.data.q); // Set the quote text
        setAuthor(response.data.a); // Set the author of the quote
      } catch (err) {
        setQuote('Error loading quote');
        setAuthor('');
      }
    };

    fetchQuote(); // Trigger the fetch on component mount
  }, []); // Empty array ensures this effect runs only once on mount

  return (
    <main className="container-fluid bg-light text-center">
      <h1>Daily Motivation 😊</h1>

      {/* Display the daily motivational quote */}
      <section className="quote-section mt-5">
        <h2>Here’s your motivational quote for today:</h2>
        <div className="quote-container">
          <p className="quote">"{quote}"</p>
          {author && <p className="author">- {author}</p>}
        </div>
      </section>

      {/* Main Section with Categories (unchanged from previous) */}
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
