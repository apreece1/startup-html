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
