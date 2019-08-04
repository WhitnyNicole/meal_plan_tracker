$(document).ready(function() {
  addMealPlanEventListener();
})

function addMealPlanEventListener() {
$('.mealPlans').on('click', function(event) {
  // const mealPlanId = $(this).data("mealPlanId");
  event.preventDefault();
  // fetch(`/meal_plans.json`)
  fetch(`/meal_plans.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
    let mymealplan = new MealPlan(data[0])
    // let mymealplan = new MealPlan(data[0], data[1], data[2])
    // console.log(data[0])
    // console.log(data[1])
    // console.log(data[2])
    debugger
    let myMealPlanHTML = mymealplan.mealPlanHTML()
    // document.getElementsByClassName('myMeal').innerHTML += myMealHTML
    // $(`ul#meal-33`).html(data)
    document.getElementById(`all-meals-div`).innerHTML = myMealPlanHTML
    })
});
}


class MealPlan {
  constructor(data) {
    this.id = data.id
    this.goal = data.goal
    this.description = data.description
    this.meals = data.meals
  }
}


  MealPlan.prototype.mealPlanHTML = function () {
    let mealPlanMeals = this.meals.map(meal => {

      return(`
        <div class="col-md-8 well">
          <p> Protein: ${meal.protein}<p>
          <p> Vegetable: ${meal.vegetable}<p>
          <p> Side: ${meal.side}<p>
          <p> Beverage: ${meal.beverage}<p>
        </div>
        `)
      })

    return (`
      <div class="col-md-8 well">
      <ul>
        <li>Goal: ${this.goal}</li>
        <li>Description: ${this.description}</li>
        <li> All Meals: ${mealPlanMeals}</li>
      </ul>
      `)
  }
