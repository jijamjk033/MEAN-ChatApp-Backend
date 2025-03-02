import express from 'express';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import chatRoutes from './chatRoutes';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/chat', chatRoutes);

export default router;