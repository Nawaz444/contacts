const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const router = require('./routes/index');

const app = express();
const client = new MongoClient('mongodb+srv://nawaz:nawaz444@cluster0.nirro.mongodb.net/contactsretryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); // middlewares
app.use(function (request, response, next) {
    request.mongoClient = client;
    return next();
});
app.use(router);

client.connect().then(function () {
    app.listen(3000, () => console.log('server started!'));
});
