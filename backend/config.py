import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Enable CORS
CORS(app)

# Configure the database URL for SQLAlchemy (example uses PostgreSQL)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'  # Update this for your Azure DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Set the secret key for JWT
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

# Initialize SQLAlchemy instance
db = SQLAlchemy(app)

# Initialize JWTManager
jwt = JWTManager(app)

# If this script is run directly, initialize the database and start the app
if __name__ == '__main__':
    # Initialize database tables
    with app.app_context():
        db.create_all()

    # Run the app
    app.run(debug=True)
