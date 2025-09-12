import React from "react";

function Filters({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  onVegOnlyChange,
}) {
  const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

  return (
    <div className="filters">
      {/* Category Tabs */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === activeCategory ? "active" : ""}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* Veg Only Toggle */}
      <label>
        <input
          type="checkbox"
          checked={vegOnly}
          onChange={(e) => onVegOnlyChange(e.target.checked)}
        />
        Veg Only
      </label>
    </div>
  );
}

export default Filters;
