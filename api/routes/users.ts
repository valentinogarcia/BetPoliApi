import { getUserByDNI,COLLECTION_USER,COLLECTION_REPORTER,collections } from "../utilities/DBFunctions";
import express,{ json } from "express";
import * as mongoDB from "mongodb";
import { user } from "../models/user";
export function userRoutes(app:any,db:mongoDB.Db){
app.post( '/users',async (_req:any,_res:any)=>{const usr=new user(_req.body.name,_req.body.hash,_req.body.email,_req.body.ciudad,_req.body.dni,_req.body.edad); _res.send( collections.user?.insertOne( usr ) ) } )
}