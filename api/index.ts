import express,{ json } from "express";
import * as mongoDB from "mongodb";
import { user } from "./models/user";
import { connectToDatabase,collections,DocumentsToUsers } from "./utilities/DBFunctions";
import { ObjectId } from "mongodb";
import { stateID } from "./routes/stateID";
import { stateDNI } from "./routes/stateDNI";
import { userRoutes } from "./routes/users";
const app = express();
app.use(express.json());
const port = 3000;





async function main() {
    const db:mongoDB.Db =await  connectToDatabase();
    app.get('/', async (_req,_res)=> { _res.send(await DocumentsToUsers( db ) ) } );
    stateID( app,db )
    stateDNI(app,db)
    userRoutes(app,db)
    app.listen(port, () => console.log(`Escuchando en el puerto ${port}!`));
}
main();