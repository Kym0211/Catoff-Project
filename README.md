# Fitness Challenge App

This is a React Native app that provides various challenges related to fitness, creativity, and miscellaneous activities. Users can sign up, log in, and participate in different challenges, tracking their progress with features like step counting.

## Table of Contents

1. [Features](#features)
2. [Setup Instructions](#setup-instructions)
3. [App Architecture](#app-architecture)
4. [Screens](#screens)
5. [Libraries and Dependencies](#libraries-and-dependencies)

## Features

- User Authentication (Sign Up and Sign In)
- Challenge List with categories (Fitness, Creative, Miscellaneous)
- Challenge Details with description and important notes
- Step counting using device pedometer for fitness challenges

## Setup Instructions

### Prerequisites

- Node.js and npm (Node Package Manager)
- Expo CLI (`npm install -g expo-cli`)
- Firebase account with a Firebase project set up

### Step-by-Step Setup

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-username/fitness-challenge-app.git
   cd fitness-challenge-app
   ```

2. **Install Dependencies**

    ```sh
    npm install
    ```

3. **Set Up Firebase**

- Go to the Firebase Console
- Create a new project(or use an existing one).
- Add a new web app to your project.
- Cope the Firebase configuration and create a `FirebaseConfig.js` file in the root of your project.
    ```js
    // FirebaseConfig.js
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    export const FIREBASE_AUTH = getAuth(app);
    ```

4. Run the App

    ```sh
    expo start
    ```
This will start the Expo development server. You can use the Expo Go app on your phone to scan the QR code and run the app on your device, or you can run it on an emulator.

## App Architecture
The app is structured into several screens, each responsible for a specific part of the user experience. The main components are:

- **Login Screen:** Handles user authentication (sign in and sign up).
- **GameCard Screen:** Displays a list of available challenges.
- **Details Screen:** Shows details about a selected challenge.
- **StartChallenge Screen:** Allows users to start a challenge and track    their progress (e.g., step counting).

### Component Structure
- **Login:** Handles user login and sign up.
- **GameCard:** Displays the list of challenges categorized by type.
- **Details:** Shows detailed information about a specific challenge.
- **StartChallenge:** Manages the pedometer and tracks user steps during a fitness challenge.

### State Management
State is managed using React's useState and useEffect hooks. The main pieces of state include:

- `email` and `password` for user authentication.
- `showPassword` to toggle password visibility.
- `stepCount` to track steps during fitness challenges.
- `challengeStarted` to determine if a challenge has been started.

## Screens
### Login Screen
Handles user authentication. Users can sign in or sign up using their email and password. Password visibility can be toggled.

### GameCard Screen
Displays a list of challenges. Each challenge is shown with a title, description, and image. The challenges are categorized into Fitness, Creative, and Miscellaneous games.

### Details Screen
Shows detailed information about a selected challenge, including the start date, description, and important notes. Users can start the challenge from this screen.

### StartChallenge Screen
Allows users to start a challenge and track their progress. For fitness challenges, it uses the device pedometer to count steps.

## Libraries and Dependencies
- **React Native:** Core framework for building the app.
- **Expo:** Development toolchain that makes it easier to build and deploy React Native apps.
- **Firebase:** Used for user authentication.
- **Expo Sensors:** Used to access the device pedometer for step counting.
- **React Navigation:** Manages navigation between screens.

### Installation of Libraries
    ```sh
    npm install @react-navigation/native @react-navigation/stack
    npm install react-native-safe-area-context
    npm install @react-native-firebase/app @react-native-firebase/auth
    npm install expo-sensors
    npm install @expo/vector-icons
    ```

### Expo setup
Make sure to install Expo CLI globally and use the Expo Go app on your device for testing during development.

    ```sh
    npm install -g expo-cli
    ```
