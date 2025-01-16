const butternutRecipe = {
  id: 'butternut',
  title: 'Butternut Squash Soup',
  time: '40',
  ingredients: [
    { name: 'butternut squash', amount: '1 (1.2kg)' },
    { name: 'onions', amount: '2' },
    { name: 'garlic', amount: '1 head' },
    { name: 'olive oil', amount: '3-4 tbsp' },
    { name: 'water', amount: '1.5L' },
    { name: 'salt', amount: 'to taste' },
    { name: 'pepper', amount: 'to taste' },
  ],
  steps: [
    {
      id: 'prep',
      text: 'Cut squash into cubes, quarter onions',
      ingredients: [
        { name: 'butternut squash', amount: '1.2kg' },
        { name: 'onions', amount: '2' },
      ],
    },
    {
      id: 'roast',
      text: 'Roast at 180°C for 40 min',
      ingredients: [],
    },
    {
      id: 'blend',
      text: 'Add hot water and blend',
      ingredients: [{ name: 'water', amount: '1.5L' }],
    },
  ],
  boosters: [
    {
      id: 'chickpeas',
      name: 'Chickpeas',
      instruction: 'Add drained chickpeas to roasting tray',
      addAtStep: 'roast',
    },
    {
      id: 'spinach',
      name: 'Spinach',
      instruction: 'Add spinach while blending',
      addAtStep: 'blend',
    },
  ],
};

const tomatoRecipe = {
  id: 'tomato',
  title: 'Tomato & Bell Pepper Soup',
  time: '30',
  ingredients: [
    { name: 'tomatoes', amount: '8 large' },
    { name: 'bell peppers', amount: '3' },
    { name: 'onions', amount: '2' },
  ],
  steps: [
    {
      id: 'prep',
      text: 'Quarter tomatoes and peppers',
      ingredients: [
        { name: 'tomatoes', amount: '8' },
        { name: 'bell peppers', amount: '3' },
      ],
    },
    {
      id: 'roast',
      text: 'Roast at 200°C for 30 min',
      ingredients: [],
    },
  ],
  boosters: [
    {
      id: 'carrots',
      name: 'Carrots',
      instruction: 'Add chunked carrots to roasting tray',
      addAtStep: 'roast',
    },
  ],
};

const recipesData = [butternutRecipe, tomatoRecipe];

