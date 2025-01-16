const butternutRecipe = {
  id: "butternut",
  favorite: true,
  title: "Butternut Squash Soup",
  time: "40",
  ingredients: [
    { name: "butternut squash", amount: "1 (1.2kg)", isMainIngredient: true },
    { name: "onions", amount: "2", isMainIngredient: true },
    { name: "garlic", amount: "5 cloves (or as needed)", isMainIngredient: true },
    { name: "olive oil", amount: "3-4 tbsp", isMainIngredient: false },
    { name: "water", amount: "1.5L", isMainIngredient: false },
    { name: "salt", amount: "to taste", isMainIngredient: false },
    { name: "pepper", amount: "to taste", isMainIngredient: false },
  ],
  steps: [
    {
      id: "prep",
      text: "Cut {butternut squash} into cubes, quarter {onions}",
      ingredients: ["butternut squash", "onions"],
    },
    {
      id: "prep",
      text: "Trim the ends of {garlic} off; can roast with peel on.",
      ingredients: ["garlic"],
    },
    {
      id: "prep",
      text: "Place all vegetables on a tray.\nSeason with {olive oil}, {salt} and {pepper}.",
      ingredients: ["olive oil", "salt", "pepper"],
    },
    {
      id: "roast",
      text: "Roast at 200°C for 30 min",
      ingredients: [],
    },
    {
      id: "blend",
      text: "Add {water} and blend",
      ingredients: ["water"],
    },
  ],
  boosters: [
    {
      id: "chickpeas",
      name: "Chickpeas",
      instruction: "Rinse and roast or add directly, after blending",
      addAtStep: "roast",
    },
    {
      id: "spinach",
      name: "Spinach",
      instruction: "Add spinach while or after blending",
      addAtStep: "blend",
    },
  ],
};

const tomatoRecipe = {
  id: "tomato",
  favorite: false,
  title: "Tomato & Bell Pepper Soup",
  time: "30",
  ingredients: [
    { name: "tomatoes", amount: "8 large", isMainIngredient: true },
    { name: "bell peppers", amount: "3", isMainIngredient: true },
    { name: "onions", amount: "2", isMainIngredient: true },
    { name: "garlic", amount: "5 cloves (or as needed)", isMainIngredient: true },
    { name: "olive oil", amount: "3-4 tbsp", isMainIngredient: false },
    { name: "water", amount: "1.5L", isMainIngredient: false },
    { name: "salt", amount: "to taste", isMainIngredient: false },
    { name: "pepper", amount: "to taste", isMainIngredient: false },
  ],
  steps: [
    {
      id: "prep",
      text: "Quarter {tomatoes}, {bell peppers} and {onions}.",
      ingredients: ["tomatoes", "bell peppers", "onions"],
    },
    {
      id: "prep",
      text: "Trim the ends of {garlic} off; can roast with peel on.",
      ingredients: ["garlic"],
    },
    {
      id: "prep",
      text: "Place all vegetables on a tray.\nSeason with {olive oil}, {salt} and {pepper}.",
      ingredients: ["olive oil", "salt", "pepper"],
    },
    {
      id: "roast",
      text: "Roast at 200°C for 30 min",
      ingredients: [],
    },
    {
      id: "blend",
      text: "Add {water} and blend",
      ingredients: ["water"],
    },
  ],
  boosters: [
    {
      id: "carrots",
      name: "Carrots",
      instruction: "Add chunked carrots to roasting tray",
      addAtStep: "roast",
    },
    {
      id: "lentils",
      name: "Lentils",
      instruction: "Add after blending",
      addAtStep: "blend",
    },
  ],
};

const beetRecipe = {
  id: "beet",
  title: "Beet & Carrot Soup",
  time: "40",
  ingredients: [
    { name: "beets", amount: "4 medium (500g)", isMainIngredient: true },
    { name: "carrots", amount: "6 large (500g)", isMainIngredient: true },
    { name: "onions", amount: "2", isMainIngredient: true },
    { name: "garlic", amount: "1 head", isMainIngredient: false },
    { name: "olive oil", amount: "3-4 tbsp", isMainIngredient: false },
    { name: "water", amount: "1.5L", isMainIngredient: false },
    { name: "salt", amount: "to taste", isMainIngredient: false },
    { name: "pepper", amount: "to taste", isMainIngredient: false },
  ],
  steps: [
    {
      id: "prep",
      text: "Cut {beets} and {carrots} into chunks",
      ingredients: ["beets", "carrots"],
    },
    {
      id: "add",
      text: "Quarter {onions}, add {garlic}",
      ingredients: ["onions", "garlic"],
    },
    {
      id: "season",
      text: "Season with {olive oil}, {salt}, {pepper}",
      ingredients: ["olive oil", "salt", "pepper"],
    },
    {
      id: "roast",
      text: "Roast at 200°C for 40 min",
      ingredients: [],
    },
    {
      id: "blend",
      text: "Add {water} and blend until smooth",
      ingredients: ["water"],
    },
  ],
  boosters: [
    {
      id: "parsnips",
      name: "Parsnips",
      instruction: "Add chunked parsnips to roasting tray",
      addAtStep: "roast",
    },
    {
      id: "beans",
      name: "White Beans",
      instruction: "Add one can of drained white beans",
      addAtStep: "blend",
    },
    {
      id: "walnuts",
      name: "Walnuts",
      instruction:
        "Break them into small pieces and sprinkle on top. Toast them for extra flavour",
      addAtStep: "finish",
    },
  ],
}

const recipesData = [butternutRecipe, tomatoRecipe];

export default recipesData;
