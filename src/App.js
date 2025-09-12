import React, { useState } from "react";
import { dishes } from "./data/mockDishes";
import DishCard from "./components/DishCard";
import IngredientModal from "./components/IngredientModal";
import BottomBar from "./components/BottomBar";
import ReviewPage from "./components/ReviewPage"; // ⬅️ new
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [currentDish, setCurrentDish] = useState(null);
  const [showReview, setShowReview] = useState(false); // ⬅️ new state
  const [vegFilter, setVegFilter] = useState("ALL");
  const [vegOn, setVegOn] = useState(false);
  const [nonVegOn, setNonVegOn] = useState(false);

  const getFilter = () => {
    if (vegOn && !nonVegOn) return "VEG";
    if (!vegOn && nonVegOn) return "NON-VEG";
    return null; // both off or both on → show all
  };

  const filter = getFilter();

  // 🔍 Filtering logic
  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory =
      selectedCategory === "ALL" || dish.mealType === selectedCategory;
    const matchesSearch = dish.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesVeg =
    filter === "VEG" ? dish.type === "VEG" :
    filter === "NON-VEG" ? dish.type === "NON-VEG" :
    true;
  
    return matchesCategory && matchesSearch && matchesVeg;
  });

  // ➕ Add dish
  const handleAddDish = (id) => {
    if (!selectedDishes.includes(id)) {
      setSelectedDishes([...selectedDishes, id]);
    }
  };

  // ➖ Remove dish
  const handleRemoveDish = (id) => {
    setSelectedDishes(selectedDishes.filter((dishId) => dishId !== id));
  };

  // 🍴 Open ingredient modal
  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
  };

  // ❌ Close modal
  const handleCloseModal = () => {
    setCurrentDish(null);
  };

  // 📌 Selected dish details
  const selectedDishObjects = dishes.filter((d) =>
    selectedDishes.includes(d.id)
  );

  // Group filtered dishes by cuisine
  const groupedDishes = filteredDishes.reduce((groups, dish) => {
    if (!groups[dish.cuisine]) {
      groups[dish.cuisine] = [];
    }
    groups[dish.cuisine].push(dish);
    return groups;
  }, {});



// Count only those in the current category
const filteredSelectedDishesByCategory = selectedDishObjects.filter((dish) => {
  return selectedCategory === "ALL" || dish.mealType === selectedCategory;
});



  return (
    <div className="app-container">
      {showReview ? (
        // ✅ Review Page
        <ReviewPage
          selectedDishes={selectedDishObjects}
          onBack={() => setShowReview(false)}
        />
      ) : (
        // ✅ Main Dish Selection Page
        <>
          {/* 🔍 Search */}
          <input
            type="text"
            placeholder="Search dish for your party..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />

        
        {/* 🏷️ Category Filters */}
<div className="filters">
  {["ALL", "STARTER", "MAIN COURSE", "DESSERT", "SIDES"].map((cat) => {
    // Count selected dishes for this category
    const count = selectedDishes
      .map((id) => dishes.find((d) => d.id === id))
      .filter((dish) => dish && (cat === "ALL" || dish.mealType === cat))
      .length;

    return (
      <button
        key={cat}
        className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
        onClick={() => setSelectedCategory(cat)}
      >
        {cat} {count}
      </button>
    );
  })}
</div>


          {/* Veg/Non-Veg Toggle */}
          {/* Header with category and veg/non-veg toggles */}
          <div className="dish-header">
  {/* Left: category + selected count */}
  <div className="dish-header-left">
    <h2>
      {selectedCategory} Selected ({filteredSelectedDishesByCategory.length})
    </h2>
  </div>

  {/* Right: Veg/Non-Veg toggle switch */}
  <div className="dish-header-right">
      {/* Veg Toggle */}
      <div
        className={`slider-toggle ${vegOn ? "active-veg" : ""}`}
        onClick={() => setVegOn(!vegOn)}
      >
       
        <div className="slider-circle veg"></div>
      </div>

      {/* Non-Veg Toggle */}
      <div
        className={`slider-toggle ${nonVegOn ? "active-non-veg" : ""}`}
        onClick={() => setNonVegOn(!nonVegOn)}
      >
        
        <div className="slider-circle non-veg"></div>
      </div>

      
    </div>

</div>





          {/* 🍲 Dish List */}
          {/* 🍲 Grouped Dish List */}
          <div className="dish-list">
            {Object.keys(groupedDishes).map((cuisine) => (
              <div key={cuisine} className="cuisine-group">
                <h2 className="cuisine-title">{cuisine}</h2>
                {groupedDishes[cuisine].map((dish) => (
                  <DishCard
                    key={dish.id}
                    dish={dish}
                    isSelected={selectedDishes.includes(dish.id)}
                    onAdd={handleAddDish}
                    onRemove={handleRemoveDish}
                    onViewIngredients={handleViewIngredients}
                  />
                ))}
              </div>
            ))}
          </div>


          {/* 🍴 Ingredient Modal */}
          {currentDish && (
            <IngredientModal dish={currentDish} onClose={handleCloseModal} />
          )}

          {/* 📌 Bottom Bar */}
         <div className="bottom">
         <BottomBar
            totalSelected={selectedDishes.length}
            onContinue={() => setShowReview(true)} // ✅ open review page
          />
         </div>
        </>
      )}
    </div>
  );
}

export default App;
