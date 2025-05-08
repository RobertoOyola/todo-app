import pg from 'pg';
import { DB_HOST, DB_USER, DB_PORT, DB_DATABASE, DB_PASSWORD} from "./config.js";

export const dbClient = new pg.Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT,
    //solo para aws
    ssl: {
        rejectUnauthorized: false,
    }
});

/*
const client = await dbClient.connect();
const { rows } = await client.query("select now() as Fecha, 1 as DummyColumn")
console.log(rows[0])
client.release();
*/

//export { dbClient };