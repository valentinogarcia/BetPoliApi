import * as mongoDB from "mongodb";
import { user } from "../models/user";
import { ObjectId } from "mongodb";
export const DB_CONN_STRING="mongodb://localhost:27017"
export const DB_NAME="api-apuestas"
export const COLLECTION_USER="usuarios"
export const COLLECTION_REPORTER="periodistas"

export const collections: { user?: mongoDB.Collection } = {}
export async function DocumentsToUsers( db:mongoDB.Db):Promise<user[]> {
    const col = await db.collection(COLLECTION_USER).find().toArray();
    let users:user[]=[];
    col.forEach(data => {
        console.log(data._id);
        try {
            const usr=new user(data.name,data.string,data.email,data.ciudad,data.dni,data.edad)
            usr.state=data.state
            users.push( usr );
        } catch (error) {
            
        }
    });
    return users;
}
export async function connectToDatabase () {  
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(DB_CONN_STRING);
    
    await client.connect();
    
    const db: mongoDB.Db = client.db(DB_NAME);
    const paisesCollection: mongoDB.Collection = db.collection(COLLECTION_USER);
    collections.user = paisesCollection;
    
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${paisesCollection.collectionName}`);
    return db;
}

export function getUserByID(col:mongoDB.WithId<mongoDB.BSON.Document>[],id:any):user {
    let rt:user
    col.forEach( usr => {
        console.log( new ObjectId(usr._id)==id);
        if(usr._id == id){ const x = new user( usr.name,usr.hash,usr.email,usr.ciudad,usr.dni,usr.edad );rt = x;
        ;  }
    });
    return rt!;
}
export function getUserByDNI(col:mongoDB.WithId<mongoDB.BSON.Document>[],dni:any):user{
    let rt:user
    col.forEach( usr => {
        console.log( usr.dni==dni);
        if(usr.dni == dni){ const x = new user( usr.name,usr.hash,usr.email,usr.ciudad,usr.dni,usr.edad );rt = x;
        ;  }
    });
    return rt!; 
}