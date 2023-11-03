import { Contacto, Ciudad } from "./types.ts";

//Función para dar formato a la ciudad (state)
const formatCiudad = (ciudad: Ciudad) => {

    return{
        ciudad: ciudad.state,   
    };
};
export default formatCiudad;    //Exporto la función formatLocation