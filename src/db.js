import pg from 'pg';

export const dbClient = new pg.Pool({
    host: 'roberto-todo.cbuucgiqsve2.us-west-2.rds.amazonaws.com',
    user: 'postgres',
    password: 'Password.123',
    database: 'todo',
    port: 5432,
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