# Startup Deliverable - Specification

## Elevator Pitch:

GET UP: Your personalized wake-up alarm. Set motivational reasons, choose inspiring media, track goals, and connect with friends to stay accountable. An app designed for those that hate waking up.

**Key Features**:

- Nightly Motivation: Set your reasons for waking up the night before. To turn off the alarm, you must re-enter these reasons.
- Customizable Wake-Up Routines: Choose motivational videos, meditations, or music (through linked apps) to greet the day.
- Goal Tracking: Track small daily goals like morning workouts or eating breakfast to stay focused.
- Accountability Partners: Join or create groups with friends to share progress and stay motivated.
- Positive News Feed: Start your day on a high note with uplifting news stories.
- Healthy Breakfast Ideas: Browse easy and healthy meal options to fuel your day.
- Group Features:
    - Create or join groups with friends or like-minded individuals.
    - Share progress, achievements, and motivational messages in group feeds.
    - Compare streaks with other group members.
    - Receive real-time notifications when group members wake up at the same time.
- Morning Photo Challenge:
    - Immediately after turning off the alarm, a prompt will appear to take a photo.
    - Take a photo of yourself in a specific location within a set time.
    - Share the photo with your group or save it to your stats.

## Technology Usage:

- HTML: Structure the app's interface with elements for setting alarms, reasons, goals, news feed, etc.
- CSS: Style the interface to be user-friendly, visually appealing, and responsive across devices.
- JavaScript: Handle user interactions like setting alarms, playing videos/music, updating goal progress, capturing photos, and verifying reasons.
- React: Build a single-page application with reusable components for a seamless experience.
- Web Services:
    - Internal: Store user data, alarms, motivations, goals, group information, and photo uploads.
    - External: Integrate with YouTube or music app APIs for media playback.
    - External (Optional): Call a news API to display positive stories.
- Authentication: Users can register and login to access personalized features.
- Database Data: Store user information, alarms, motivations, goals, group data, photo uploads, and potentially viewed news stories.
- WebSocket Data (Optional): Implement a real-time feature for group members to receive notifications when others wake up.

By incorporating the morning photo challenge as an immediate prompt after turning off the alarm, you've enhanced the app's ability to encourage users to get up and moving and share their progress with their group.

**Sketch**
![Untitled_Artwork](https://github.com/user-attachments/assets/8451ae28-e1b4-4c3a-a921-44424e6c624a)


## Deliverable Notes:

Deliverable 1: Project Setup and Initial Implementation

Description:
This deliverable focused on setting up the project structure and implementing the foundational elements of the website.

Completed Tasks:

Project Setup:
Created a new Git repository to manage the project.
Initialized the project structure with HTML.
HTML Structure:
Created or edited HTML files for each page: index.html, about.html, contact.html, etc.
Defined the basic structure of each page, including a header, navigation bar, main content, and footer.
Styling:
Implemented basic styling for the overall layout.
Image Integration:
Added images to the HTML pages using the <img> tag.
Adjusted image dimensions and alt text for accessibility.
HTML Editing and Refinement:
Edited the HTML code to improve the structure, semantics, and readability.
Added appropriate HTML elements (e.g., headings, paragraphs, lists) to organize content.
Future Work:

Implement the desired functionality for each page.
Add interactive elements, such as forms and buttons.
Refine the CSS styling to achieve a more polished and professional look.
Optimize the website for different screen sizes and devices.
Test the website thoroughly to ensure it works as expected.



Deliverable Notes for CSS Styling Updates and Feature Modifications
Objective
To enhance the visual design and functionality of the website by editing existing CSS styles, incorporating new features, and removing outdated or unnecessary elements. The updates aim to improve user experience, maintain a clean and professional aesthetic, and ensure consistency across all components.

Deliverables
1. CSS Styling Enhancements
Font Styling

Ensure the global font is set to Roboto, with appropriate fallbacks.
Update the <head> section to include the Google Fonts link for Roboto.
Ensure consistent font sizes, weights, and line-heights across all elements.
Layout Improvements

Ensure Flexbox is used effectively for responsive and clean layouts.
Add or refine padding, margin, and alignment to improve spacing consistency.
Adjust box-shadow properties for elements like cards, buttons, and forms to enhance depth perception.
Color Palette Updates

Standardize color schemes across headers, buttons, links, and hover states.
Replace outdated colors with modern, accessible ones that meet WCAG contrast guidelines.
Hover and Transition Effects

Add smooth hover transitions to buttons, links, and interactive elements.
Refine scaling and shadow effects for hover states on images and cards.
2. New Feature Incorporation
Emoji Art Attribution

Add a Credits section in the footer to acknowledge the use of emojis or related resources.
Example:
html
Copy code
<footer>
    <p>Emoji artwork credits: <a href="https://twemoji.twitter.com/" target="_blank">Twemoji by Twitter</a>.</p>
</footer>
Progress Bar

Introduce a progress bar component for tracking user actions or loading states.
Ensure the progress bar is styled consistently with the website’s design using rounded edges and smooth animations.
Picture Box with Hover Effects

Add a "picture-box" feature with elevated hover effects for showcasing images or content highlights.
Beveled Design

Add beveled shadow effects to sections and cards for a more modern design aesthetic.
3. Removal of Deprecated Features
Unused Elements

Remove unnecessary <hr> tags or elements that clutter the layout.
Delete unused CSS styles to streamline the codebase.
Redundant Features

Remove outdated buttons or features that are no longer aligned with the website’s purpose.
Eliminate placeholder or unused images and text blocks.
4. Accessibility and Performance Improvements
Ensure all updates meet WCAG 2.1 accessibility standards:
Sufficient color contrast.
Keyboard navigability for interactive elements.
Screen-reader-friendly attributes (e.g., alt for images).
Optimize CSS for performance by removing unnecessary styles and using shorthand properties where applicable.
5. Testing and Deployment
Browser Testing

Test the website across major browsers (Chrome, Firefox, Safari, Edge).
Validate responsiveness on mobile, tablet, and desktop views.
Performance Testing

Check for layout shifts or rendering delays.
Minimize CSS file size using tools like a CSS minifier.
Timeline
Completed over the course of a few weeks





