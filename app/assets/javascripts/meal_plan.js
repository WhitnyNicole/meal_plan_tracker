$(document).ready(function() {
  addMealPlanEventListener();
})

class MealPlans {
constructor() {
  this.meal_plans = []
  }
}

function addMealPlanEventListener() {
$('.mealPlans').on('click', function(event) {
  // const mealPlanId = $(this).data("mealPlanId");
  event.preventDefault();
  // fetch(`/meal_plans.json`)
  fetch(`/meal_plans.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(meal_plans) {
      console.log(meal_plans)
      // meal_plans.forEach(meal_plan => this.meal_plans.push(meal_plan))
    let mymealplan = new MealPlan(meal_plans[0])

    //testing out this code
    // data.map(mealPlan => {
    //   const newMealPlan = new MealPlan(mealPlan)
    //   const newMealPlanHTML = newMealPlan.mealPlanHTML()

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
  constructor(meal_plans) {
    this.id = meal_plans.id
    this.goal = meal_plans.goal
    this.description = meal_plans.description
    this.meals = meal_plans.meals
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
