require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('./auth/auth');


const quotesRoutes = require('./routes/api/quotes');
const usersRoutes = require('./routes/api/users');
const authRoutes = require('./routes/api/auth');
const phasesRoutes = require('./routes/api/phases');
const moodsRoutes = require('./routes/api/moods');

const port = process.env.PORT || 3000;

// Middleware
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ 
        mongoUrl: process.env.MONGO_URI,
        dbName: process.env.MONGO_DB_NAME
    })
}));
app.use(express.urlencoded({ extended: false }))
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
app.use(express.json());


// PassportJS
app.use(passport.initialize());
app.use(passport.session());


// Connect to Database
connectDB();

// Routes
app.use('/api', moodsRoutes)
app.use('/api', phasesRoutes)
app.use('/api', quotesRoutes)
app.use('/api', usersRoutes)
app.use('/api', authRoutes)


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})
