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
      media: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1600626333392-9fae0f6c8fbb?q=80&w=1000&auto=format&fit=crop",
          alt: "Cutting beets and carrots into chunks"
        }
      ]
    },
    {
      id: "add",
      text: "Quarter {onions}, add {garlic}",
      ingredients: ["onions", "garlic"],
      media: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=1000&auto=format&fit=crop",
          alt: "Preparing garlic for roasting"
        }
      ]
    },
    {
      id: "season",
      text: "Season with {olive oil}, {salt}, {pepper}",
      ingredients: ["olive oil", "salt", "pepper"],
      media: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1600626334697-1f8c6bd2e7ca?q=80&w=1000&auto=format&fit=crop",
          alt: "Vegetables arranged on roasting tray"
        }
      ]
    },
    {
      id: "roast",
      text: "Roast at 200°C for 40 min",
      ingredients: [],
      media: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1600626333392-9fae0f6c8fbb?q=80&w=1000&auto=format&fit=crop",
          alt: "Roasted vegetables in the oven"
        }
      ]
    },
    {
      id: "blend",
      text: "Add {water} and blend until smooth",
      ingredients: ["water"],
      media: [
        {
          type: "video",
          url: "https://example.com/blending-soup.mp4",
          alt: "Blending the soup"
        }
      ]
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

const zucchiniRecipe = {
  id: "zucchini",
  favorite: false,
  title: "Roasted Zucchini Soup",
  time: "35",
  ingredients: [
    { name: "zucchini", amount: "3-4 medium", isMainIngredient: true },
    { name: "garlic", amount: "4 cloves", isMainIngredient: true },
    { name: "onion", amount: "1 large", isMainIngredient: true },
    { name: "olive oil", amount: "2-3 tbsp", isMainIngredient: false },
    { name: "water or vegetable stock", amount: "1.5L", isMainIngredient: false },
    { name: "salt", amount: "to taste", isMainIngredient: false },
    { name: "pepper", amount: "to taste", isMainIngredient: false },
  ],
  steps: [
    {
      id: "prep",
      text: "Cut {zucchini} into halves, quarter the {onion}, trim {garlic} heads",
      ingredients: ["zucchini", "onion", "garlic"],
    },
    {
      id: "season",
      text: "Toss vegetables with {olive oil}, {salt}, and {pepper}",
      ingredients: ["olive oil", "salt", "pepper"]
    },
    {
      id: "roast",
      text: "Place in oven at 200°C/400°F until tender and slightly caramelized (about 25-30 minutes)",
      ingredients: []
    },
    {
      id: "blend",
      text: "Add roasted vegetables to a blender with {vegetable stock}",
      ingredients: ["vegetable stock"]
    },
  ],
  boosters: [
    {
      id: "cannellini-beans",
      name: "Cannellini Beans",
      amount: "1 can (400g)",
      addAtStep: "blend",
      instruction: "Adds add after blending"
    },
    {
      id: "spinach",
      name: "Baby Spinach",
      amount: "2 cups",
      addAtStep: "blend",
      instruction: "Adds add after blending"
    },
    {
      id: "kale",
      name: "Kale",
      amount: "2 cups",
      addAtStep: "blend",
      instruction: "Add after blending. Alternative to spinach for added iron and vitamins."
    },
    {
      id: "almonds",
      name: "Toasted Almonds",
      addAtStep: "finish",
      instruction: "Adds crunch and nutty flavor as garnish"
    },
    {
      id: "finish",
      name: "Lemon Juice",
      addAtStep: "finish",
      instruction: "Finish with a squeeze of {lemon juice} for brightness",
    }
  ]
};

const recipesData = [butternutRecipe, tomatoRecipe, zucchiniRecipe];

export default recipesData;
