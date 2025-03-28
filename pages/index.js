import { useState } from "react";
import Head from "next/head";
import AdBanner from '../components/AdBanner';

export default function Home() {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(true);
  const [passwords, setPasswords] = useState([]);
  
  const similarCharacters = ['l', 'I', '1', '|', 'o', '0', 'O'];

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (excludeSimilar) {
      chars = chars.split('').filter(c => !similarCharacters.includes(c)).join('');
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    return newPassword;
  };

  const generateMultiplePasswords = (count) => {
    const newPasswords = [];
    for (let i = 0; i < count; i++) {
      newPasswords.push(generatePassword());
    }
    setPasswords(newPasswords);
  };

  return (
    <>
      <Head>
        <title>Générateur de Mot de Passe Sécurisé</title>
        <meta name="description" content="Créez un mot de passe sécurisé et robuste en un clic." />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <AdBanner /> {}
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Générateur de Mot de Passe</h1>
        <div className="bg-white text-blue-500 p-6 rounded-lg shadow-lg w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-lg">Longueur : {length}</label>
            <input type="range" min="6" max="30" value={length} onChange={(e) => setLength(e.target.value)} className="w-full" />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label><input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} /> Majuscules</label>
            <label><input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} /> Minuscules</label>
            <label><input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} /> Chiffres</label>
            <label><input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} /> Symboles</label>
            <label><input type="checkbox" checked={excludeSimilar} onChange={() => setExcludeSimilar(!excludeSimilar)} /> Exclure caractères similaires</label>
          </div>
          <button onClick={() => setPasswords([generatePassword()])} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Générer un mot de passe</button>
          <button onClick={() => generateMultiplePasswords(5)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">Générer 5 mots de passe</button>
          {passwords.length > 0 && (
            <div className="mt-4">
              {passwords.map((password, index) => (
                <div key={index} className="p-2 bg-gray-200 rounded text-lg font-mono cursor-pointer mb-2" onClick={() => navigator.clipboard.writeText(password)}>
                  {password} <span className="text-sm">(Cliquez pour copier)</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
