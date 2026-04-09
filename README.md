# 🍽️ Party Menu Selection App (TheChefkart Assignment)

![App Preview](public/image.png)

🚀 **Live Demo**: [party-menu-app.surge.sh](https://party-menu-app.surge.sh/)  
📦 **Repository**: [GitHub Repo](https://github.com/rojanagunoori/party-menu-app.git)

---

## ⚙️ Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/rojanagunoori/party-menu-app.git
cd party-menu-app
```
### Install Dependencies
```bash
npm install
```
### Run Locally
```bash
npm start
```
The app will open at 👉 http://localhost:3000

----
## 🏗️ Project Structure
```bash
party-menu-app/
└── src/
    ├── components/
    │   ├── DishCard.js
    │   ├── DishList.js
    │   ├── Filters.js
    │   └── IngredientModal.js
    ├── data/
    │   └── mockDishes.js
    ├── App.css
    └── App.js
```

---

## 📦 Deployment (Surge.sh)
This project is deployed using Surge.

### Steps:
#### Install Surge globally (only once):

```bash
npm install --global surge
```
#### Build the app for production:
```bash
npm run build
```
#### Deploy with Surge:
```bash
surge ./build party-menu-app.surge.sh
Open the live app at 👉 party-menu-app.surge.sh
```
---

## 🎨 Styling (Example CSS)

```bash
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

.dish-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```
---

## 🔄 App Flow
- User selects a category → Updates selectedCategory in state

- App filters dishes → Passes filteredDishes to DishList

- User searches or toggles Veg-only → State updates & UI re-renders

- Add/Remove dish → Updates selectedDishes state

- Ingredients → Opens modal with detailed dish info

---

## ✅ Deliverables
- Public GitHub repository with full ReactJS code

- Functional web app with:

- Dish listing & categories

- Search + Veg/Non-Veg filter

- Add/Remove selection

- Ingredient modal

- Deployment live on Surge.sh

---

## 🙋‍♀️ Author / Contact

**Nagunoori Roja**  

- 📧 Email: [nagunooriroja@gmail.com](mailto:nagunooriroja@gmail.com)  
- 🌐 GitHub: [https://github.com/rojanagunoori](https://github.com/rojanagunoori)  
- 🌐 LinkedIn: [https://www.linkedin.com/in/nagunoori-roja-51b936267/](https://www.linkedin.com/in/nagunoori-roja-51b936267/)  
- 🌐 Personal Portfolio: [portfolio-roja.netlify.app](https://portfolio-roja.netlify.app/)  
- 🌐 LeetCode: [https://leetcode.com/u/dSdsi6XkI8/](https://leetcode.com/u/dSdsi6XkI8/)  
- 🌐 Kaggle: [https://www.kaggle.com/nagunooriroja](https://www.kaggle.com/nagunooriroja)  

---

👉 If you replace your current README with this cleaned-up version, all **links will be clickable**, code will render in blocks, and GitHub will format it properly.

Do you want me to also add **emoji icons** (✅, ⚡, 📦, 🎨) to each section heading to make it look modern and attractive?
