const butternutRecipe = {
  id: "butternut",
  title: "Butternut Squash Soup",
  time: "40",
  ingredients: [
    { name: "butternut squash", amount: "1 (1.2kg)" },
    { name: "onions", amount: "2" },
    { name: "garlic", amount: "1 head" },
    { name: "olive oil", amount: "3-4 tbsp" },
    { name: "water", amount: "1.5L" },
    { name: "salt", amount: "to taste" },
    { name: "pepper", amount: "to taste" },
  ],
  steps: [
    {
      id: "prep",
      text: "Cut squash into cubes, quarter onions",
      ingredients: [
        { name: "butternut squash", amount: "1.2kg" },
        { name: "onions", amount: "2" },
      ],
    },
    {
      id: "roast",
      text: "Roast at 180°C for 40 min",
      ingredients: [],
    },
    {
      id: "blend",
      text: "Add hot water and blend",
      ingredients: [{ name: "water", amount: "1.5L" }],
    },
  ],
  boosters: [
    {
      id: "chickpeas",
      name: "Chickpeas",
      instruction: "Add drained chickpeas to roasting tray",
      addAtStep: "roast",
    },
    {
      id: "spinach",
      name: "Spinach",
      instruction: "Add spinach while blending",
      addAtStep: "blend",
    },
  ],
};

const tomatoRecipe = {
  id: "tomato",
  title: "Tomato & Bell Pepper Soup",
  time: "30",
  ingredients: [
    { name: "tomatoes", amount: "8 large" },
    { name: "bell peppers", amount: "3" },
    { name: "onions", amount: "2" },
  ],
  steps: [
    {
      id: "prep",
      text: "Quarter tomatoes and peppers",
      ingredients: [
        { name: "tomatoes", amount: "8" },
        { name: "bell peppers", amount: "3" },
      ],
    },
    {
      id: "roast",
      text: "Roast at 200°C for 30 min",
      ingredients: [],
    },
  ],
  boosters: [
    {
      id: "carrots",
      name: "Carrots",
      instruction: "Add chunked carrots to roasting tray",
      addAtStep: "roast",
    },
  ],
};

const beetRecipe = {
  id: "beet",
  title: "Beet & Carrot Soup",
  time: "40",
  ingredients: [
    { name: "beets", amount: "4 medium (500g)" },
    { name: "carrots", amount: "6 large (500g)" },
    { name: "onions", amount: "2" },
    { name: "garlic", amount: "1 head" },
    { name: "olive oil", amount: "3-4 tbsp" },
    { name: "water", amount: "1.5L" },
    { name: "salt", amount: "to taste" },
    { name: "pepper", amount: "to taste" },
  ],
  steps: [
    {
      id: "prep",
      text: "Cut beets and carrots into chunks",
      ingredients: [
        { name: "beets", amount: "500g" },
        { name: "carrots", amount: "500g" },
      ],
    },
    {
      id: "add",
      text: "Quarter onions, add garlic head",
      ingredients: [
        { name: "onions", amount: "2" },
        { name: "garlic", amount: "1 head" },
      ],
    },
    {
      id: "season",
      text: "Season with olive oil, salt, pepper",
      ingredients: [
        { name: "olive oil", amount: "3-4 tbsp" },
        { name: "salt", amount: "" },
        { name: "pepper", amount: "" },
      ],
    },
    {
      id: "roast",
      text: "Roast at 200°C for 40 min",
      ingredients: [],
    },
    {
      id: "blend",
      text: "Add hot water and blend until smooth",
      ingredients: [{ name: "water", amount: "1.5L" }],
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

const recipesData = [butternutRecipe, tomatoRecipe, beetRecipe];

export default recipesData;
