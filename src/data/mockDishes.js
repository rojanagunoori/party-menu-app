// src/data/mockDishes.js

export const dishes = [
    // 🟢 NORTH INDIAN STARTERS
    {
      id: 1,
      name: "Paneer Tikka",
      mealType: "STARTER",
      cuisine: "North Indian",
      type: "VEG",
      description: "Marinated paneer cubes grilled with spices.",
      image: "https://images.pexels.com/photos/2580464/pexels-photo-2580464.jpeg",
      ingredients: [
        { name: "Paneer", quantity: "200g" },
        { name: "Yogurt", quantity: "1/2 cup" },
        { name: "Spices", quantity: "to taste" },
      ],
    },
    {
      id: 2,
      name: "Tandoori Chicken",
      mealType: "STARTER",
      cuisine: "North Indian",
      type: "NON-VEG",
      description: "Chicken marinated in yogurt & spices, roasted in tandoor.",
      image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg",
      ingredients: [
        { name: "Chicken", quantity: "500g" },
        { name: "Yogurt", quantity: "1 cup" },
        { name: "Spices", quantity: "to taste" },
      ],
    },
  
    // 🟢 NORTH INDIAN MAIN COURSE
    {
      id: 3,
      name: "Dal Makhni",
      mealType: "MAIN COURSE",
      cuisine: "North Indian",
      type: "VEG",
      description: "Slow cooked black lentils with butter & cream.",
      image: "https://images.pexels.com/photos/28674561/pexels-photo-28674561.jpeg",
      ingredients: [
        { name: "Black Lentils", quantity: "200g" },
        { name: "Butter", quantity: "50g" },
        { name: "Cream", quantity: "1/4 cup" },
      ],
    },
    {
      id: 4,
      name: "Butter Chicken",
      mealType: "MAIN COURSE",
      cuisine: "North Indian",
      type: "NON-VEG",
      description: "Chicken in rich tomato-butter gravy.",
      image: "https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg",
      ingredients: [
        { name: "Chicken", quantity: "500g" },
        { name: "Tomato Puree", quantity: "1 cup" },
        { name: "Butter", quantity: "50g" },
      ],
    },
  
    // 🟢 NORTH INDIAN DESSERTS
    {
      id: 5,
      name: "Gulab Jamun",
      mealType: "DESSERT",
      cuisine: "North Indian",
      type: "VEG",
      description: "Soft fried khoya balls soaked in sugar syrup.",
      image: "https://images.pexels.com/photos/15014919/pexels-photo-15014919.jpeg",
      ingredients: [
        { name: "Khoya", quantity: "200g" },
        { name: "Sugar Syrup", quantity: "1 cup" },
      ],
    },
    {
      id: 6,
      name: "Rasmalai",
      mealType: "DESSERT",
      cuisine: "North Indian",
      type: "VEG",
      description: "Soft paneer patties soaked in saffron milk.",
      image: "https://www.cookwithmanali.com/wp-content/uploads/2014/07/Rasmalai-Recipe.jpg",
      ingredients: [
        { name: "Paneer", quantity: "200g" },
        { name: "Milk", quantity: "500ml" },
        { name: "Sugar", quantity: "1/2 cup" },
      ],
    },
  
    // 🟢 SOUTH INDIAN STARTERS
    {
      id: 7,
      name: "Medu Vada",
      mealType: "STARTER",
      cuisine: "South Indian",
      type: "VEG",
      description: "Crispy lentil fritters shaped like donuts.",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/medu-vada-1.jpg",
      ingredients: [
        { name: "Urad Dal", quantity: "200g" },
        { name: "Green Chili", quantity: "2 pcs" },
        { name: "Onion", quantity: "1 pc" },
      ],
    },
    {
      id: 8,
      name: "Idli Sambar",
      mealType: "STARTER",
      cuisine: "South Indian",
      type: "VEG",
      description: "Steamed rice cakes served with lentil soup.",
      image: "https://shwetainthekitchen.com/wp-content/uploads/2022/01/Idli-Sambar.jpg",
      ingredients: [
        { name: "Rice", quantity: "200g" },
        { name: "Urad Dal", quantity: "100g" },
        { name: "Sambar", quantity: "1 cup" },
      ],
    },
  
    // 🟢 SOUTH INDIAN MAIN COURSE
    {
      id: 9,
      name: "Masala Dosa",
      mealType: "MAIN COURSE",
      cuisine: "South Indian",
      type: "VEG",
      description: "Crispy dosa stuffed with spiced potato filling.",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe-500x500.jpg",
      ingredients: [
        { name: "Rice Batter", quantity: "2 cups" },
        { name: "Potato", quantity: "2 pcs" },
        { name: "Onion", quantity: "1 pc" },
      ],
    },
    {
      id: 10,
      name: "Hyderabadi Biryani",
      mealType: "MAIN COURSE",
      cuisine: "South Indian",
      type: "NON-VEG",
      description: "Aromatic basmati rice cooked with marinated chicken.",
      image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
      ingredients: [
        { name: "Basmati Rice", quantity: "2 cups" },
        { name: "Chicken", quantity: "500g" },
        { name: "Spices", quantity: "to taste" },
      ],
    },
  
    // 🟢 SOUTH INDIAN DESSERTS
    {
      id: 11,
      name: "Payasam",
      mealType: "DESSERT",
      cuisine: "South Indian",
      type: "VEG",
      description: "Sweet dish made with milk, rice/vermicelli, and jaggery.",
      image: "https://www.sharmispassions.com/wp-content/uploads/2023/10/sago-payasam01.jpg",
      ingredients: [
        { name: "Rice/Vermicelli", quantity: "1 cup" },
        { name: "Milk", quantity: "500ml" },
        { name: "Jaggery", quantity: "100g" },
      ],
    },
    {
      id: 12,
      name: "Mysore Pak",
      mealType: "DESSERT",
      cuisine: "South Indian",
      type: "VEG",
      description: "Traditional sweet made with ghee, sugar, and gram flour.",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/mysore-pak.jpg",
      ingredients: [
        { name: "Gram Flour", quantity: "1 cup" },
        { name: "Sugar", quantity: "2 cups" },
        { name: "Ghee", quantity: "1 cup" },
      ],
    },
  
    // 🟢 COMMON / GLOBAL DESSERTS
    {
      id: 13,
      name: "Ice Cream",
      mealType: "DESSERT",
      cuisine: "Global",
      type: "VEG",
      description: "Frozen dessert available in multiple flavors.",
      image: "https://www.julieseatsandtreats.com/wp-content/uploads/2020/06/Rainbow-Ice-Cream-14-of-16.jpg",
      ingredients: [
        { name: "Milk", quantity: "500ml" },
        { name: "Sugar", quantity: "100g" },
      ],
    },
     // 🟢 COMMON / GLOBAL DESSERTS

  {
    id: 14,
    name: "Brownie",
    mealType: "DESSERT",
    cuisine: "Global",
    type: "VEG",
    description: "Chocolate baked dessert served warm.",
    image: "https://cakesbymk.com/wp-content/uploads/2023/01/Template-Size-for-Blog-Photos-15.jpg",
    ingredients: [
      { name: "Flour", quantity: "1 cup" },
      { name: "Cocoa Powder", quantity: "1/2 cup" },
      { name: "Butter", quantity: "50g" },
    ],
  },

  // 🟢 SIDES (North Indian)
  {
    id: 15,
    name: "Butter Naan",
    mealType: "SIDES",
    cuisine: "North Indian",
    type: "VEG",
    description: "Soft leavened bread topped with butter.",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2014/11/Soft-Homemade-Naan-500x500.jpg",
    ingredients: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Butter", quantity: "20g" },
    ],
  },
  {
    id: 16,
    name: "Jeera Rice",
    mealType: "SIDES",
    cuisine: "North Indian",
    type: "VEG",
    description: "Steamed basmati rice flavored with cumin.",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2025/05/jeera-rice-1-500x500.jpg",
    ingredients: [
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
    ],
  },
  {
    id: 17,
    name: "Papad",
    mealType: "SIDES",
    cuisine: "North Indian",
    type: "VEG",
    description: "Crispy thin wafer made from lentil flour.",
    image: "https://chandravilas.com/wp-content/uploads/2022/09/1.jpg",
    ingredients: [
      { name: "Lentil Flour", quantity: "100g" },
      { name: "Salt", quantity: "to taste" },
    ],
  },

  // 🟢 SIDES (South Indian)
  {
    id: 18,
    name: "Coconut Chutney",
    mealType: "SIDES",
    cuisine: "South Indian",
    type: "VEG",
    description: "Chutney made with coconut, chili, and spices.",
    image: "https://shwetainthekitchen.com/wp-content/uploads/2022/04/Coconut-Chutney.jpg",
    ingredients: [
      { name: "Coconut", quantity: "1 cup" },
      { name: "Green Chili", quantity: "2 pcs" },
      { name: "Curry Leaves", quantity: "5 leaves" },
    ],
  },
  {
    id: 19,
    name: "Sambar",
    mealType: "SIDES",
    cuisine: "South Indian",
    type: "VEG",
    description: "Spiced lentil-based vegetable stew.",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/South-Indian-Sambar-Recipe.jpg",
    ingredients: [
      { name: "Toor Dal", quantity: "200g" },
      { name: "Tamarind", quantity: "50g" },
      { name: "Mixed Veggies", quantity: "1 cup" },
    ],
  },
  {
    id: 20,
    name: "Rasam",
    mealType: "SIDES",
    cuisine: "South Indian",
    type: "VEG",
    description: "Tangy tamarind-based soup with spices.",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/tomato-rasam.jpg",
    ingredients: [
      { name: "Tamarind", quantity: "30g" },
      { name: "Pepper", quantity: "1 tsp" },
      { name: "Tomato", quantity: "1 pc" },
    ],
  },

  // 🟢 NORTH INDIAN MAIN COURSE (extra)
  {
    id: 21,
    name: "Palak Paneer",
    mealType: "MAIN COURSE",
    cuisine: "North Indian",
    type: "VEG",
    description: "Paneer cubes in creamy spinach gravy.",
    image: "https://www.whiskaffair.com/wp-content/uploads/2014/07/Palak-Paneer-2-3.jpg",
    ingredients: [
      { name: "Spinach", quantity: "250g" },
      { name: "Paneer", quantity: "150g" },
    ],
  },
  {
    id: 22,
    name: "Chole Bhature",
    mealType: "MAIN COURSE",
    cuisine: "North Indian",
    type: "VEG",
    description: "Spiced chickpeas with fried bread.",
    image: "https://i.pinimg.com/736x/80/3f/f0/803ff029867e021b7b4193f58e1c4ad1.jpg",
    ingredients: [
      { name: "Chickpeas", quantity: "200g" },
      { name: "Flour", quantity: "2 cups" },
    ],
  },

  // 🟢 SOUTH INDIAN MAIN COURSE (extra)
  {
    id: 23,
    name: "Chettinad Chicken Curry",
    mealType: "MAIN COURSE",
    cuisine: "South Indian",
    type: "NON-VEG",
    description: "Spicy chicken curry with Chettinad spices.",
    image: "https://img.freepik.com/premium-psd/png-chettinad-chicken-curry-chicken-spicy_53876-517830.jpg",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Chettinad Masala", quantity: "3 tbsp" },
    ],
  },
  {
    id: 24,
    name: "Curd Rice",
    mealType: "MAIN COURSE",
    cuisine: "South Indian",
    type: "VEG",
    description: "Comfort dish of rice mixed with yogurt and tempering.",
    image: "https://rakskitchen.net/wp-content/uploads/2012/06/curd-rice-feat.jpg",
    ingredients: [
      { name: "Cooked Rice", quantity: "2 cups" },
      { name: "Curd", quantity: "1 cup" },
      { name: "Curry Leaves", quantity: "5 leaves" },
    ],
  },

  // 🟢 MORE DESSERTS
  {
    id: 25,
    name: "Kheer",
    mealType: "DESSERT",
    cuisine: "North Indian",
    type: "VEG",
    description: "Rice pudding made with milk, sugar, and dry fruits.",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/kheer-recipe.jpg",
    ingredients: [
      { name: "Rice", quantity: "50g" },
      { name: "Milk", quantity: "500ml" },
      { name: "Sugar", quantity: "100g" },
    ],
  },
  {
    id: 26,
    name: "Kesari Bath",
    mealType: "DESSERT",
    cuisine: "South Indian",
    type: "VEG",
    description: "Semolina pudding flavored with saffron.",
    image: "https://i.pinimg.com/736x/47/e3/15/47e3154b0d20528971f85f5a5589af09.jpg",
    ingredients: [
      { name: "Rava", quantity: "1 cup" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Ghee", quantity: "2 tbsp" },
    ],
  },

  // 🟢 GLOBAL STARTERS
  {
    id: 27,
    name: "Spring Rolls",
    mealType: "STARTER",
    cuisine: "Global",
    type: "VEG",
    description: "Crispy rolls filled with vegetables.",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2013/12/spring-rolls.jpg",
    ingredients: [
      { name: "Spring Roll Sheets", quantity: "10 pcs" },
      { name: "Mixed Veggies", quantity: "1 cup" },
    ],
  },
  {
    id: 28,
    name: "Chicken Wings",
    mealType: "STARTER",
    cuisine: "Global",
    type: "NON-VEG",
    description: "Deep fried chicken wings with sauce.",
    image: "https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3.jpg",
    ingredients: [
      { name: "Chicken Wings", quantity: "10 pcs" },
      { name: "Hot Sauce", quantity: "2 tbsp" },
    ],
  },

  // 🟢 GLOBAL MAIN COURSE
  {
    id: 29,
    name: "Pasta Alfredo",
    mealType: "MAIN COURSE",
    cuisine: "Global",
    type: "VEG",
    description: "Creamy pasta with Alfredo sauce.",
    image: "https://www.sharmispassions.com/wp-content/uploads/2015/12/alfredopasta5.jpg",
    ingredients: [
      { name: "Pasta", quantity: "200g" },
      { name: "Cream", quantity: "100ml" },
      { name: "Cheese", quantity: "50g" },
    ],
  },
  {
    id: 30,
    name: "Grilled Fish",
    mealType: "MAIN COURSE",
    cuisine: "Global",
    type: "NON-VEG",
    description: "Fish fillet grilled with herbs and spices.",
    image: "https://www.masalakorb.com/wp-content/uploads/2016/08/Grilled-Fish-Indian-Recipe-V5.jpg",
    ingredients: [
      { name: "Fish Fillet", quantity: "200g" },
      { name: "Olive Oil", quantity: "1 tbsp" },
      { name: "Herbs", quantity: "to taste" },
    ],
  },
  // 🟢 STARTERS
{
    id: 30,
    name: "Chicken 65",
    mealType: "STARTER",
    cuisine: "South Indian",
    type: "NON-VEG",
    description: "Spicy deep-fried chicken bites with curry leaves.",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg",
    ingredients: [
      { name: "Chicken", quantity: "300g" },
      { name: "Green Chili", quantity: "2 pcs" },
      { name: "Curry Leaves", quantity: "5–6 leaves" },
    ],
  },
  {
    id: 31,
    name: "Hara Bhara Kebab",
    mealType: "STARTER",
    cuisine: "North Indian",
    type: "VEG",
    description: "Spinach and green pea cutlets, shallow fried.",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/01/hara-bhara-kabab-recipe-1.jpg",
    ingredients: [
      { name: "Spinach", quantity: "1 cup" },
      { name: "Green Peas", quantity: "1/2 cup" },
      { name: "Potato", quantity: "1 pc" },
    ],
  },
  
  // 🟢 MAIN COURSE
  {
    id: 32,
    name: "Chole Bhature",
    mealType: "MAIN COURSE",
    cuisine: "North Indian",
    type: "VEG",
    description: "Spicy chickpea curry served with fried bread.",
    image: "https://i.pinimg.com/736x/80/3f/f0/803ff029867e021b7b4193f58e1c4ad1.jpg",
    ingredients: [
      { name: "Chickpeas", quantity: "200g" },
      { name: "Onion", quantity: "1 pc" },
      { name: "Spices", quantity: "to taste" },
    ],
  },
  {
    id: 33,
    name: "Chettinad Chicken Curry",
    mealType: "MAIN COURSE",
    cuisine: "South Indian",
    type: "NON-VEG",
    description: "Fiery chicken curry with Chettinad spices.",
    image: "https://img.freepik.com/premium-psd/png-chettinad-chicken-curry-chicken-spicy_53876-517830.jpg",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Coconut", quantity: "1/4 cup" },
      { name: "Spices", quantity: "to taste" },
    ],
  },
  
  // 🟢 DESSERTS
  {
    id: 34,
    name: "Kheer",
    mealType: "DESSERT",
    cuisine: "North Indian",
    type: "VEG",
    description: "Rice pudding with milk, sugar, and dry fruits.",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/kheer-recipe.jpg",
    ingredients: [
      { name: "Rice", quantity: "1/4 cup" },
      { name: "Milk", quantity: "500ml" },
      { name: "Sugar", quantity: "1/4 cup" },
    ],
  },
  {
    id: 35,
    name: "Kesari Bath",
    mealType: "DESSERT",
    cuisine: "South Indian",
    type: "VEG",
    description: "Sweet semolina dessert flavored with saffron.",
    image: "https://i.pinimg.com/736x/47/e3/15/47e3154b0d20528971f85f5a5589af09.jpg",
    ingredients: [
      { name: "Rava (Semolina)", quantity: "1 cup" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Saffron", quantity: "a few strands" },
    ],
  },
  
  // 🟢 SIDES
  {
    id: 36,
    name: "Tandoori Roti",
    mealType: "SIDES",
    cuisine: "North Indian",
    type: "VEG",
    description: "Whole wheat flatbread cooked in a tandoor.",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/tandoori-roti-recipe.jpg",
    ingredients: [
      { name: "Wheat Flour", quantity: "2 cups" },
      { name: "Salt", quantity: "1 tsp" },
    ],
  },
  {
    id: 37,
    name: "Curd Rice",
    mealType: "SIDES",
    cuisine: "South Indian",
    type: "VEG",
    description: "Rice mixed with yogurt, tempered with curry leaves.",
    image: "https://rakskitchen.net/wp-content/uploads/2012/06/curd-rice-feat.jpg",
    ingredients: [
      { name: "Cooked Rice", quantity: "1 cup" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Curry Leaves", quantity: "5–6 leaves" },
    ],
  },
  {
    id: 38,
    name: "French Fries",
    mealType: "SIDES",
    cuisine: "Global",
    type: "VEG",
    description: "Crispy fried potato strips, a party favorite.",
    image: "https://www.chefhasti.com/wp-content/uploads/2020/06/COVER-1-1-scaled.jpg",
    ingredients: [
      { name: "Potatoes", quantity: "3 pcs" },
      { name: "Salt", quantity: "to taste" },
      { name: "Oil", quantity: "for frying" },
    ],
  },
  
  // 🟢 GLOBAL EXTRA
  {
    id: 39,
    name: "Pasta Alfredo",
    mealType: "MAIN COURSE",
    cuisine: "Global",
    type: "VEG",
    description: "Creamy pasta tossed in Alfredo sauce.",
    image: "https://www.sharmispassions.com/wp-content/uploads/2015/12/alfredopasta5.jpg",
    ingredients: [
      { name: "Pasta", quantity: "200g" },
      { name: "Cream", quantity: "1/2 cup" },
      { name: "Cheese", quantity: "1/4 cup" },
    ],
  },
  {
    id: 40,
    name: "Garlic Bread",
    mealType: "SIDES",
    cuisine: "Global",
    type: "VEG",
    description: "Bread toasted with garlic, butter, and herbs.",
    image: "https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg",
    ingredients: [
      { name: "Bread", quantity: "4 slices" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Butter", quantity: "2 tbsp" },
    ],
    
  },
  
  ];
  
