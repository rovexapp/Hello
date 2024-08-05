# app.py
from flask import Flask, render_template, jsonify, request
import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/user', methods=['GET'])
def get_user():
    # Fetch user data from database
    username = "User"
    hello_balance = 1000
    usdt_balance = 500
    return jsonify({
        "username": username,
        "hello_balance": hello_balance,
        "usdt_balance": usdt_balance
    })

@app.route('/api/click', methods=['POST'])
def click():
    # Handle click logic
    return jsonify({"status": "success"})

@app.route('/api/invite', methods=['POST'])
def invite():
    # Handle invite logic
    return jsonify({"status": "success"})

@app.route('/api/trade', methods=['POST'])
def trade():
    data = request.json
    amount = data.get('amount')
    action = data.get('action')
    # Handle trade logic
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)
