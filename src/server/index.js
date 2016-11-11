import express from 'express';
import morgan from 'morgan';
import Promise from 'bluebird';

import routes from './routes';
import config from './config/config';
import logger from './services/logger';
import requestLogger from './middlewares/requestLogger';

global.Promise = Promise;

let app = express();

app.use(requestLogger);
// Or use morgan instead for logging
// app.use(morgan('dev'));

logger.debug('Debug logs are enabled');
logger.info('Application Environment: ' + app.get('env'));

app.use(routes);
app.listen(config.port, () => logger.info(`Listening on port ${config.port}`));