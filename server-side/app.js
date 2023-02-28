
const cors = require('cors')
const express = require('express');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
    req.currentTime = new Date().toISOString();
    next();
})
const globalErrorHandler = require("./controllers/errorController")
const tutorailRout = require('./router/tutorailRout')
const userRout = require('./router/userRout')
app.use('/api/v1/tutorials',tutorailRout);
app.use('/api/v1/users',userRout);

module.exports = app;
