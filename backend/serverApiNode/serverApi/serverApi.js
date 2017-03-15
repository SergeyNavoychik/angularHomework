import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import * as db from './db/dbUtils'

const app = express();

db.setUpConnection();

app.use( bodyParser.json() );
app.use(cors({ origin: '*' }));


app.get('/products', (req, res) => {
    db.listProducts().then(data => res.send(data));
});

app.post('/products', (req, res) => {
    db.createProduct(req.body).then(data => res.send(data));
});
app.put('/products', (req, res) => {
    db.changeIsBuy(req.body).then(data => res.send(data));
});

app.delete('/deleteAllBought', (req, res) => {
    db.deleteAllBought().then(data => res.send(data));
});

app.delete('/products/:id', (req, res) => {
    db.deleteProduct(req.params.id).then(data => res.send(data));
});

const server = app.listen(8080, function() {
    console.log('Server is up and running on port 8080');
});