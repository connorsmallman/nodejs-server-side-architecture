import config from './config';
import express from 'express';
import Logger from './utils/logger';

async function startServer() {
  const app = express();

  /**
   * Import/Export can only be used in 'top-level code'
   * So we are using good old require.
   **/
  await require('./loaders').default({ expressApp: app });

  app.listen(config.port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }
    Logger.info(`Server listening on port: ${config.port}`);
  });
}

startServer();