# React moha milon in firebase with context API

## Authentication using react and react-router with context API

## Steps

1. **Install Firebase**

    Run the following command in your project directory to install Firebase:

    ```bash
    npm install firebase
    ```

2. **Create a Firebase Project**

    Go to [Firebase Console](https://console.firebase.google.com/), create a new project, and follow the setup instructions.

3. **Register Your App**

    In the Firebase Console, add a new Web app under your project to generate Firebase configuration settings.

4. **Set Up Firebase Configuration File**

    - Create a new file in your project directory, e.g., **`firebase.js`**.
    - Copy the Firebase configuration settings from your Firebase Console and paste them into this file.
    - Initialize Firebase in this file.

    ```javascript
    // firebase.js
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID",
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    export default auth;
    ```

5. **Enable Google Authentication**

    - In your Firebase Console, navigate to **Authentication > Sign-in method**.
    - Enable the **Whatever** sign-in provider you want.

6. **Set Up Firebase Authentication in Your Code**

    - Import **`auth`** from your **`firebase.js`** file wherever you need to use Firebase Authentication in your app.
    - Follow the [Firebase Authentication documentation](https://firebase.google.com/docs/auth) to add sign-in functionality, such as Google Sign-In.

    ```javascript
    import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    import auth from "./firebase"; // adjust the path if needed

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("User signed in:", result.user);
            })
            .catch((error) => {
                console.error("Error signing in:", error.message);
            });
    };
    ```

## Additional Resources

For more details, refer to the official [Firebase Authentication documentation](https://firebase.google.com/docs/auth).
