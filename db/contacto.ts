import mongoose from "npm:mongoose@7.6.3";
import { Contacto } from "../types.ts";

const Schema = mongoose.Schema; // Se crea un esquema de mongoose

const contactoSchema = new Schema(  // Se crea el esquema de mongoose
  {
    dni: { type: String, required: true, unique: true },  // Se define el campo dni de tipo String
    nombre_completo: { type: String, required: true },  // Se define el campo nombre_completo de tipo String
    email: { type: String, required: true },
    cp: { type: Number, required: true },
    iso: { type: String, required: true }
  },
  { timestamps: true }  
);

export type ContactoModelType = mongoose.Document & Omit<Contacto, "id">;

export default mongoose.model<ContactoModelType>("Contacto", contactoSchema);
