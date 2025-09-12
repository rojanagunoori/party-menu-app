import React from "react";
import "./ReviewPage.css";

function ReviewPage({ selectedDishes, onBack }) {
  return (
    <div className="review-page">
      {/* ←🔙 Back button */}
      <button className="back-btn" onClick={onBack}>
          <h2>🔙 Ingredient list</h2>
      </button>

      

      {selectedDishes.length === 0 ? (
        <p>No dishes selected.</p>
      ) : (
        selectedDishes.map((dish) => (
          <div key={dish.id} className="review-dish">
            <div className="review-header">
            <div>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
              </div>
              <img
                src={
                  dish.image ||
                  "https://via.placeholder.com/100x100.png?text=Dish"
                }
                alt={dish.name}
                className="review-dish-img"
              />
             
            </div>

            <h4>Ingredients</h4>
            <p>For 2 people</p>
            <ul className="ingredient-list">
              {dish.ingredients.map((ing, i) => (
                <li key={i} className="ingredient-item">
                  <span>{ing.name}</span>
                  <span>{ing.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default ReviewPage;
