
export default {
    port: process.env.PORT || 1234,
    logging: {
        level: process.env.LOGGING_LEVEL || 'info'
    },
    database: {
        connection: {
            host     : process.env.DB_HOST || '127.0.0.1',
            user     : process.env.DB_USER,
            password : process.env.DB_PASSWORD,
            database : process.env.DB_NAME,
            charset  : 'utf8'
        }
    }
};