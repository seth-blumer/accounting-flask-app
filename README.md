# Accounting Flask App

This project is a full-stack web application built with **React**, **TypeScript**, and **Vite** on the frontend, and **Flask** on the backend. 
The application allows users to manage their accounting transactions and categories, and generates an income statement based on input transactions.

## Video Demonstration

[![Watch the Video](https://i.ibb.co/khFRW6T/accounting-flask-app-thumbnail.png)](https://streamable.com/knek4p)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14 or higher)
- **Python** (v3.8 or higher)
- **pip** (Python package installer)

### Setup

#### Step 1: Clone the Repository

To clone the repository, run the following command in your terminal:

```
git clone https://github.com/yourusername/accounting-flask-app.git cd accounting-flask-app
```

#### Step 2: Set Up Environment Variables

Create a `.env` file in both the backend and frontend directories.

**Backend `.env`:**

Create a `.env` file in the backend directory with the following content:

```
JWT_SECRET_KEY=your-secret-key
VITE_APP_API_URL=http://localhost:[port number]
```

#### Step 3: Install Dependencies

To install the required dependencies, follow these steps:

**Backend:**

Navigate to the backend directory and install the Python dependencies:
```
pip install -r requirements.txt
```


**Frontend:**

Navigate to the frontend directory and install the Node.js dependencies:
```
npm install
```

#### Step 4: Run the Application

To start the application, run the following commands:

**Backend:**

Start the Flask server:
```
python main.py 
```

**Frontend:**
Start the Vite development server:
```
npm run dev
```

## TODOs

### 1. **Edit Functionality for Transactions (Frontend)**
   - Have transaction modal allow for editing (triggered by onclick for a transaction)

### 2. **Edit and Delete Functionality for Categories (Frontend)**
   - Add the ability to edit category names or descriptions.
   - Allow users to delete categories, and ensure there’s logic to handle transactions associated with deleted categories.

### 3. **Reusable Components**
   - Refactor more common UI elements such as buttons, forms, and modals into reusable components and implement throughout application.
   - Ensure each reusable component can accept customizable props for styling and behavior.

### 4. **Refresh Token Logic**
   - Implement a refresh token mechanism to ensure users remain signed in without manual re-login.
   - Add logic to automatically refresh the token before it expires, and update the Flask backend to issue refresh tokens.

### 5. **Path Alias for Cleaner Imports (Frontend)**
   - Configure a path alias in both the frontend (TypeScript/Vite) to avoid long relative imports ('@').
   - Update all current imports to use the new alias paths for improved code readability.

### 6. **Error Handling for API Calls**
   - Improve error handling across all API calls.
   - Display user-friendly error messages when API requests fail.

### 7. **Auto Sign-Out on Token Expiration**
   - Add logic to automatically sign out the user if their JWT token expires.
   - Provide a warning before signing out, allowing users to refresh their session if they are active.

### 8. **Utilize Formik in AuthForm**
   - Refactor the existing authentication form (login/signup) to use Formik.