// server.js

const express = require('express');
const connectDB = require('./db');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const app = express();

app.use(express.json());

app.post('/register', async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Invalid Data' });
    }

    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user.password = hash;

    await user.save();

    return res.status(201).json({ message: 'User Created Successfully', user });
});

app.get('/', (req, res) => {
    const obj = {
        name: 'Ayman',
        email: 'ayman@example.com',
    };
    res.json(obj);
});

app.listen(4000, () => {
    console.log("I'm listening on port 4000");
});

connectDB('mongodb://localhost:27017/attendance-db')
    .then(() => {
        console.log('Database Connected');
        app.listen(4000, () => {
            console.log("I'm listening on port 4000");
        });
    })
    .catch((e) => console.log(e));
