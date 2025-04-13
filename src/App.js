import { useState } from "react";
import "./index.css"; // Make sure your styles are imported

export default function IPLBetCalculator() {
  const [teamAName, setTeamAName] = useState("Team A");
  const [teamBName, setTeamBName] = useState("Team B");
  const [oddsA, setOddsA] = useState(1.75);
  const [oddsB, setOddsB] = useState(3.0);
  const [betA, setBetA] = useState(500);
  const [betB, setBetB] = useState(null);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const calculatedBetB = (betA * oddsA) / oddsB;
    const totalStake = betA + calculatedBetB;
    const profitA = (betA * oddsA) - totalStake;
    const profitB = (calculatedBetB * oddsB) - totalStake;
    setBetB(calculatedBetB.toFixed(2));
    setResult({ totalStake: totalStake.toFixed(2), profitA: profitA.toFixed(2), profitB: profitB.toFixed(2) });
  };

  return (
    <div className="container mx-auto p-4 max-w-xl">
      <h1 className="text-xl font-bold mb-4">IPL Live Betting Profit Calculator</h1>
      <div className="card mb-4 p-4">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <input
              className="input p-2 border rounded-md"
              placeholder="Team A Name"
              value={teamAName}
              onChange={(e) => setTeamAName(e.target.value)}
            />
            <input
              className="input p-2 border rounded-md"
              placeholder="Team B Name"
              value={teamBName}
              onChange={(e) => setTeamBName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              className="input p-2 border rounded-md"
              type="number"
              step="0.01"
              value={oddsA}
              onChange={(e) => setOddsA(parseFloat(e.target.value))}
              placeholder="Team A Odds"
            />
            <input
              className="input p-2 border rounded-md"
              type="number"
              step="0.01"
              value={oddsB}
              onChange={(e) => setOddsB(parseFloat(e.target.value))}
              placeholder="Team B Odds"
            />
          </div>
          <input
            className="input p-2 border rounded-md"
            type="number"
            value={betA}
            onChange={(e) => setBetA(parseFloat(e.target.value))}
            placeholder="Team A Bet Amount"
          />
          <button
            className="button p-2 mt-4 bg-gray-200 rounded-md w-full"
            onClick={calculate}
          >
            Calculate
          </button>
        </div>
      </div>
      {result && (
        <div className="card p-4">
          <div className="space-y-2">
            <div><strong>Recommended Bet on {teamBName}:</strong> ₹{betB}</div>
            <div><strong>Total Stake:</strong> ₹{result.totalStake}</div>
            <div><strong>Profit if {teamAName} Wins:</strong> ₹{result.profitA}</div>
            <div><strong>Profit if {teamBName} Wins:</strong> ₹{result.profitB}</div>
          </div>
        </div>
      )}
    </div>
  );
}
