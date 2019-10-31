import express from 'express';
import db from './dbConnection';
import middleware from './middleware';
// import routes from './routes';

const app = express();

db.connect((err) => {
    if(err) {
        console.log(err);
    } 
    console.log('Database connected...');
})

middleware(app);

// routes(app);
// app.get('/users', (req, res) => {
// //     db.query('SELECT * FROM users', (err, result) => {
// //       if(err) throw err;
// //       console.log(result);
// //       res.send('Fetched data...');
// //   });

// res.send({message: 'test data fetch'});
// });

app.post('/users', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    db.query('SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password], (err, row, field, result) => {
      if(err) {
          console.log(err);
          res.json({'success': false, 'message': 'Could not connect to database'})
      } 

      if(row.length > 0) {
          res.json({'success': true, 'user': row[0].username})
      } else {
        res.json({ 'success': false, 'message': 'User not found' });
      }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if(err) {
        console.log(err);
    } else {
        console.log(`App listen to port: ${PORT}`)
    }
});