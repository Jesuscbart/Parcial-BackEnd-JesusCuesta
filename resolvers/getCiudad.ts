import { Request, Response } from "npm:express@4.18.2"; 
import formatCiudad from "../formatCiudad.ts"
import { Contacto, Ciudad } from "../types.ts";

const getCiudad = async (req: Request, res: Response) => {
    try {
        const iso = req.params.iso;
        const cp = req.params.cp

        
        const response = await fetch(   
            `https://zip-api.eu/api/v1/codes/postal_code=${iso}-${cp}`
        );
        if (response.status !== 200) {  //Si el estado de la respuesta no es 200 (no está correcto), devuelve el estado y el error
            res.status(response.status).send(response.statusText);
            return;
        }
        //Convierte la respuesta a un objeto JSON
        const ciudad: Ciudad = await response.json();

        res.send(formatCiudad(ciudad));
    } 
    catch (error) { //Si no encuentra el personaje, devuelve el error
        res.status(404).send(error.message);
        return;
    }
};

export default getCiudad;    //Exporto la función getCharacter


/*
export const getCiudad = async (
  iso: string,
  cp: number,
): Promise<Ciudad> => {
  const BASE_URL = "https://zip-api.eu/api/v1";
  const url = `${BASE_URL}/codes/postal_code/${iso}-${cp}`;
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error("Cannot fetch location");
  }

  const ciudad: Ciudad = await response.json();

  return {
    state: ciudad.state,

  };
};
*/