const recipes = [
  {
    id: 'butternut',
    title: 'Butternut Squash Soup',
    time: '40',
    ingredients: [
      { name: 'butternut squash', amount: '1 (1.2kg)' },
      { name: 'onions', amount: '2' },
      { name: 'garlic', amount: '1 head' },
      { name: 'olive oil', amount: '3-4 tbsp' },
      { name: 'water', amount: '1.5L' },
      { name: 'salt', amount: 'to taste' },
      { name: 'pepper', amount: 'to taste' },
    ],
    steps: [
      {
        id: 'prep',
        text: 'Cut squash into cubes, quarter onions',
        ingredients: [
          { name: 'butternut squash', amount: '1.2kg' },
          { name: 'onions', amount: '2' },
        ],
      },
      {
        id: 'garlic',
        text: 'Place on tray with garlic head',
        ingredients: [{ name: 'garlic', amount: '1 head' }],
      },
      {
        id: 'season',
        text: 'Season with olive oil, salt, pepper',
        ingredients: [
          { name: 'olive oil', amount: '3-4 tbsp' },
          { name: 'salt', amount: '' },
          { name: 'pepper', amount: '' },
        ],
      },
      {
        id: 'roast',
        text: 'Roast at 180°C for 40 min',
        ingredients: [],
      },
      {
        id: 'blend',
        text: 'Add hot water and transfer to pot',
        ingredients: [{ name: 'water', amount: '1.5L' }],
      },
      {
        id: 'finish',
        text: 'Blend until smooth, season to taste',
        ingredients: [
          { name: 'salt', amount: '' },
          { name: 'pepper', amount: '' },
        ],
      },
    ],
    boosters: [
      {
        id: 'chickpeas',
        name: 'Chickpeas',
        instruction: 'Add drained chickpeas to roasting tray',
        addAtStep: 'roast',
      },
      {
        id: 'spinach',
        name: 'Spinach',
        instruction: 'Add spinach while blending',
        addAtStep: 'blend',
      },
      {
        id: 'seeds',
        name: 'Pumpkin Seeds',
        instruction: 'Top with toasted pumpkin seeds',
        addAtStep: 'finish',
      },
    ],
  },
  {
    id: 'tomato',
    title: 'Tomato & Bell Pepper Soup',
    time: '30',
    ingredients: [
      { name: 'tomatoes', amount: '8 large' },
      { name: 'bell peppers', amount: '3' },
      { name: 'onions', amount: '2' },
      { name: 'garlic', amount: '1 head' },
      { name: 'olive oil', amount: '3-4 tbsp' },
      { name: 'thyme', amount: 'few sprigs' },
      { name: 'water', amount: '1.5L' },
      { name: 'salt', amount: 'to taste' },
      { name: 'pepper', amount: 'to taste' },
    ],
    steps: [
      {
        id: 'prep',
        text: 'Quarter tomatoes and bell peppers',
        ingredients: [
          { name: 'tomatoes', amount: '8 large' },
          { name: 'bell peppers', amount: '3' },
        ],
      },
      {
        id: 'add',
        text: 'Add onions and garlic head',
        ingredients: [
          { name: 'onions', amount: '2' },
          { name: 'garlic', amount: '1 head' },
        ],
      },
      {
        id: 'season',
        text: 'Season with olive oil, thyme, salt, pepper',
        ingredients: [
          { name: 'olive oil', amount: '3-4 tbsp' },
          { name: 'thyme', amount: 'few sprigs' },
          { name: 'salt', amount: '' },
          { name: 'pepper', amount: '' },
        ],
      },
      {
        id: 'roast',
        text: 'Roast at 200°C for 30 min',
        ingredients: [],
      },
      {
        id: 'blend',
        text: 'Add hot water and blend until smooth',
        ingredients: [{ name: 'water', amount: '1.5L' }],
      },
    ],
    boosters: [
      {
        id: 'carrots',
        name: 'Carrots',
        instruction: 'Add chunked carrots to roasting tray',
        addAtStep: 'roast',
      },
      {
        id: 'lentils',
        name: 'Red Lentils',
        instruction: 'Add 1 cup red lentils while blending',
        addAtStep: 'blend',
      },
      {
        id: 'herbs',
        name: 'Fresh Basil',
        instruction: 'Top with torn fresh basil leaves',
        addAtStep: 'finish',
      },
    ],
  },
  {
    id: 'beet',
    title: 'Beet & Carrot Soup',
    time: '40',
    ingredients: [
      { name: 'beets', amount: '4 medium (500g)' },
      { name: 'carrots', amount: '6 large (500g)' },
      { name: 'onions', amount: '2' },
      { name: 'garlic', amount: '1 head' },
      { name: 'olive oil', amount: '3-4 tbsp' },
      { name: 'water', amount: '1.5L' },
      { name: 'salt', amount: 'to taste' },
      { name: 'pepper', amount: 'to taste' },
    ],
    steps: [
      {
        id: 'prep',
        text: 'Cut beets and carrots into chunks',
        ingredients: [
          { name: 'beets', amount: '500g' },
          { name: 'carrots', amount: '500g' },
        ],
      },
      {
        id: 'add',
        text: 'Quarter onions, add garlic head',
        ingredients: [
          { name: 'onions', amount: '2' },
          { name: 'garlic', amount: '1 head' },
        ],
      },
      {
        id: 'season',
        text: 'Season with olive oil, salt, pepper',
        ingredients: [
          { name: 'olive oil', amount: '3-4 tbsp' },
          { name: 'salt', amount: '' },
          { name: 'pepper', amount: '' },
        ],
      },
      {
        id: 'roast',
        text: 'Roast at 200°C for 40 min',
        ingredients: [],
      },
      {
        id: 'blend',
        text: 'Add hot water and blend until smooth',
        ingredients: [{ name: 'water', amount: '1.5L' }],
      },
    ],
    boosters: [
      {
        id: 'parsnips',
        name: 'Parsnips',
        instruction: 'Add chunked parsnips to roasting tray',
        addAtStep: 'roast',
      },
      {
        id: 'beans',
        name: 'White Beans',
        instruction: 'Add one can of drained white beans',
        addAtStep: 'blend',
      },
      {
        id: 'dukkah',
        name: 'Dukkah',
        instruction: 'Sprinkle with dukkah spice mix',
        addAtStep: 'finish',
      },
    ],
  },
];
export default recipes;
