import { getUserByDNI,COLLECTION_USER,COLLECTION_REPORTER,collections } from "../utilities/DBFunctions";
import express,{ json } from "express";
import * as mongoDB from "mongodb";
import { user } from "../models/user";
export function userRoutes(app:any,db:mongoDB.Db){
app.post( '/users',async (_req:any,_res:any)=>{
        /*
FOTODNI
DNI
FECHA DE NACIMIENTO
NOMBRE COMPLETO
EMAIL
DOMICILIO
STATE
*/
    const usr=new user(
        _req.body.nombreCompleto,
        _req.body.fotoDni,
        _req.body.email,
        _req.body.domicilio,
        _req.body.dni,
        _req.body.fechaDeNacimiento);
         if(_req.body.type =="user"){
             _res.send( collections.user?.insertOne( usr ) ) 
            } else {
                 _res.send(collections.periodista?.insertOne(usr)) 
                }
            } )
}


