from config import db

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    # Convert to JSON format
    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
        }
    
# Transaction model
class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(255), nullable=False)
    type = db.Column(db.String(10), nullable=False)  # 'revenue' or 'expense'
    date = db.Column(db.String(10), nullable=False)

    # Convert to JSON format
    def to_json(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'description': self.description,
            'amount': self.amount,
            'category': self.category,
            'type': self.type,
            'date': self.date,
        }

# Income Statement model
class IncomeStatement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    category = db.Column(db.String(120), nullable=False)
    amount = db.Column(db.Float, nullable=False)

    # Convert to JSON format
    def to_json(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'category': self.category,
            'amount': self.amount
        }