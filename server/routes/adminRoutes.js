import express from 'express';
import { adminLogin, approvedCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboardData } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';

const adminRouter = express.Router();

adminRouter.post('/login', adminLogin);
adminRouter.get('/comments', auth, getAllComments);
adminRouter.get('/blogs', auth, getAllBlogsAdmin);
adminRouter.post('/delete-comment', auth, deleteCommentById);
adminRouter.post('/approved-comment', auth, approvedCommentById);
adminRouter.get('/dashboard', auth, getDashboardData);

export default adminRouter;