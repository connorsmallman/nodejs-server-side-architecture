import VideoModel from '../models/video';
import Logger from '../utils/logger';
import dispatcher from './utils/dispatcher';

class VideoService {
    constructor(logger, eventDispatcher, VideoModel) {
        this.logger = logger;
        this.eventDispatcher = eventDispatcher;
        this.videoModel = VideoModel;
        
        // create video 
        const video = new VideoModel({ name: 'hello-world', url: 'test-url' });
        video.save(console.log);
    }

    async getVideoByName(name) {
        const video = await this.videoModel.findOne({ name });
        // some business logic
        this.logger.info('found video %s', video.toString());
        // dispatch events to other parts of the codebase
        this.eventDispatcher.publish('video', video._id.toString());

        return video;
    }
}

export default new VideoService(Logger, dispatcher, VideoModel);