import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import connectDB from './config/db';
import { setupSocket } from './helpers/socket';
import router from './routes/routes';
import passport from 'passport';
import session from 'express-session';
import './helpers/googleAuth';

const PORT = process.env.PORT || 5000;
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOption = {
    origin: process.env.Frontend_URL,
    optionsSuccessStatus: 200,
};

app.use(session({
    secret: process.env.SESSION_SECRET || 'supersecretkey',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
    },
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOption));
app.use('/api', router)

connectDB();
const server = http.createServer(app);
setupSocket(server);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});