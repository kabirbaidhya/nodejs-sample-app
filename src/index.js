import express from 'express';
import Promise from 'bluebird';

global.Promise = Promise;

let app = express();
let router = express.Router();

// Hello World
router.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

app.use(router);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));