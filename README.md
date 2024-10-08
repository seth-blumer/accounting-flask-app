# Accounting Flask App

This project is a full-stack web application built with **React**, **TypeScript**, and **Vite** on the frontend, and **Flask** on the backend. The application allows users to manage their accounting transactions and categories.

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

## Video Demonstration

[![Watch the Video](https://img.youtube.com/vi/your-video-id/hqdefault.jpg)](https://streamable.com/bp6fjk)
