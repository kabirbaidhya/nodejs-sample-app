import logger from '../foundation/logger';

export default function (req, res, next) {
    const {method, originalUrl} = req;

    logger.info(`${method.toUpperCase()} ${originalUrl}`);
    next();
}