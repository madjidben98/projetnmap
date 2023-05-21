import express from "express";
import model from "./model.js";

const router = express.Router();

// Route POST pour recevoir les données de la requête
router.post("/routepost", async (req, res) => {
  try {
    // Récupérez les données envoyées depuis le frontend
    const { option, ipAddress } = req.body;

    // Créez une nouvelle instance du modèle resultat avec les données
    const resultat = new model({
      options: option,
      ipaddress: ipAddress,
      output: "Résultat de la requête",
    });

    // Enregistrer le résultat dans la base de données
    await resultat.save();

    // Envoie une réponse au frontend
    res.status(200).json({ message: "Requête reçue avec succès!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Une erreur s'est produite lors du traitement de la requête.",
    });
  }
});

// Route GET pour récupérer les données de l'historique
router.get("/routeget", async (req, res) => {
  try {
    // Récupérer toutes les données de l'historique à partir de la base de données
    const historiqueData = await model.find(
      {},
      { options: 1, ipaddress: 1, timestamp: 1 }
    );

    // Envoie les données de l'historique au frontend
    res.status(200).json(historiqueData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error:
        "Une erreur s'est produite lors de la récupération des données de l'historique.",
    });
  }
});

// Exportez le routeur
export default router;
