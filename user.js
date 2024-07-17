const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'employee_db',
    password: 'Anmol@123',
    port: 5432,
});

client.connect();

async function createEmployee(fname, lname, city, email){
    const query = 'INSERT INTO employee_user(fname, lname, city, email) VALUES ($1, $2, $3) RETURNING *';
    const values = ['anmol', 'yagik', 'gr.noida', 'anmolyagik@gmail.com'];
    try{
        const res = await client.query(query, values);
        console.log('Employee created:', res.row[0]);
    }catch(err){
        console.log(err.stack);
    }
}

async function readEmployee(){
    const query = 'SELECT * FROM employee_user';
    try{
        const res = await client.query(query);
        console.log('All Employees:', res.rows);

    }catch (err) {
        console.error(err.stack);
    }
}
