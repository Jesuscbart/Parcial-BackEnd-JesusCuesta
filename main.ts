import express, { Request, Response } from "npm:express@4.18.2";  //Importo express
import mongoose from "npm:mongoose@7.6.3";  //Importo mongoose
import {load} from "https://deno.land/std@0.204.0/dotenv/mod.ts";   //Importo librería para acceder a mi .env

import addContacto from "./resolvers/addContacto.ts";
import deleteContacto from "./resolvers/deleteContacto.ts";
import getContacto from "./resolvers/getContacto.ts"
import getCiudad from "./resolvers/getCiudad.ts";


const env = await load();   //Cargo variables de entorno

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");  //Si no hay archivo .env, leo las variables del sistema operativo buscando MONGO_URL
if(!MONGO_URL){
    console.error("Debes definir la variable MONGO_URL");
    Deno.exit(1);
}

try{

    await mongoose.connect(MONGO_URL);   //Conecto a mongo
    console.info("Successfully connected to MongoDB");

    
    const app = express()   //Creo app
    app.use(express.json());    //Uso json

    app

    .post("/addContacto", addContacto)  //Añado contacto
    .delete("/deleteContacto/:dni", deleteContacto)  //Borro contacto
    .get("/getContacto/:dni" , getContacto) //Solo proporciona datos básicos
    .get("/getCiudad/:iso/:cp", getCiudad)  //Método get para obtener la ciudad a partir del CP y del ISO



    app.listen(3000, () => console.info("Listening on port 3000. API ready to use"));
}
catch(e){
    console.error(e);
}   

