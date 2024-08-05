-- database.sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    hello_balance INTEGER DEFAULT 0,
    usdt_balance INTEGER DEFAULT 0
);

CREATE TABLE invites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    friend_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (friend_id) REFERENCES users(id)
);
