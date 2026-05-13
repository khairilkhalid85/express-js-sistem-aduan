import type { Knex } from 'knex';
import dotenv from 'dotenv';
dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST||'wrong_localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3308,
      user: process.env.DB_USER||'root',
      password: process.env.DB_PASSWORD||'wrong_password',
      database: process.env.DB_NAME||'wrong_database',
    },
    migrations: {
      extension: 'ts', // Forces knex to look for .ts files
      directory: './migrations',
    },
  },
};

export default config;