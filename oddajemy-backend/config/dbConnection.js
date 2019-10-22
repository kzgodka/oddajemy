import mysql from 'mysql';

  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'reborn123',
    database: 'oddajemy'
  });

  export default db;