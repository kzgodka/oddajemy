import express from 'express';
import db from './dbConnection';
import middleware from './middleware';
import routes from './routes';

const app = express();

db.connect((err) => {
    if(err) {
        console.log(err);
    } 
    console.log('Database connected...');
})

middleware(app);

routes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if(err) {
        console.log(err);
    } else {
        console.log(`App listen to port: ${PORT}`)
    }
});