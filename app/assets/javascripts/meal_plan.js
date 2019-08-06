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
        let mealElement = document.getElementById(`all-meals-div`)
        mealElement.innerHTML = myMealPlanHTML
      })
    });
  })
}

MealPlan.prototype.showHTML = function () {
  return this.meals.map(meal => {  return (`
    <div class="col-md-8 well">
      <ul> <h4> Meals in Mealplan ${this.goal} - ${this.description} </h4>
      <li> Protein: ${meal.protein} </li>
      <li> Vegetable: ${meal.vegetable} </li>
      <li> Side: ${meal.side} </li>
      <li> Beverage: ${meal.beverage} </li>
      </ul>
    </div>`
  )})
}


//plan.forEach(function(element) {
  // console.log(element);
// });
