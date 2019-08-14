import expressLoader from './express';
import mongooseLoader from './mongoose';
import Logger from '../utils/logger';

import './events';

export default async ({ expressApp }) => {
  await mongooseLoader();
  Logger.info('DB loaded and connected!');

  await expressLoader({ app: expressApp });
  Logger.info('Express loaded');
};