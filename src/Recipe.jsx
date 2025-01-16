import React, { useState } from 'react';
import { ChevronLeft, Plus, Minus, ChevronDown } from 'lucide-react';



const SectionHeader = ({ title, isOpen, onToggle }) => (
  <button
    onClick={onToggle}
    className="flex items-center gap-2 text-orange-900 mb-4 hover:text-orange-800"
  >
    <ChevronDown
      size={20}
      className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
    />
    <span className="font-medium">{title}</span>
  </button>
);

const Recipe = ({ recipe }) => {
  const [showIngredients, setShowIngredients] = useState(true);
  const [showOptional, setShowOptional] = useState(true);
  const [showSteps, setShowSteps] = useState(true);
  const [selectedBoosters, setSelectedBoosters] = useState([]);
  const [showMeasurements, setShowMeasurements] = useState(true);

  const toggleBooster = (id) => {
    setSelectedBoosters((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const renderStepText = (step) => {
    let text = step.text;
    step.ingredients.forEach((ing) => {
      const regex = new RegExp(`(${ing.name})`, 'gi');
      const replacement =
        ing.amount && showMeasurements
          ? `<span class="border-b-2 border-orange-200">${ing.name}</span><span class="text-orange-900/40 mx-1">·</span><span class="text-orange-900/40">${ing.amount}</span>`
          : `<span class="border-b-2 border-orange-200">${ing.name}</span>`;
      text = text.replace(regex, replacement);
    });
    return text;
  };

  const getStepBoosters = (stepId) => {
    return recipe.boosters.filter(
      (booster) =>
        booster.addAtStep === stepId && selectedBoosters.includes(booster.id)
    );
  };

  return (
    <div className="border rounded">
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-medium">{recipe.title}</h1>
          <span className="text-gray-600">{recipe.time} min roasting</span>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Ingredients Section */}
        <div>
          <SectionHeader
            title="Ingredients"
            isOpen={showIngredients}
            onToggle={() => setShowIngredients(!showIngredients)}
          />
          {showIngredients && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 ml-7">
              {recipe.ingredients.map((ing, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="border-b-2 border-orange-200">
                    {ing.name}
                  </span>
                  <span className="text-orange-900/40 mx-1">·</span>
                  <span>{ing.amount}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Optional Section */}
        <div>
          <SectionHeader
            title="Optional"
            isOpen={showOptional}
            onToggle={() => setShowOptional(!showOptional)}
          />
          {showOptional && (
            <div className="flex flex-wrap gap-2 ml-7">
              {recipe.boosters.map((booster) => (
                <button
                  key={booster.id}
                  onClick={() => toggleBooster(booster.id)}
                  className={`group px-4 py-2 rounded border transition-colors relative
                    ${
                      selectedBoosters.includes(booster.id)
                        ? 'bg-orange-50 text-orange-900 border-orange-200'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                >
                  <span className="flex items-center gap-2">
                    {selectedBoosters.includes(booster.id) ? (
                      <Minus size={16} className="text-orange-900/60" />
                    ) : (
                      <Plus
                        size={16}
                        className="opacity-40 group-hover:opacity-100"
                      />
                    )}
                    {booster.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Steps Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <SectionHeader
              title="Steps"
              isOpen={showSteps}
              onToggle={() => setShowSteps(!showSteps)}
            />
            {showSteps && (
              <button
                onClick={() => setShowMeasurements(!showMeasurements)}
                className={`text-sm px-3 py-1 rounded border transition-colors
                  ${
                    showMeasurements
                      ? 'bg-orange-50 text-orange-900 border-orange-200'
                      : 'bg-white text-gray-600 border-gray-200'
                  }`}
              >
                {showMeasurements ? 'Hide measures' : 'Show measures'}
              </button>
            )}
          </div>

          {showSteps && (
            <ol className="space-y-4 ml-7">
              {recipe.steps.map((step, idx) => (
                <li key={step.id} className="p-4 border rounded">
                  <div
                    className="text-lg"
                    dangerouslySetInnerHTML={{
                      __html: `${idx + 1}. ${renderStepText(step)}`,
                    }}
                  />
                  {getStepBoosters(step.id).map((booster) => (
                    <div
                      key={booster.id}
                      className="ml-6 mt-2 p-3 bg-orange-50 text-orange-900 border border-orange-100 rounded"
                    >
                      + {booster.instruction}
                    </div>
                  ))}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
