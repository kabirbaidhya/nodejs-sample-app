import logger from './logger';

const GENERAL_ERROR_MSG = 'An error occurred';

export function respond(req, res, result) {
    result
        .then(data => res.json(data))
        .catch(err => {
            const message = err.message || 'An error occurred';

            logger.error(message, err);
            res.status(err.status || 500).json({error: message});
        });
}
