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
