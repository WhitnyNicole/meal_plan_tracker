$(document).ready(function() {
  addMealPlanEventListener();
})

function addMealPlanEventListener() {
$('button#meals-data').on('click', function(event) {
  const mealPlanId = $(this).data("mealPlanId");
  event.preventDefault();
  fetch(`/meal_plans/${this.id}.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
    let mymealplan = new MealPlan(data)
    debugger
    let myMealPlanHTML = mymealplan.mealPlanHTML()
    // document.getElementsByClassName('myMeal').innerHTML += myMealHTML
    // $(`ul#meal-33`).html(data)
    document.getElementById(`meal-33`).innerHTML = myMealHTML
    })
});
}


class MealPlan {
  constructor(data) {
    this.id = data.id
    this.goal = data.goal
    this.description = data.description
  }
}


  MealPlan.prototype.mealHTML = function () {
    return (`
      <ul>
        <li>Goal: ${this.goal}</li>
        <li>Description: ${this.description}</li>
      </ul>
      `)
  }
