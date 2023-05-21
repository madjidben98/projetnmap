import React, { useState } from 'react';
import axios from 'axios';

function Requete() {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoie des données avec axios 
      const response = await axios.post('http://localhost:3001/route', {
        option: selectedOption,
        ipAddress: inputValue,
      });

      console.log("les donnée ont étées enregistrées"); 

      // Réinitialiser les valeurs des inputs
      setInputValue('');
      setSelectedOption('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="w-2/3 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Effectuer une requête</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 text-black"
          >
            <option value="">Sélectionner une option</option>
            <option value="nmap -sS">nmap -sS</option>
            <option value="nmap -sV">nmap -sV</option>
            <option value="nmap --max-retries 3 --host-timeout 5000">nmap --max-retries 3 --host-timeout 5000</option>
          </select>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Adresse IP"
            className="px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 text-black"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Requete;
