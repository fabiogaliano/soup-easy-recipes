import { useState } from 'react';
import Recipe from './Recipe';
import recipesData from './recipes-data';
import { ChevronLeft } from 'lucide-react';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="max-w-xl mx-auto p-4">
      {selectedRecipe ? (
        <div>
          <div className="border-b pb-6 mb-6">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="inline-flex items-center gap-2 p-2 text-orange-900 group"
            >
              <ChevronLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="text-lg border-b-2 border-orange-200">
                All Recipes
              </span>
            </button>
          </div>
          <Recipe recipe={selectedRecipe} />
        </div>
      ) : (
        <div className="space-y-4">
          <h1 className="text-3xl font-medium pb-6">Roasted Soups</h1>
          {recipesData.map((recipe) => (
            <button
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              className={`w-full p-6 border rounded text-left transition-all duration-200
                       hover:border-orange-200 hover:shadow-sm group
                       ${recipe.favorite ? 'border-l-4 border-l-orange-200' : ''}`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-xl group-hover:text-orange-900">
                  {recipe.title}
                </span>
                <span className="text-gray-600 text-sm">
                  {recipe.time} min roasting
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
