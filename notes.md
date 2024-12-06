Github is an insanely powerful tool that can be used to help more easily navigate and share code. I won't lie I am still very intimidated by it but I look forward to continuing to learn how to use it.


9/23: HTML Structure Elements Upadted:


HTML is a very visual code, things that were helpful include the setup for adding hyperlinks:
#<,a href="https://www.example.com">Click here to visit Example.com</a>
images: #<,img src="image.jpg" alt="Alternative text">
and that in order to create sections you must include the command at the beggining and then a backslashed version of the command at the end. 


9/24: HTTPS, TLS, and certificates:
commands for entering Caddy inlcude: vi Caddy, once I have entered the main sytem area by doing ssh -i ~KeyPair\mykeypairname\ ubuntu@52.1.252.104(or my domain name)
The secure version of HTTP is called Secure Hypertext Transport Protocol (HTTPS). This is basically HTTP with a negotiated secure connection that happens before any data is exchanged. Having a secure connection means that all the data is encrypted using the TLS protocol. TLS is sometimes referred to by a now unsecure predecessor protocol named SSL. TLS works by negotiating a shared secret that is then used to encrypt data.  Without a secure connection anyone that had access to the network traffic, at any point, from the user's computer to the server handling the request could easily capture all the data sent in either direction.Caddy uses Let's Encrypt to generate a web certificate every time an HTTPS request is made for a domain name that Caddy doesn't have a web certificate for. When this happens Caddy asks Let's Encrypt to verify that the domain for the requested certificate is actually owned by the requester.

10/5: flex, frameworks, practice: these modules allowed us to go more into depth stylistically when modifying the visual aesthetics of html. We use CSS to modify this sctructure. It allows the inclusion of motion, border, font chagnes, background color, beveling and others. we used libraries such as bootstrap and others to accomplish this. Formatting examples can be found in the submitted files. Basically each section in css must ocrresponf to an html section. 

10/26:

I learned how to create dynamic and interactive web applications using React. Key concepts include:

Component-based structure: Breaking down UI into reusable components for modularity and maintainability.
JSX: A syntax extension for JavaScript that allows you to write HTML-like structures within JavaScript code.
State management: Using the useState hook to manage component state and trigger re-renders when state changes.
Event handling: Using event handlers like onClick and onChange to respond to user interactions.
Routing: Using libraries like React Router to manage navigation between different pages or views within an application.
Fetching data: Using techniques like useEffect and fetch to fetch data from APIs and update the UI.
Conditional rendering: Rendering different UI elements based on specific conditions.
List rendering: Efficiently rendering lists of items using techniques like map and key.
By understanding these concepts and practicing with React, you can build complex and interactive user interfaces.

12/5: 

JSX and React Components:
JSX Basics:

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.
JSX components are typically written within .jsx files and can be rendered dynamically.
React components are modular units that can be reused in different parts of the app, allowing for a more efficient and maintainable codebase.
Dynamic Routing:

In React, we use react-router-dom to handle dynamic routing between different pages of the application.
The BrowserRouter component wraps the entire app, and individual Route components are used to define the paths for different pages (e.g., Login, Alarms, Daily Motivation, etc.).
We also use NavLink components for navigation, allowing users to move between different pages.
State Management:

We learned how to manage state in React using the useState hook. For example, we store the username in local storage, and use it to update the userName state, which is passed as props to other components.
Structure of the React App:

The project follows a modular folder structure where each section (like Alarms, Daily Motivation, Connect, etc.) has its own folder within src. This promotes clean organization.
Components such as Login, Alarms, Daily Motivation, Personal Stats, and Connect are imported into App.js, which manages the routing and main structure of the app.
The home page (/) references the Login component, while other pages are routed through the Routes component.
CSS Styling and Layout:
Flexbox Layout:

The overall layout of the app uses Flexbox to ensure responsive and flexible design. The body uses flex-direction: column to arrange the content vertically, with the header, main content, and footer stacked in a clean and responsive manner.
The main section uses Flexbox to align its child elements (such as content) vertically and ensure that space is evenly distributed.
Header and Footer Styling:

The header has a background color (#5F9EA0), and padding and margin were added to provide spacing and rounded corners for a modern look.
The footer, styled with a dark background (#333), contains the author's name and a GitHub link. The GitHub link is styled to appear below the author’s name and is aligned using text-align: center.
Responsive Design:

We added a media query for smaller screens (max-height: 600px), which hides the header and footer when the height of the viewport is less than 600px. This helps ensure a cleaner, more responsive layout on smaller screens.
Link Styling:

The GitHub link in the footer has been styled to appear clean, with the default underline removed and text centered.
Other Styles:

We've added box shadows and border-radius for softer, rounded edges and to improve the overall appearance of the layout.
React App Structure Recap:
The app is structured with several functional components organized into folders under src (e.g., login, alarms, daily-motivation, etc.).
Dynamic Routing: The app uses react-router-dom for seamless navigation between pages like Login, Alarms, Daily Motivation, etc.
State Management: The useState hook manages dynamic content such as the username, and updates are stored in the local storage.



12/6 

Axios for API Calls: I switched from using fetch to axios in the React component to handle the HTTP requests, which offers additional features like automatic JSON parsing and easier error handling.

Express API Setup: I set up an Express API to fetch data from a third-party service (ZenQuotes API) and serve it to the frontend. The Express server was configured to route requests through axios to ZenQuotes.

Error Handling: I learned the importance of handling errors in API calls and how to show helpful messages to the user when something goes wrong, such as when the server returns a 500 error.

Asynchronous Operations: I saw how to use async/await with axios for asynchronous API calls. This allows the UI to remain responsive while waiting for the data.

CORS Issues: I encountered and learned about CORS issues that arise when making API calls from a client-side application to a different domain, and how to manage them by setting up the server to handle CORS properly.
