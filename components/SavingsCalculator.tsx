"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SavingsCalculator() {
  const [vehicles, setVehicles] = useState(10);
  const [stops, setStops] = useState(30);
  const [costPerMile, setCostPerMile] = useState(3.5);
  const [results, setResults] = useState<null | {
    savings: string;
    miles: string;
  }>(null);
  const [errors, setErrors] = useState<string>("");

  const calculateSavings = () => {
    if (
      !vehicles ||
      vehicles < 1 ||
      !stops ||
      stops < 1 ||
      !costPerMile ||
      costPerMile < 0.01
    ) {
      setErrors("Please enter valid numbers for all fields");
      return;
    }

    setErrors("");

    const AVG_MILES_PER_STOP = 8;
    const WORKING_DAYS_PER_YEAR = 250;
    const CONSERVATIVE_IMPROVEMENT = 0.18;

    const totalDailyStops = vehicles * stops;
    const baselineDailyMiles = totalDailyStops * AVG_MILES_PER_STOP;
    const dailyMilesReduced = baselineDailyMiles * CONSERVATIVE_IMPROVEMENT;
    const annualMilesSaved = dailyMilesReduced * WORKING_DAYS_PER_YEAR;
    const annualCostSavings = annualMilesSaved * costPerMile;

    const savingsFormatted = annualCostSavings.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

    const milesFormatted = annualMilesSaved.toLocaleString("en-US", {
      maximumFractionDigits: 0,
    });

    setResults({ savings: savingsFormatted, miles: milesFormatted });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      calculateSavings();
    }
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Calculate Your Potential Savings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label
            htmlFor="vehicles"
            className="block text-sm font-medium text-slate-400 mb-2"
          >
            Number of Vehicles
          </label>
          <input
            id="vehicles"
            type="number"
            min="1"
            max="10000"
            value={vehicles}
            onChange={(e) => setVehicles(Number(e.target.value))}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
          />
        </div>

        <div>
          <label
            htmlFor="stops"
            className="block text-sm font-medium text-slate-400 mb-2"
          >
            Daily Stops per Vehicle
          </label>
          <input
            id="stops"
            type="number"
            min="1"
            max="500"
            value={stops}
            onChange={(e) => setStops(Number(e.target.value))}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
          />
        </div>

        <div>
          <label
            htmlFor="costPerMile"
            className="block text-sm font-medium text-slate-400 mb-2"
          >
            Cost per Mile (USD)
          </label>
          <input
            id="costPerMile"
            type="number"
            min="0.01"
            max="50"
            step="0.01"
            value={costPerMile}
            onChange={(e) => setCostPerMile(Number(e.target.value))}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
          />
        </div>
      </div>

      {errors && (
        <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-400 text-center">
          {errors}
        </div>
      )}

      <div className="flex justify-center mb-8">
        <button
          onClick={calculateSavings}
          className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg text-lg w-full md:w-auto"
        >
          Calculate Savings
        </button>
      </div>

      {results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-cyan-900/10 border-l-4 border-cyan-500 rounded-lg p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            Estimated Annual Savings
          </h3>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">
              {results.savings}
            </div>
            <div className="text-lg text-slate-400 mb-6">
              {results.miles} miles saved annually
            </div>
            <div className="text-sm text-slate-500 italic">
              Based on 18% average route optimization improvement
            </div>
            <div className="text-xs text-slate-600 mt-4">
              *Actual savings vary by network complexity, density, and
              constraints. Schedule a pilot for precise assessment.
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
