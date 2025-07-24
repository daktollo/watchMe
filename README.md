# watchMe

## Project Description

watchMe is a video streaming platform that allows users to upload and watch videos and films later. This project will be developed using **Node.js** and **Vue.js**, with the goal of learning and solidifying skills in both technologies.

## Purpose

- Create a platform where users can upload video or film files.
- Allow users to watch the videos they have uploaded at a later time.
- Focus on backend development with **Node.js** and frontend development with **Vue.js**.

## Technologies

- **Frontend:** Vue.js
- **Backend:** Node.js
- **Database:** MongoDB

## Features

### 1. User Login and Registration

- Users can log in or create a new account.
- After logging in, users can access video and film content on the platform.

### 2. Video Upload

- Users can choose a video file from their computer and upload it.
- The video file will be saved to the platform during the upload process.

### 3. Video Watching

- Users can watch the videos they have previously uploaded.
- Videos will be played using the HTML5 video tag.

### 4. Video Listing

- All uploaded videos will be displayed to the user as a personal list.
- Users can categorize their videos and search for them quickly.

### 5. Backend Operations

- **Node.js** will handle video file storage and user information management.
- MongoDB will store user information and video metadata.

### 6. Frontend Operations

- **Vue.js** will be used to handle video uploading, video playback, and video listing.
- The platform will be responsive and accessible on different devices.

## Database Design

The database will have two main collections:

1. **Users Collection:**
   - Stores user information (name, email, password, etc.).
2. **Videos Collection:**
   - Stores video file name, user ID, video URL, upload date, etc.

## User Flows

1. **Registration and Login:**

   - Users can create a new account or log into an existing one.
   - After successful login, users will be redirected to their video list.

2. **Video Upload:**

   - Users select and upload a video file.
   - Once uploaded, the video will be associated with the user's account and available for later viewing.

3. **Video Watching:**
   - Users will see a list of videos they have previously uploaded.
   - They can select a video to watch, which will be played using the HTML5 video player.

## Technical Structure

- **Frontend:** Vue.js
  - User interface will be created.
  - Vue Router will be used for page navigation.
  - Axios or Fetch API will be used for communication with the backend.
- **Backend:** Node.js

  - Express.js framework will be used to create the API.
  - MongoDB will be used to store user and video data.

- **Database:** MongoDB
  - User and video data will be stored in MongoDB collections.
