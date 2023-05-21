import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./route.js";

const app = express();
const PORT = 3001;

// Connexion à la base de données MongoDB
mongoose
  .connect("mongodb://127.0.0.1/db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("relation avec la base reussie");
    app.listen(PORT, () => {
      console.log(`Écoute sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erreur:", error);
  });

const corsOptions = {
  origin: "http://localhost:3000",
};

// Middleware 
app.use(express.json());
app.use(cors(corsOptions));
app.use(route);

export default app;
