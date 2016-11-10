import express from 'express';
import morgan from 'morgan';
import Promise from 'bluebird';
import routes from './routes';
import requestLogger from './middlewares/requestLogger';
import logger from './services/logger';

global.Promise = Promise;

let app = express();
const PORT = process.env.PORT || 3000;

app.use(requestLogger);
// Or use morgan instead for logging
// app.use(morgan('dev'));

logger.debug('This is just a test log for debugging');
logger.info('Application Environment: ' + process.env.NODE_ENV);

app.use(routes);
app.listen(PORT, () => logger.info(`Listening on port ${PORT}`));