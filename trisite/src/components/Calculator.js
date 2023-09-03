import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [per, setPer] = useState('');
  const [g, setG] = useState('');
  const [r, setR] = useState('');
  const [triResult, setTriResult] = useState('');

  const calculateTRI = () => {
    const perValue = parseFloat(per);
    const gValue = parseFloat(g) / 100; // Convert percentage to decimal
    const rValue = parseFloat(r) / 100; // Convert percentage to decimal

    const tri = 2 ** (Math.log((1 + gValue) / (1 + rValue)) / Math.log(perValue * ((gValue - rValue) / (1 + rValue)) + 1)) - 1;
    setTriResult((tri * 100).toFixed(2)); // Convert decimal to percentage and fix to 2 decimal places
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-header">Calcul automatique et instantanné du TRI</h2>
      <div className="input-group">
        <label>PER (Price Earnings Ratio)</label>
        <input type="text" value={per} onChange={(e) => setPer(e.target.value)} />
      </div>
      <div className="input-group">
        <label>g (Taux de croissance des bénéfices en %):</label>
        <input type="text" value={g} onChange={(e) => setG(e.target.value)} />
      </div>
      <div className="input-group">
        <label>r (Taux d'intérêt en %):</label>
        <input type="text" value={r} onChange={(e) => setR(e.target.value)} />
      </div>
      <button className="calculate-button" onClick={calculateTRI}>Calculer le TRI</button>
      {triResult && <p className="result">Résultat du TRI : {triResult}%</p>}
    </div>
  );
};

export default Calculator;
