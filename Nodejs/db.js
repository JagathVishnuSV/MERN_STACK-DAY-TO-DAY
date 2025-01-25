//const mongodb = require('mongodb');
//const mongoClient = mongodb.MongoClient;
//let objectId = mongodb.ObjectId;

const mongse=require('mongoose')
let database;

async function getDatabase(){
    mongse.connect('mongodb://127.0.0.1:27017/temp').then(()=>{
        console.log("db connected...")
    })
    .catch(()=>{
        console.log('db error...')
    })
}
/*async function getDatabase(){                    //Connection string 
    const client = await mongoClient.connect('mongodb://127.0.0.1:27017');
    database = client.db('temp');
    if(!database){
        console.log('Database connected successfully');
    }
    else{
        console.error('Database connection failed');
        return database;
    }
}*/
module.exports = {getDatabase};
//module.exports = {getDatabase,ObjectId};