import db from "./dbConnection"

export default app => {
    app.get('/users', (req, res) => {
        db.query('SELECT * FROM users', (err, result) => {
          if(err) throw err;
          console.log(result);
          res.send('Fetched data...');
      });
    });
}