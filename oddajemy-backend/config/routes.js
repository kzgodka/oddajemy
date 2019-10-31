import db from "./dbConnection"

export default app => {
    app.post('/users', (req, res) => {
      //   db.query('SELECT * FROM users', (err, result) => {
      //     if(err) throw err;
      //     console.log(result);
      //     res.send('Fetched data...');
      // });
      res.json({message: 'test data fetch'});
    });
}