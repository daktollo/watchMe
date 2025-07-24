# watchMe

## Project Description

watchMe is a video streaming platform that allows users to browse and purchase videos and films. This project will be developed using **Node.js** and **Vue.js**, with the goal of learning and solidifying skills in both technologies.

## Purpose

- Create a video marketplace where users can browse and purchase video content.
- Allow users to watch the videos they have purchased.
- System administrators can upload and manage video content with pricing.
- Focus on backend development with **Node.js** and frontend development with **Vue.js**.

## Technologies

- **Frontend:** Vue.js
- **Backend:** Node.js
- **Database:** MongoDB

## Features

### 1. User Login and Registration

- Users can log in or create a new account.
- After logging in, users can access the video marketplace and their purchased content.

### 2. Video Marketplace Browsing

- Users can browse all available videos in the marketplace.
- Videos can be filtered by category, price, rating, etc.
- Each video has detailed information including description, duration, price, and preview.

### 3. Video Purchasing System

- Users can purchase videos using a simulated payment interface.
- Free videos can be added to user's library instantly.
- Paid videos require mock payment form completion before access is granted.
- Users maintain a personal library of purchased content.

### 4. Video Watching

- Users can watch videos they have purchased from their personal library.
- Videos will be played using the HTML5 video tag with streaming capabilities.
- Access control ensures only purchased videos can be watched.

### 5. Admin Content Management

- System administrators can upload new video content.
- Admins can set pricing, categories, descriptions for each video.
- Content management system for organizing the video library.

### 6. Backend Operations

- **Node.js** will handle video content management and user information.
- MongoDB will store user information, video metadata, and purchase records.
- Mock payment processing and transaction simulation for video purchases.
- User access control for purchased content only.
- Admin panel for content management and pricing.

### 7. Frontend Operations

- **Vue.js** will be used to handle marketplace browsing and video playback.
- Shopping cart and mock payment interface functionality.
- User library management for purchased videos.
- Admin interface for content management.
- The platform will be responsive and accessible on different devices.

## Database Design

The database will have three main collections:

1. **Users Collection:**
   - Stores user information (name, email, password, etc.).
2. **Videos Collection:**
   - Stores video metadata (title, description, price, file path, category, etc.).
3. **Purchases Collection:**
   - Stores user purchase records (userId, videoId, purchaseDate, mock price paid, etc.).

## User Flows

1. **Registration and Login:**

   - Users can create a new account or log into an existing one.
   - After successful login, users will be redirected to the video marketplace.

2. **Video Browsing and Purchase:**

   - Users browse available videos in the marketplace.
   - They can view video details, previews, and pricing.
   - Users can add videos to cart and complete mock purchase through fake credit card interface.

3. **Video Watching:**
   - Users access their personal library of purchased videos.
   - They can select and watch any video they have purchased.
   - Video streaming is handled through HTML5 player with access control.

## Technical Structure

- **Frontend:** Vue.js
  - User interface will be created.
  - Vue Router will be used for page navigation.
  - Axios or Fetch API will be used for communication with the backend.
- **Backend:** Node.js

  - Express.js framework will be used to create the API.
  - MongoDB will be used to store user, video, and purchase data.
  - Mock payment simulation for demonstrating purchase functionality.
  - Admin API for content management.

- **Database:** MongoDB
  - User, video, and purchase data will be stored in MongoDB collections.
  - No real payment data stored, only simulated transaction records.
