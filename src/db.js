// import {createConnection} from 'mysql2/promise'

// export const conn = await  createConnection({
//     user: 'root',
//     password: 'xxx',
//     host: 'localhost',
//     port: 3306
// })

import { createPool } from 'mysql2/promise';
import { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } from './config.js';

export const pool = await createPool({
	user: DB_USER,
	password: DB_PASSWORD,
	host: DB_HOST,
	port: DB_PORT,
	database: DB_NAME
});
