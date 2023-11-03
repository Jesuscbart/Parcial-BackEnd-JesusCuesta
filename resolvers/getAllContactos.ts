import { Request, Response } from "npm:express@4.18.2";
import ContactoModel from "../db/contacto.ts";

const getAllContactos = async (req: Request, res: Response) => {
 
  try {

    const contacto = await ContactoModel.populate;
    
    res.status(200).send({
        //dni: contacto.dni,
        //nombre_completo: contacto.nombre_completo,
  });
  } 
  catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
};

export default getAllContactos;
