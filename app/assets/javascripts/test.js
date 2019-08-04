//
// class Menu {
//   constructor() {
//     this.baseUrl = 'http://localhost:3000/meal_plans.json'
//     }
//
//
//
//   getMeals() {
//     return fetch(this.baseUrl).then(res => res.json())
//   }
// }
//
// class Meals {
//   constructor() {
//     this.meals = []
//     this.menu = new Menu()
//     this.fetchAndLoadMeals()
//     }
//
//
//
//   fetchAndLoadMeals() {
//     this.menu
//       .getMeals()
//       .then(meals => {
//         console.log(meals)
//         meals.forEach(meal => this.meals.push(new Plan(meal)))
//       })
//       .then() => {
//         this.render()
//       })
//
//   class Plan {
//         constructor(mealJSON) {
//           this.id = mealJSON.id
//           this.protein = mealJSON.protein
//           }
//         }
//
//   render() {
//     const myMealPlanHTML = mymealplan.mealPlanHTML()
//     document.getElementById(`all-meals-div`).innerHTML = myMealPlanHTML
//   }
// }
