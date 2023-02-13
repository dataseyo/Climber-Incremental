// MONGODB DATABASE CONNECTION CONFIG
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

let dbConnection;

const db = async () => {
    try {
        const connect =  await client.connect()
        const db = connect.db("boulderinc")
        dbConnection = db.collection("users")
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
}

const getDb = () => {
    return dbConnection
}

export {
    db,
    getDb
}