import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Resultat() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    //je n'es pas reussie a mettre en place la fonction exec pour executer les commandes nmap 
    // Fonction pour récupérer les résultats des commandes depuis le backend
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://localhost:3001/route');
        setResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="w-2/3 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Résultats des commandes</h2>
        {results.length === 0 ? (
          <p>Aucun résultat disponible</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Commande</th>
                <th className="py-2">Résultat</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result._id}>
                  <td className="py-2">{result.command}</td>
                  <td className="py-2">{result.output}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Resultat;