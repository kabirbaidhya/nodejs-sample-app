import winston from 'winston';

const logger = new (winston.Logger)({
    transports: [
        new winston.transports.Console({colorize: true})
    ]
});

logger.level = process.env.LOGGING_LEVEL || 'info';

export default logger;