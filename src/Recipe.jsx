import React, { useState } from 'react';
import { Plus, Minus, ChevronDown } from 'lucide-react';

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
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [showMeasurements, setShowMeasurements] = useState(true);

  const toggleExtra = (id) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const renderStepText = (step) => {
    let text = step.text;
    const ingredientMap = Object.fromEntries(
      recipe.ingredients.map((ing) => [ing.name, ing])
    );

    step.ingredients.forEach((ingName) => {
      const ing = ingredientMap[ingName];
      if (ing) {
        const regex = new RegExp(`{${ingName}}`, 'g');
        const replacement = showMeasurements
          ? `<span class="border-b-2 border-orange-200">${ing.name}</span><span class="text-orange-900/40 mx-1">·</span><span class="text-orange-900/40">${ing.amount}</span>`
          : `<span class="border-b-2 border-orange-200">${ing.name}</span>`;
        text = text.replace(regex, replacement);
      }
    });

    // Replace newlines with <br/> tags
    text = text.replace(/\n/g, '<br/>');
    return text;
  };

  const getStepExtras = (stepId) => {
    return recipe.boosters.filter(
      (extra) => extra.addAtStep === stepId && selectedExtras.includes(extra.id)
    );
  };

  const garnishItems = recipe.boosters.filter(
    (extra) => extra.addAtStep === 'finish' && selectedExtras.includes(extra.id)
  );

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
            <div className="space-y-2 text-gray-600 ml-7">
              {/* Main Ingredients */}
              {recipe.ingredients
                .filter((ing) => ing.isMainIngredient)
                .map((ing, idx) => (
                  <div key={idx} className="flex gap-2">
                    <span>{ing.name}</span>
                    <span className="text-orange-900/40 mx-1">·</span>
                    <span className="text-orange-900/40">{ing.amount}</span>
                  </div>
                ))}
              {/* Separator */}
              <div className="h-4" />
              {/* Supplementary Ingredients */}
              {recipe.ingredients
                .filter((ing) => !ing.isMainIngredient)
                .map((ing, idx) => (
                  <div key={idx} className="flex gap-2">
                    <span>{ing.name}</span>
                    <span className="text-orange-900/40 mx-1">·</span>
                    <span className="text-orange-900/40">{ing.amount}</span>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Optional Extras Section */}
        <div>
          <SectionHeader
            title="Optional Extras"
            isOpen={showOptional}
            onToggle={() => setShowOptional(!showOptional)}
          />
          {showOptional && (
            <div className="flex flex-wrap gap-2 ml-7">
              {recipe.boosters.map((extra) => (
                <button
                  key={extra.id}
                  onClick={() => toggleExtra(extra.id)}
                  className={`group px-4 py-2 rounded border transition-colors relative
                    ${
                      selectedExtras.includes(extra.id)
                        ? 'bg-orange-50 text-orange-900 border-orange-200'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                >
                  <span className="flex items-center gap-2">
                    {selectedExtras.includes(extra.id) ? (
                      <Minus size={16} className="text-orange-900/60" />
                    ) : (
                      <Plus
                        size={16}
                        className="opacity-40 group-hover:opacity-100"
                      />
                    )}
                    {extra.name}
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
                <li key={step.id} className="relative">
                  <div className="absolute left-[-20px] top-4 text-orange-900 font-medium text-sm">
                    {idx + 1}
                  </div>
                  <div className="p-4 border rounded">
                    <div
                      className="text-lg"
                      dangerouslySetInnerHTML={{
                        __html: renderStepText(step),
                      }}
                    />
                    {getStepExtras(step.id).map((extra) => (
                      <div
                        key={extra.id}
                        className="mt-2 p-3 bg-orange-50 text-orange-900 border border-orange-100 rounded"
                      >
                        + {extra.instruction}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
              {garnishItems.length > 0 && (
                <li className="relative">
                  <div className="absolute left-[-20px] top-4 text-orange-900 font-medium text-sm">
                    {recipe.steps.length + 1}
                  </div>
                  <div className="p-4 border rounded">
                    <div className="text-lg">Add the finishing touches</div>
                    {garnishItems.map((extra) => (
                      <div
                        key={extra.id}
                        className="mt-2 p-3 bg-orange-50 text-orange-900 border border-orange-100 rounded"
                      >
                        + {extra.instruction}
                      </div>
                    ))}
                  </div>
                </li>
              )}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
