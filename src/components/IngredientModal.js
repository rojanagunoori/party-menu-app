import React from "react";
import "./IngredientModal.css";

function IngredientModal({ dish, onClose }) {
  if (!dish) return null; // if no dish selected, don't show modal

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          &larr; Back
        </button>

        {/* Dish Header */}
        <h2 className="modal-title">Ingredient list</h2>
        <img
            src={
              dish.image ||
              "https://via.placeholder.com/120x120.png?text=Dish"
            }
            alt={dish.name}
            className="modal-dish-img"
          />
        <div className="dish-header">
         
          <div>
            <h3>{dish.name} 
            <img
  className="dish-type"
  src={
    dish.type === "VEG"
      ? "https://upload.wikimedia.org/wikipedia/commons/b/b2/Veg_symbol.svg"
      : "https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg"
  }
  alt={dish.type === "VEG" ? "Veg" : "Non-Veg"}
/>

              </h3>
            <p>{dish.description}</p>
          </div>
        </div>

        {/* Ingredients */}
        <h4>Ingredients</h4>
        <p>For 2 people</p>
        <ul className="ingredient-list">
          {dish.ingredients && dish.ingredients.length > 0 ? (
            dish.ingredients.map((ing, index) => (
              <li key={index} className="ingredient-item">
                <span>{ing.name}</span>
                <span>{ing.quantity}</span>
              </li>
            ))
          ) : (
            <p>No ingredients available</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default IngredientModal;
