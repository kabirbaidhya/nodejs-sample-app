import express from 'express';
import morgan from 'morgan';
import Promise from 'bluebird';

global.Promise = Promise;

let app = express();
let router = express.Router();

// Hello World
router.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(router);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));