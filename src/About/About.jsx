// import React, { useState, useEffect } from 'react';
// import './About.css'; // Import custom styles for this page
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// export function About() {
//   return (
//     <main className="container-fluid bg-light text-center">
//       {/* Header Section */}
//       <header>
//         <h1>About 🤔</h1>
//         <nav>
//           <ul className="list-unstyled">
//             <li><a href="/" className="text-dark">Home</a></li>
//             <li><a href="/alarms" className="text-dark">Alarms</a></li>
//             <li><a href="/daily-motivation" className="text-dark">Daily Motivation</a></li>
//             <li><a href="/personal-stats" className="text-dark">Personal Stats</a></li>
//             <li><a href="/connect" className="text-dark">Connect</a></li>
//             <li><a href="/about" className="text-dark">About</a></li>
//           </ul>
//         </nav>
//         <hr />
//       </header>

//       {/* Main Content */}
//       <section className="main-content">
//         <p>
//           GETUP is for people that hate getting up. A place for those who can never claim to be morning people.
//           Designed to help you find one less thing to hate about waking up.
//         </p>

//         {/* Example of a picture-box div */}
//         <div className="picture-box mt-4">
//           <div id="picture">
//             <img src="sunrise.jpg" alt="Sunrise" className="img-fluid" />
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="mt-5">
//         <hr />
//         <span className="text-reset">Author: Abigail Preece</span>
//         <br />
//         <a href="https://github.com/apreece1/startup.git" className="text-dark">GitHub</a>
//         <p>
//           Emoji art created using emojis from{' '}
//           <a href="https://emojipedia.org/google" target="_blank" rel="noopener noreferrer">
//             Emojipedia.org
//           </a>
//         </p>
//         <p>
//           Images found on{' '}
//           <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">
//             Pexels.com
//           </a>
//         </p>
//       </footer>
//     </main>
//   );
// }

import React, { useState, useEffect } from 'react';
import './About.css'; // Import custom styles for this page
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export function About() {
  // Example of useState for managing a state value
  const [imageLoaded, setImageLoaded] = useState(false);

  // Example of useEffect to perform side effects, like loading the image
  useEffect(() => {
    const image = new Image();
    image.src = 'sunrise.jpg';
    image.onload = () => setImageLoaded(true);
  }, []); // Empty array ensures this effect runs only once, on mount

  return (
    <main className="container-fluid bg-light text-center">
      {/* Header Section */}
        <h1>About 🤔</h1>
      {/* Main Content */}
      <section className="main-content">
        <p>
          GETUP is for people that hate getting up. A place for those who can never claim to be morning people.
          Designed to help you find one less thing to hate about waking up.
        </p>

        {/* Image Loading */}
        {imageLoaded ? (
          <div className="picture-box mt-4">
            <div id="picture">
              <img src="sunrise.jpg" alt="Sunrise" className="img-fluid" />
            </div>
          </div>
        ) : (
          <p>Loading image...</p>
        )}
      </section>
    </main>
  );
}
