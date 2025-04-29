import { useState } from 'react';

const responses = {
  'copd': '**Carrier Options for COPD with Spiriva:**\n- Liberty Bankers: Standard if no tobacco use\n- American Home Life: Standard\n- Lifeshield: Graded (decline if tobacco user)\n- GTL: Graded\n- Great Western: Graded if treated within 2 years\n- Royal Neighbors: Graded (Spiriva triggers graded)',

  'nitroglycerin': '**Carrier Options for Nitroglycerin (used once a year):**\n- Assurant: May go Level after underwriter review\n- Great Western: Graded\n- GTL: Graded\n- Liberty Bankers: Modified\n- Royal Neighbors / AHL: Level with explanation'
};

export default function RonnieReferenceAI() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    const input = query.toLowerCase();
    if (input.includes('copd')) {
      setResult(responses.copd);
    } else if (input.includes('nitroglycerin')) {
      setResult(responses.nitroglycerin);
    } else {
      setResult('No matching condition found yet. Try COPD or Nitroglycerin.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <img src="/ronnie-bitmoji.png" alt="Ronnie Bitmoji" className="w-24 mb-6" />
      <h1 className="text-2xl font-bold mb-2">Ronnie Reference AI</h1>
      <p className="text-gray-500 mb-4">Type a condition or medication to find carrier options</p>
      <div className="flex w-full max-w-md gap-2 mb-4">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g., COPD with Spiriva" className="flex-grow border rounded p-2" />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </div>
      {result && (
        <div className="bg-gray-100 p-4 rounded-xl text-gray-800 max-w-md whitespace-pre-line">{result}</div>
      )}
    </div>
  );
}