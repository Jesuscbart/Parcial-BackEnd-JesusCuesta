import { Request, Response } from "npm:express@4.18.2";
import ContactoModel from "../db/contacto.ts";
import formatCiudad from "../formatCiudad.ts"
import { Contacto, Ciudad } from "../types.ts";

const getContacto = async (req: Request, res: Response) => {
  try {
    const { dni } = req.params;
    const contacto = await ContactoModel.findOne({ dni }).exec();
    if (!contacto) {
      res.status(404).send("Contact not found");
      return;
    }
    res.status(200).send({
      //id: contacto._id.toString(),  //No es necesairo mostrar el id
      dni: contacto.dni,
      nombre_completo: contacto.nombre_completo,
      email: contacto.email,
      cp: contacto.cp,

      //ciudad: getCiudad(contacto.iso, contacto.cp)
      //pais: contacto.pais,      //Pido el país a la API
      //hora: contacto.hora,      //Pido la hora a la API
      //clima: contacto.clima,    //Pido el clima a la API
    });
  } 
  catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getContacto;
