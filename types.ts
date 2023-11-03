export type Contacto = {    //Tipo de dato Contacto
    dni: string;
    nombre_completo: string;
    email: string;
    cp: number;
    iso: string;
    ciudad: Ciudad;
    pais: string;
    hora: string;
    clima: string;
  };

  export type Ciudad = {    //Tipo de dato ciudad
    state: string;
  }
