import express from 'express';
import morgan from 'morgan';
import Promise from 'bluebird';
import routes from './routes';
import requestLogger from './middlewares/requestLogger';

global.Promise = Promise;

let app = express();
const PORT = process.env.PORT || 3000;

app.use(requestLogger);
// Or use morgan instead for logging
// app.use(morgan('dev'));

app.use(routes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));