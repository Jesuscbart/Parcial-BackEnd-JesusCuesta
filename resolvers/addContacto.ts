import { Request, Response } from "npm:express@4.18.2";
import ContactoModel from "../db/contacto.ts";

const addContacto = async (req: Request, res: Response) => {
  try {
    const { dni, nombre_completo, email, cp, iso } = req.body;
    if (!dni || !nombre_completo || !email || !cp || !iso) {
      res.status(500).send("Missing data");     //Si falta algún dato. Error 500
      return;
    }

    const alreadyExists = await ContactoModel.findOne({ dni }).exec();
    if (alreadyExists) {
      res.status(400).send("Contact already exists");   //Contacto ya existe. Error 400
      return;
    }

    const newContacto = new ContactoModel({ dni, nombre_completo, email, cp, iso });
    await newContacto.save();

    res.status(200).send({
      id: newContacto._id.toString(),  
      name: newContacto.dni,
      age: newContacto.nombre_completo,
      dni: newContacto.email,
      cp: newContacto.cp,
      iso: newContacto.iso,   
    });
  } 
  catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addContacto;
