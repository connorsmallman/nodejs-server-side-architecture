import { Router } from 'express';
import videoRoutes from './routes/video';

export default () => {
    const app = Router();

    videoRoutes(app);

    return app;
}
