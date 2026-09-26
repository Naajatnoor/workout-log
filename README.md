# 💪 FitLog — Workout Library

FitLog is a modern and responsive workout library web application built with **Next.js, TypeScript, and Tailwind CSS**. It helps users explore different workouts, view detailed exercise information, create a personalized workout plan, save workouts for later, and track completed exercises.

---

## 🚀 Live Demo

Live Website: https://workout-log-liard.vercel.app/

GitHub Repository: https://github.com/Naajatnoor/workout-log

---

## 📌 Project Description

FitLog is a dark-themed workout library designed for people who want a simple and organized way to plan their workouts.

Users can browse a collection of exercises, view detailed workout information, add exercises to **Today's Plan**, save workouts for later, sort workouts, and mark completed workouts as done.

The application is fully responsive and works across **mobile, tablet, and desktop devices**.

---

## 🛠️ Technologies Used

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **DaisyUI**
* **Font Awesome**
* **React Toastify**
* **Next.js Image**
* **Context API**
* **Vercel**

---

## ✨ Key Features

### 1. 🏋️ Workout Library

* Browse different workouts from the library.
* Each workout card displays:

  * Workout image
  * Muscle groups
  * Workout name
  * Equipment
  * Duration
  * Calories
  * Rating

### 2. 📋 Today's Workout Plan

* Add workouts to Today's Plan.
* Maximum **5 workouts** can be added.
* Plan count is displayed in the navbar.
* View detailed information for each planned workout.
* Mark a workout as done.
* Marking a workout as done removes it from Today's Plan.
* Exercises, minutes, and calories update automatically.

### 3. 🔖 Save Workouts for Later

* Save any workout for later.
* Saved workout count is displayed in the navbar.
* Prevents duplicate saved workouts.
* Remove saved workouts using the remove button.

### 4. 🔍 Workout Details

Each workout has a dedicated details page containing:

* Workout name
* Description
* Muscle groups
* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories burned
* Rating
* Step-by-step instructions

Users can also add the workout to Today's Plan or save it for later.

### 5. 📊 Workout Sorting

Users can sort workouts by:

* Duration
* Calories
* Rating

The sorting order can be changed between ascending and descending.

### 6. 🔔 Toast Notifications

Toast notifications are displayed when users:

* Add a workout to Today's Plan
* Save a workout
* Try to add a duplicate workout
* Reach the maximum plan limit
* Mark a workout as done
* Remove a saved workout

### 7. 📱 Fully Responsive Design

The website is designed to work smoothly on:

* 📱 Mobile devices
* 📲 Tablets
* 💻 Desktop screens

### 8. ❌ Custom 404 Page

A custom `not-found.tsx` page is included for invalid routes and unavailable workout details.

### 9. ⏳ Loading State

A loading state is displayed while workout data is being fetched.

---

## 🧩 Main Routes

| Route             | Description                   |
| ----------------- | ----------------------------- |
| `/`               | Workout Library / Home        |
| `/libraries/[id]` | Workout Details               |
| `/plans`          | Today's Plan & Saved Workouts |

---

## 🧠 State Management

FitLog uses **React Context API** to manage workout-related global state.

The context manages:

* Today's Plan
* Saved Workouts
* Adding workouts
* Removing workouts
* Maximum 5-workout limit

This allows the navbar, workout details page, library, and My Plan page to stay synchronized.

---

## 📐 Responsive Design

The UI uses Tailwind CSS responsive utilities to provide different layouts for different screen sizes.

The application supports:

* Mobile
* Tablet
* Desktop

Workout cards, navigation, hero section, library grid, plan page, and detail pages adapt to smaller screens.

---

## 📦 Important Dependencies

```bash
npm install @fortawesome/react-fontawesome
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm i -D daisyui@latest
npm install react-toastify
```

---

## 🌐 Deployment

The project can be deployed using **Vercel**.

After deployment, make sure to test:

* Home page
* Workout details
* My Plan
* Saved workouts
* Add/remove functionality
* Mark as Done
* Sorting
* 404 page
* Page reloads

---

## 🎯 Project Goals

The main goals of FitLog are to provide:

* A simple workout discovery experience
* Easy workout planning
* Saved workout management
* Workout completion tracking
* Responsive and user-friendly UI
* Clean and reusable React components

---

## 👩‍💻 Author

**Najat Prapti**

Computer Science & Engineering Student

---

## 📄 License

This project was created for educational purposes.
