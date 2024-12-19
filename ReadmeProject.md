User Directory App

Overview:-
A React Native application to display a list of users with detailed information about each user. The app demonstrates the use of React Navigation, API integration, dynamic data rendering, and user-friendly UI elements.

Features :-

User List Display:
Fetches and displays a list of users from an external API.
Each user has their name and email displayed in the list.
Detailed User View:

Tap on a user's name to view detailed information, including:
Name
Email
Phone number
Company details
Address
Search Functionality:

Search bar to filter users dynamically by name.

User Profile Picture Avatar:

Displays Profile Avatar for each user in the list.

Custom Styling:
A modern and responsive user interface with:
Dynamic background images.
Clean typography for better readability.
Offline Safe Navigation:

Ensures proper data handling even when details are unavailable.
Technologies Used

React Native:
Core framework for mobile application development.

React Navigation:
For seamless navigation between screens.

API Integration:
Fetches data from JSONPlaceholder for demonstration.
Dynamic Styling:

Styled using React Native's StyleSheet for responsive design.

How It Works
1. User List Screen
Displays all users fetched from the API.
Tapping a user navigates to the detailed view screen.

2. User Detail Screen
Fetches and displays detailed information for the selected user using their unique ID.

3. Search and Pagination
Search bar filters users by name.

API Details
This project uses JSONPlaceholder to fetch mock user data.