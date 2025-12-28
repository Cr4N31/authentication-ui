# authentication-ui

A simple **React authentication demo** built with functional components, `useState`, and conditional rendering.
This project demonstrates a **mock authentication flow** with Login, Register, ProtectedRoute, and an auth toggle.

It is intended for **learning, UI testing, and architecture practice** before integrating a real backend.

---

## Features

* Login form with email and password
* Register form with username, email, password, and confirmation
* Client-side validation for all inputs
* Toggle between Login and Register modes
* Mock protected route (access granted only when logged in)
* Logout functionality
* Clean, consistent UI styled with Tailwind CSS
* No backend required (state-based auth simulation)

---

## Tech Stack

* React (Functional Components)
* React Hooks (`useState`)
* Tailwind CSS
* JavaScript (ES6+)

---

## Project Structure

```
src/
├─ components/
│  ├─ LoginForm.jsx
│  ├─ RegisterForm.jsx
│  ├─ AuthToggle.jsx
│  └─ ProtectedRoute.jsx
├─ App.jsx
└─ index.jsx
```

---

## How It Works (High-Level Flow)

1. App starts with `user === null`
2. Login or Register form is shown
3. Submitting a form sets the `user` state
4. App re-renders and displays `ProtectedRoute`
5. Clicking Logout clears the `user` state
6. User is returned to Login/Register view

This mimics real authentication behavior without a backend.

---

## Component Breakdown

### App.jsx

* Acts as the **root controller**
* Holds global auth state:

  * `user` → determines if access is allowed
  * `isLogin` → controls Login vs Register UI
* Conditionally renders:

  * LoginForm
  * RegisterForm
  * ProtectedRoute

---

### LoginForm.jsx

* Manages:

  * Email
  * Password
* Prevents default form submission
* Calls `onSubmit` with credentials
* Disabled submit button when fields are empty
* Styled as a centered card

---

### RegisterForm.jsx

* Manages:

  * Username
  * Email
  * Password
  * Confirm Password
* Validates:

  * Empty fields
  * Password length (minimum 10)
  * Password match
* Displays inline error messages
* Calls `onSubmit` on success

---

### AuthToggle.jsx

* Switches between Login and Register modes
* Disables the active mode button
* Keeps auth logic centralized in `App`

---

### ProtectedRoute.jsx

* Receives `user` as a prop
* If `user` exists → shows protected content
* If `user` is `null` → access is denied
* Demonstrates how route protection works without React Router

---

## Running the Project

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
# or
npm start
```

3. Open the app in your browser.

---

## Notes for Developers

* This project uses **conditional rendering**, not routing
* No tokens, cookies, or storage are used
* Ideal for understanding:

  * Auth state flow
  * Component responsibility
  * UI-driven logic

---

## Future Improvements

* Add React Router for real routes
* Introduce Auth Context (Context API)
* Persist login using localStorage
* Integrate a real backend (JWT / OAuth)
* Add loading states and async handling
* Extract reusable Input components

---

## Author

Built as a learning-focused authentication prototype.

---

## License

MIT License

