import mongoose from "mongoose";

const schemadb = new mongoose.Schema({
  options: { type: String }, // Options utilisées pour la requête
  output: { type: String }, // Sortie de la requête nmap
  timestamp: { type: Date, default: Date.now }, // date et l'heure à laquelle la requête a été effectuée
  ipaddress: { type: String },
});

export default schemadb;
