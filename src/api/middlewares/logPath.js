import Logger from '../../utils/logger';

export default (req, res, next) => {
    Logger.info(req.path);
    next();
}