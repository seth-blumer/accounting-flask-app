from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager

# Initialize Flask app
app = Flask(__name__)

# Enable CORS
CORS(app)

# Configure the database URL for SQLAlchemy (example uses PostgreSQL)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'  # Update this for your Azure DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Set the secret key for JWT
app.config['JWT_SECRET_KEY'] = '043f556466b4b062e132eee50b6906ef183d64affeacff48c14c9287064008bf957337ff4611c26c57f3e758722bb76ebbbcb7b03f0b0d59db981cccf47b95afafec3904c45b5a897180c7d5c4b1cf78bacd856609e06ffe55c22f09ca31f49543ba50fa94f42479bac0317ed8d00f6b510a70087d4c50548fc0bf2d1842bde713714e0c0222897552b3b03d63487395e78bc7bd978e1881d08d517ddf448b291e86467fb90bac17070f16b0dbce7468aba09ec44df41336ceea87f7b5c21b3ee2ace3a488527951623e0719b4c790d28cc172e681655c687af50ce3833cdbd620c7d3ac782f3dabff015b2e7cbacc0bd4fb21e164fbf10421358a6350b35056'

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
