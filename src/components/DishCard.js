import React from "react";
import "./DishCard.css";

function DishCard({ dish, isSelected, onAdd, onRemove, onViewIngredients }) {
    return (
        <div className="dish-card">
            {/* Dish Image */}


            {/* Dish Info */}
            <div className="dish-info">
                <h3 className="dish-title">{dish.name} <img
  className="dish-type"
  src={
    dish.type === "VEG"
      ? "https://upload.wikimedia.org/wikipedia/commons/b/b2/Veg_symbol.svg"
      : "https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg"
  }
  alt={dish.type === "VEG" ? "Veg" : "Non-Veg"}
/>
</h3>
                <p className="dish-desc">
                    {dish.description.length > 50
                        ? dish.description.slice(0, 50) + "..."
                        : dish.description}
                </p>

                {/* Ingredient link */}
                <span
                    className="ingredient-link"
                    onClick={() => onViewIngredients(dish)}
                >
                    Ingredient
                </span>
            </div>
            <div className="image-button-wrapper"> <img
                src={
                    dish.image ||
                    "https://via.placeholder.com/70x70.png?text=Dish"
                }
                alt={dish.name}
                className="dish-image"
            />

                {/* Add / Remove Button */}
                {isSelected ? (
                    <button
                        className="remove-btn"
                        onClick={() => onRemove(dish.id)}
                    >
                        Remove
                    </button>
                ) : (
                    <button
                        className="add-btn"
                        onClick={() => onAdd(dish.id)}
                    >
                        Add +
                    </button>
                )}
            </div>

             {/* Dish Info */}
    
        </div>
    );
}

export default DishCard;
