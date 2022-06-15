let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT ||8230;
const mongoUrl = "mongodb+srv://test:LuzDCTZz0jNz5NQ2@cluster0.xfudk.mongodb.net/ishop?retryWrites=true&w=majority";
const bodyParser = require('body-parser');
const cors = require('cors');

app.get('/',(req,res)=>{
    res.send("welcome uviiiii")
})

app.get('/home',(req,res)=>{
    db.collection('product').find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result)

    })
})



// Connection with db
MongoClient.connect(mongoUrl, (err, client) => {
    if (err) console.log(`Error while connecting`);
    db = client.db('ishop');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})