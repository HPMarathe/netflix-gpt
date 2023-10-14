# Netflix-gpt

- create react app
- configired tailwind

- Header
- Login form
- Sign in Form
- Routing of App
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file

# Features

- Login/Sign Up
  - Sign In /Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

# Bug fix

- Whenever the user is not logged in & user is on the home page & request to go on /browse page we should redirect him to home page.

- Whenever the user is logged in & user is on the browse page & request to go on home page we should redirect him to browse page.

- We should directly redirect him on checking auth with onauthstatechange provided by firebase.

- you dont need any other routes except on onauthstatechange.
