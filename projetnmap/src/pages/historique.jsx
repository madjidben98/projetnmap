import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

function HistoriquePage() {
  const [historiqueData, setHistoriqueData] = useState([]);

  useEffect(() => {
    // Effectue une requête au backend pour récupérer les données de l'historique
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/route');

        // Met à jour les données de l'historique avec les données récupérées du backend
        setHistoriqueData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Historique</h1>
      <Link href="/">Retour</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Options</th>
            <th>Adresse IP</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {historiqueData.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.options}</td>
              <td>{item.ipaddress}</td>
              <td>{item.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoriquePage;
