// Import Mongodb
const MongoClient = require("mongodb").MongoClient

// Mongodb Connection String
// const url = "mongodb://localhost:27017/"
// let url = "mongodb://samit:123456@localhost:27017/"

let _db
let dbname = "smartinvdb"

// MongoDB Atlas
let url = "mongodb+srv://samit:smk377040@cluster0.fi3ys.mongodb.net/"+ dbname

const connectDb = (callback) => {
    if (_db) return callback()
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
        if (err) return console.log(err)
        _db = client.db(dbname) 
        console.log("Database Connected")
        callback()
    })
}

const getDb = () => _db

module.exports = {
    connectDb,
    getDb
}