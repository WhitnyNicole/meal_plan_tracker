$(document).ready(function() {
  addMealPlanEventListener();
})

class MealPlan {
  constructor(data) {
    this.id = data.id
    this.goal = data.goal
    this.description = data.description
    this.meals = data.meals
  }
}

function addMealPlanEventListener() {
$('.mealPlans').on('click', function(event) {
  event.preventDefault();
  fetch(`/meal_plans.json`)
    .then(function(response) {
      return response.json();
    })
      .then(function(meal_plans) {
        debugger
        console.log(meal_plans)
        meal_plans.forEach(function(data) {
        let mymealplan = new MealPlan(data)
        let myMealPlanHTML = mymealplan.showHTML()
        debugger
        document.getElementById(`all-meals-div`).innerHTML = myMealPlanHTML
      })
    });
  })
}

MealPlan.prototype.showHTML = function () {
  return this.meals.map(meal => {  return (`
    <div>
      <li> Protein: ${meal.protein} </li>
      <li> Vegetable: ${meal.vegetable} </li>
      <li> Side: ${meal.side} </li>
      <li> Beverage: ${meal.beverage} </li>
    </div>`
  )})
}
