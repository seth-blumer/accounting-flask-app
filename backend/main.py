from flask import Flask, request, jsonify
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity
from models import User, IncomeStatement, Transaction
from config import db, app

# TODO: Create a routes folder and move the routes to the routes folder separated by functionality to be used as blueprints

# Authentication routes
# ---------------------

# Sign up route
@app.route('/auth/signup', methods=['POST'])
def register():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()

    if user:
        return jsonify({"msg": "User already exists"}), 400

    new_user = User(username=data['username'], password=data['password'])  # Hash password in production
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User registered successfully"}), 200

# Refresh token route
@app.route('/auth/refresh', methods=['POST'])
@jwt_required(refresh=True)  # Ensure this route can only be accessed with a refresh token
def refresh():
    current_user = get_jwt_identity()  # Get the identity of the user from the token
    new_access_token = create_access_token(identity=current_user)  # Create a new access token
    return jsonify(access_token=new_access_token), 200

# Login route
@app.route('/auth/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()

    if not user or user.password != data['password']:  # Ensure to hash the password in production
        return jsonify({"msg": "Bad credentials"}), 401

    # Create access token and refresh token
    access_token = create_access_token(identity=user.username)
    refresh_token = create_refresh_token(identity=user.username)

    return jsonify({
        "access_token": access_token,
        "refresh_token": refresh_token,
        "user": {
            "id": user.id,
            "username": user.username
        }
    }), 200

# Categories routes
# -----------------

# Add categories route
@app.route('/categories/add', methods=['POST'])
@jwt_required()
def save_categories():
    data = request.json
    user_identity = get_jwt_identity()
    user = User.query.filter_by(username=user_identity).first()

    if not user:
        return jsonify({"msg": "User not found"}), 404

    if 'category' in data:  # Check if 'category' is in the incoming data
        income_statement = IncomeStatement(user_id=user.id, category=data['category'], amount=0)  # Assuming a default amount of 0
        db.session.add(income_statement)
    else:
        return jsonify({"msg": "No category provided"}), 400  

    db.session.commit()
    return jsonify({"msg": "Category added successfully"}), 200

# Get categories route
@app.route('/categories', methods=['GET'])
@jwt_required()
def get_categories():
    user_identity = get_jwt_identity()
    user = User.query.filter_by(username=user_identity).first()

    if not user:
        return jsonify({"msg": "User not found"}), 404

    categories = IncomeStatement.query.filter_by(user_id=user.id).all()
    return jsonify([category.to_json() for category in categories]), 200

# Delete category route
@app.route('/categories/<int:category_id>', methods=['DELETE'])
@jwt_required()
def delete_category(category_id):
    user_identity = get_jwt_identity()
    user = User.query.filter_by(username=user_identity).first()

    if not user:
        return jsonify({"msg": "User not found"}), 404

    category = IncomeStatement.query.filter_by(user_id=user.id, id=category_id).first()

    if not category:
        return jsonify({"msg": "Category not found"}), 404

    db.session.delete(category)
    db.session.commit()

    return jsonify({"msg": "Category deleted successfully"}), 200

# Transactions routes
# -------------------

# Add transaction route
@app.route('/transactions/add', methods=['POST'])
@jwt_required()
def add_transaction():
    data = request.json
    user_identity = get_jwt_identity()
    user = User.query.filter_by(username=user_identity).first()

    if not user:
        return jsonify({"msg": "User not found"}), 404

    new_transaction = Transaction(
        user_id=user.id,
        description=data['description'],
        amount=data['amount'],
        category=data['category'],
        type=data['type'],
        date=data['date']
    )
    
    db.session.add(new_transaction)
    db.session.commit()

    return jsonify({"msg": "Transaction added successfully"}), 201

# Get transactions route
@app.route('/transactions', methods=['GET'])
@jwt_required()
def get_transactions():
    user_identity = get_jwt_identity()
    user = User.query.filter_by(username=user_identity).first()

    if not user:
        return jsonify({"msg": "User not found"}), 404

    transactions = Transaction.query.filter_by(user_id=user.id).all()
    return jsonify([transaction.to_json() for transaction in transactions]), 200

@app.route('/transactions/<int:transaction_id>', methods=['DELETE'])
@jwt_required()
def delete_transaction(transaction_id):
    user_identity = get_jwt_identity()
    user = User.query.filter_by(username=user_identity).first()

    if not user:
        return jsonify({"msg": "User not found"}), 404

    transaction = Transaction.query.filter_by(user_id=user.id, id=transaction_id).first()

    if not transaction:
        return jsonify({"msg": "Transaction not found"}), 404

    db.session.delete(transaction)
    db.session.commit()

    return jsonify({"msg": "Transaction deleted successfully"}), 200

# Get transactions and categories route (to be used on frontend to minimize API calls)
@app.route('/transactions-and-categories', methods=['GET'])
@jwt_required()
def get_user_data():
    user_identity = get_jwt_identity()
    user = User.query.filter_by(username=user_identity).first()

    if not user:
        return jsonify({"msg": "User not found"}), 404

    # Fetch transactions
    transactions = Transaction.query.filter_by(user_id=user.id).all()
    transaction_list = [transaction.to_json() for transaction in transactions]

    # Fetch categories
    categories = IncomeStatement.query.filter_by(user_id=user.id).all()
    category_list = [category.to_json() for category in categories]

    return jsonify({
        "transactions": transaction_list,
        "categories": category_list
    }), 200

# Initialize the database and run the app
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  
    app.run(debug=True)
