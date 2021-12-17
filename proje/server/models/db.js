const {Pool,Client} = require('pg');

//const connectionstring = 'postgressql://postgres:Berat1243568@localhost:5432/SatisUygulamasi';

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'SatisUygulamasi',
    password: 'Berat1243568',
    port: 5432,
  })
client.connect().then(a=>console.log("oldu"+a)).catch(b=>console.log(b));







module.exports = client;
