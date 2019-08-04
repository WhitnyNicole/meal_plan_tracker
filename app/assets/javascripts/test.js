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



///test code for meals index

// function getMealsEventListener() {
// $('.dropdown-toggle').on('click', function(event) {
//   // const mealId = $(this).data("mealId");
//   event.preventDefault();
//   fetch('/meals')
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//     let allmeals = new Meals(data)
//     debugger
//     let myMealsHTML = allmeals.mealHTML()
//     // document.getElementsByClassName('myMeal').innerHTML += myMealHTML
//     // $(`ul#meal-33`).html(data)
//     // document.getElementById(`meal-33`).innerHTML = myMealHTML
//     document.getElementById(`meal-${mealId}`).innerHTML = myMealsHTML
//     })
// });
// }
