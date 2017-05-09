require('dotenv').config();

module.exports = {
    development: {
        client: process.env.DB_CLIENT,
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        },
        migrations: {
            directory: './src/server/migrations'
        },
        seeds: {
            directory: './src/server/seeds'
        }
    }
};