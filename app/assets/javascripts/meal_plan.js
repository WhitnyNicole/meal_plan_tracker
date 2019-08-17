$(document).ready(function() {
  addMealPlanEventListener();
  addThumbsUpEventListener();
  addThumbsDownEventListener();
})

class MealPlan {
  constructor(data) {
    this.id = data.id
    this.goal = data.goal
    this.description = data.description
    this.meals = data.meals
    this.likes = data.likes
  }
}

function addMealPlanEventListener() {
$('.mealPlans').on('click', function(event) {
  event.preventDefault();
  // const mealPlanId = $(this).data("mealPlanId")
  // debugger
  fetch(`/meal_plans.json`)
  // fetch(`/meal_plans/${mealPlanId}/meal_schedules.json`)
    .then(function(response) {
      // debugger
      return response.json();
    })
      .then(function(meal_plans) {
        // debugger
        console.log(meal_plans)
        meal_plans.forEach(function(data) {
        let mymealplan = new MealPlan(data)
        let myMealPlanHTML = mymealplan.showHTML()
        // debugger
        // let mealElement = document.getElementById(`all-meals-div`)
        let mealElement = $(`div#all-meals-div`)
        // mealElement.innerHTML += myMealPlanHTML
        mealElement.append(myMealPlanHTML)
      })
    });
  })
}

// MealPlan.prototype.showHTML = function () {
//   return this.meals.map(meal => {  return (`
//     <div class="col-md-8 well">
//       <li> Protein: ${meal.protein} </li>
//       <li> Vegetable: ${meal.vegetable} </li>
//       <li> Side: ${meal.side} </li>
//       <li> Beverage: ${meal.beverage} </li>
//       </ul>
//     </div>`
//   )})
// }


MealPlan.prototype.showHTML = function () {
  let mealInfo = this.meals.map(meal => {  return (`
    <div class="col-md-8 well">
      <li> Meal Plan Id: ${this.id} </li>
      <li> Protein: ${meal.protein} </li>
      <li> Vegetable: ${meal.vegetable} </li>
      <li> Side: ${meal.side} </li>
      <li> Beverage: ${meal.beverage} </li>
      </ul>
    </div>`
  )})
  return `<h3>${this.goal} - ${this.description}</h3>` + mealInfo
}

let counter = 0;
function addThumbsUpEventListener() {

$('i.glyphicon.glyphicon-thumbs-up').on('click', function() {
    // event.preventDefault();
    counter++;
    $("div#likes").html("you liked this meal");
  })
}

function addThumbsDownEventListener() {
let counter = 0;
$("i.glyphicon.glyphicon-thumbs-down").on('click', function(event) {
  // event.preventDefault();
  counter++;
  })
}
