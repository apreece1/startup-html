// import React, { useState, useEffect } from 'react';
// import './DailyMotivation.css'; // Import custom styles for this page
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// export function DailyMotivation() {
//   const [quote, setQuote] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchQuote = async () => {
//       try {
//         // Update fetch URL to match the proxy route
//         const response = await fetch('/api/quote');  // Use the proxy route
//         const data = await response.json();
//         setQuote(data[0].q);  // Assuming the API returns an array of quotes
//         setLoading(false);  // Set loading to false once data is fetched
//       } catch (error) {
//         console.error('Error fetching quote:', error);
//         setLoading(false);  // Set loading to false even if there's an error
//       }
//     };

//     fetchQuote(); // Fetch the quote when the component mounts
//   }, []); // Empty dependency array ensures this runs once when the component mounts

//   return (
//     <main className="container-fluid bg-light text-center">
//       <h1>Daily Motivation 😊</h1>

//       {/* Display the quote */}
//       <section className="quote-section mt-5">
//         <h2>Your Daily Quote:</h2>
//         {loading ? (
//           <p>Loading...</p>  // Show loading text while waiting for the quote
//         ) : (
//           <blockquote className="blockquote">
//             <p>{quote}</p>
//           </blockquote>
//         )}
//       </section>

//       {/* Main Section with Categories */}
//       <section className="categories mt-5">
//         <h2>Try Something:</h2>
//         <nav>
//           <div className="category-container">
//             <ul className="list-unstyled">
//               <li><a href="https://www.calm.com/blog/affirmations-for-anxiety" className="text-primary">Affirmations</a></li>
//               <li><a href="https://www.mindful.org/category/mindful-skills/meditation/guided-meditation/" className="text-primary">Meditations</a></li>
//               <li><a href="https://www.ted.com/" className="text-primary">Pep Talks</a></li>
//               <li><a href="https://www.healthline.com/health/fitness-exercise/at-home-workouts" className="text-primary">Workouts</a></li>
//             </ul>
//           </div>
//         </nav>
//       </section>
//     </main>
//   );
// }

import React, { useState, useEffect } from 'react';
import './DailyMotivation.css'; // Import custom styles for this page
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export function DailyMotivation() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('/api/quote');  // Proxy route
        const data = await response.json();

        // Log the entire response to check the structure
        console.log('API Response:', data);

        // Ensure that the API returns a 'quote' and 'author' property
        if (data.quote && data.author) {
          setQuote(data.quote);
          setAuthor(data.author);
        } else {
          console.error('Unexpected API response structure:', data);
        }

        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching quote:', error);
        setLoading(false);  // Set loading to false even if there's an error
      }
    };

    fetchQuote();  // Fetch the quote when the component mounts
  }, []);

  return (
    <main className="container-fluid bg-light text-center">
      <h1>Daily Motivation 😊</h1>

      {/* Display the quote */}
      <section className="quote-section mt-5">
        <h2>Your Daily Quote:</h2>
        {loading ? (
          <p>Loading...</p>  // Show loading text while waiting for the quote
        ) : (
          <blockquote className="blockquote">
            <p>{quote}</p>
            <footer>- {author}</footer> {/* Display author name */}
          </blockquote>
        )}
      </section>

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
