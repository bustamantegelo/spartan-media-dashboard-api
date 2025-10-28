import express from 'express';
import { getPhotoData } from '../controllers/photoController';


const router = express.Router();

router.get('/photo/:day', getPhotoData);

export default router;
