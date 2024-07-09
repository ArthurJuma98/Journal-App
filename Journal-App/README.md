# Personal Journaling App

A mobile application for personal journaling with a backend service for managing journal entries. This project is built using React Native for the frontend and Node.js with Express for the backend. It allows users to create, categorize, and view journal entries, and provides a summary view of the entries over different periods.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Sign up and log in.
- **Journal Entry Management**: Add, edit, and delete journal entries with title, content, category, and date.
- **Journal View**: View a list of all journal entries.
- **Categorization**: Categorize entries (e.g., Personal, Work, Travel).
- **Summary View**: Display summaries of journal entries over selected periods (daily, weekly, monthly).
- **Settings**: Update username and password.

## Technology Stack
- **Frontend**: React Native, TypeScript
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Installation

### Frontend
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/personal-journaling-app.git
   cd personal-journaling-app/frontend
   ```
2. Install dependencies:
   ```sh
   yarn install
   ```
   - npx react-native init JournalingApp --template react-native-template-typescript
   - yarn add react-navigation react-navigation-stack @react-native-community/masked-view react-native-gesture-handler react-native-          reanimated react-native-screens
   - yarn add axios

3. Start the application:
   ```sh
   yarn start
   ```
4. Run on an emulator or physical device:
   ```sh
   yarn android   # For Android
   yarn ios       # For iOS
   ```

### Backend
1. Navigate to the backend directory:
   ```sh
   cd ../backend
   ```
   - mkdir journaling-backend
   - cd journaling-backend
   - npm init -y
   - npm install express cors body-parser jsonwebtoken bcryptjs
   - npm install --save-dev typescript @types/express @types/node @types/cors @types/jsonwebtoken @types/bcryptjs ts-node nodemon

2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root of the backend directory with the following content:
   ```
   MONGO_URI=mongodb://localhost:27017/journaling
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```sh
   npm run dev
   ```

## Usage

1. **User Registration and Login**:
   - Register a new user via the sign-up screen.
   - Log in using the registered credentials.

2. **Journal Entries**:
   - Add new journal entries with a title, content, category, and date.
   - Edit or delete existing journal entries.

3. **View and Categorize Entries**:
   - View a list of all journal entries.
   - Categorize entries into different categories like Personal, Work, Travel, etc.

4. **Summary View**:
   - View summaries of journal entries over selected periods (daily, weekly, monthly).

5. **Update Settings**:
   - Update username and password in the settings screen.

## API Documentation

The backend provides the following endpoints:

### User Routes
- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Log in an existing user

### Journal Routes
- `POST /api/journals`: Create a new journal entry
- `GET /api/journals`: Get all journal entries
- `PUT /api/journals/:id`: Update a journal entry
- `DELETE /api/journals/:id`: Delete a journal entry
- `GET /api/journals/summary`: Get a summary of journal entries

## Contributing

## License