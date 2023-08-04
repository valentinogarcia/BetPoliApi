import { getUserByDNI,COLLECTION_USER,COLLECTION_REPORTER,collections } from "../utilities/DBFunctions";
import express,{ json } from "express";
import * as mongoDB from "mongodb";
export function stateDNI(app:any,db:mongoDB.Db){
app.post('/users/validate/dni', async (_req:any,_res:any)=>{let COLLECTION_NAME:string; if(_req.body.type == "user"){ COLLECTION_NAME = COLLECTION_USER }else{COLLECTION_NAME=COLLECTION_REPORTER} const dni = _req.body.dni ; const x = getUserByDNI(await db.collection(COLLECTION_USER).find().toArray(),dni); x!.accept();_res.send(await collections.user?.findOneAndReplace( {"dni":x!.getDNI() },x! )); } )
app.post('/users/invalidate/dni',async (_req:any,_res:any) => {let COLLECTION_NAME:string; if(_req.body.type == "user"){ COLLECTION_NAME = COLLECTION_USER }else{COLLECTION_NAME=COLLECTION_REPORTER} const dni = _req.body.dni ; const x = getUserByDNI(await db.collection(COLLECTION_USER).find().toArray(),dni);x!.deny(); _res.send(await collections.user?.findOneAndReplace( {"dni":x!.getDNI() },x! ));  })
app.post('/users/pend/dni',async (_req:any,_res:any) => {let COLLECTION_NAME:string; if(_req.body.type == "user"){ COLLECTION_NAME = COLLECTION_USER }else{COLLECTION_NAME=COLLECTION_REPORTER} const dni = _req.body.dni ; const x = getUserByDNI(await db.collection(COLLECTION_USER).find().toArray(),dni);x!.pend(); _res.send(await collections.user?.findOneAndReplace( {"dni":x!.getDNI() },x! ));  })
app.post('/users/state/dni',async (_req:any,_res:any) => { const dni = _req.body.dni as number;try {
    _res.send( (await collections.user?.findOne( {"dni":dni} )) )} catch (error) { console.log(" Eso no es un número, ponelo sin comillas ");
     } }
    )
}