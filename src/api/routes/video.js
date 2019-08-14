import { Router } from 'express';
import Logger from '../../utils/logger';
import VideoService from '../../services/video';
import logPathMiddleware from '../middlewares/logPath.js';

const route = Router();

export default (app) => {
    app.use('/videos', route);

    route.get('/:name', logPathMiddleware, async (req, res) => {
        const video = await VideoService.getVideoByName(req.params.name);
        return res.json(video).status(200);
    });
}

