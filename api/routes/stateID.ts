import { getUserByID,COLLECTION_USER,COLLECTION_REPORTER,collections } from "../utilities/DBFunctions";
import express,{ json } from "express";
import * as mongoDB from "mongodb";
export function stateID(app:any,db:mongoDB.Db){
    app.post('/users/validate/id', async (_req:any,_res:any)=>{/*let COLLECTION_NAME:string; if(_req.body.type == "user"){ COLLECTION_NAME = COLLECTION_USER }else{COLLECTION_NAME=COLLECTION_REPORTER}*/  const id = _req.body.id ; const x = getUserByID(await db.collection(COLLECTION_USER).find().toArray(),id); x!.accept();_res.send(await collections.user?.findOneAndReplace( {"dni":x!.getDNI() },x! )); } )
    app.post('/users/invalidate/id',async (_req:any,_res:any) => { let COLLECTION_NAME:string; /*if(_req.body.type == "user"){ COLLECTION_NAME = COLLECTION_USER }else{COLLECTION_NAME=COLLECTION_REPORTER}*/;const id = _req.body.id ; const x = getUserByID(await db.collection(COLLECTION_USER).find().toArray(),id);x!.deny(); _res.send(await collections.user?.findOneAndReplace( {"dni":x!.getDNI() },x! ));  })
    app.post('/users/pend/id',async (_req:any,_res:any) => { let COLLECTION_NAME:string; if(_req.body.type == "user"){ COLLECTION_NAME = COLLECTION_USER }else{COLLECTION_NAME=COLLECTION_REPORTER};const id = _req.body.id ; const x = getUserByID(await db.collection(COLLECTION_USER).find().toArray(),id);x!.pend(); _res.send(await collections.user?.findOneAndReplace( {"dni":x!.getDNI() },x! ));  })
}