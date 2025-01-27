import React, { useState } from 'react';
import { Plus, Minus, ChevronDown, Image, Video, X } from 'lucide-react';

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
  const [selectedMedia, setSelectedMedia] = useState(null);

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
    <div>
      <div className="mb-6">
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium text-gray-800 mb-2">
            {recipe.title}
          </h1>
          <span className="text-sm text-gray-400">
            {recipe.time} min roasting
          </span>
        </div>
      </div>

      <div className="space-y-8">
        {/* Ingredients Section */}
        <div className="bg-gradient-to-r from-white via-orange-50/30 to-white px-6 py-5 -mx-6">
          <SectionHeader
            title="Ingredients"
            isOpen={showIngredients}
            onToggle={() => setShowIngredients(!showIngredients)}
          />
          {showIngredients && (
            <div className="space-y-2 text-gray-600 ml-7">
              {/* Main Ingredients */}
              <div className="space-y-2 pb-4">
                {recipe.ingredients
                  .filter((ing) => ing.isMainIngredient)
                  .map((ing, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="font-medium">{ing.name}</span>
                      <span className="text-orange-900/40 mx-1">·</span>
                      <span className="text-orange-900/40">{ing.amount}</span>
                    </div>
                  ))}
              </div>
              {/* Supplementary Ingredients */}
              <div className="space-y-2 pt-2 border-t border-orange-100">
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
                  className={`group px-4 py-2 rounded-full border transition-colors relative
                    ${
                      selectedExtras.includes(extra.id)
                        ? 'bg-orange-50 text-orange-900 border-orange-200 shadow-sm'
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
                className={`text-sm px-3 py-1.5 rounded-full border transition-colors
                  ${
                    showMeasurements
                      ? 'bg-orange-50 text-orange-900 border-orange-200 shadow-sm'
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
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
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
                      {step.media && step.media.length > 0 && (
                        <button
                          onClick={() => setSelectedMedia(step.media)}
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-50 hover:bg-orange-100 text-orange-900 transition-colors"
                        >
                          {step.media[0].type === 'video' ? (
                            <Video size={16} />
                          ) : (
                            <Image size={16} />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              ))}
              {garnishItems.length > 0 && (
                <li className="relative">
                  <div className="absolute left-[-20px] top-4 text-orange-900 font-medium text-sm">
                    {recipe.steps.length + 1}
                  </div>
                  <div className="p-4 border rounded">
                    <div className="text-lg">Add finishing touches</div>
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

      {/* Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-200"
            >
              <X size={24} />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              {selectedMedia[0].type === 'video' ? (
                <video
                  src={selectedMedia[0].url}
                  className="w-full aspect-video"
                  controls
                  autoPlay={false}
                />
              ) : (
                <img
                  src={selectedMedia[0].url}
                  alt={selectedMedia[0].alt}
                  className="w-full aspect-video object-cover"
                />
              )}
              <div className="p-4">
                <p className="text-gray-600">{selectedMedia[0].alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipe;
