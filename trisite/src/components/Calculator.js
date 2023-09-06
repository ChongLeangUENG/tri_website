import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [per, setPer] = useState('');
  const [g, setG] = useState('');
  const [r, setR] = useState('');
  const [triResult, setTriResult] = useState('');
  const [drResult, setDRResult] = useState('');

  const calculateTRI = () => {
    const perValue = parseFloat(per);
    const gValue = parseFloat(g) / 100; // Convert percentage to decimal
    const rValue = parseFloat(r) / 100; // Convert percentage to decimal

    const tri = 2 ** (Math.log((1 + gValue) / (1 + rValue)) / Math.log(perValue * ((gValue - rValue) / (1 + rValue)) + 1)) - 1;
    setTriResult((tri * 100).toFixed(2)); // Convert decimal to percentage and fix to 2 decimal places

    const dr = (Math.log(perValue * ((gValue - rValue) / (1 + rValue)) + 1)) / (Math.log((1 + gValue) / (1 + rValue)));
    setDRResult(dr.toFixed(2)); // Display DR as a general number with 4 decimal places
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-header">Calcul instantané <br /> du Délai de Recouvrement (DR) <br /> et du Taux de Rentabilité Interne (TRI)</h2>
      <div className="input-group">
        <label>PER (Price Earnings Ratio)</label>
        <input type="text" value={per} onChange={(e) => setPer(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Taux de croissance des bénéfices (en %)</label>
        <input type="text" value={g} onChange={(e) => setG(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Taux d'intérêt (en %)</label>
        <input type="text" value={r} onChange={(e) => setR(e.target.value)} />
      </div>
      <button className="calculate-button" onClick={calculateTRI}>Résultats</button>
      {drResult && <p className="result">DR = {drResult}</p>}
      {triResult && <p className="result">TRI = {triResult}%</p>}
    </div>
  );
};

export default Calculator;
