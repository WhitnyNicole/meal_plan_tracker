$(document).ready(function() {
  addMealPlanEventListener();
  addUpVoteEventListener();
  addDownVoteEventListener();
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

//when user clicks up vote it adds 1 to this meal plan
//when user clicks down vote it takes away 1

//need to access Meal Plan rating attribute
//how to get access to other objects in JS

function addUpVoteEventListener() {
  var counter = 0;
  $("button#up").on('click', function(event) {
    event.preventDefault();
    counter++;
    // // console.log('clicked')
    // debugger
    $("#plus").text(counter);

  })
}

function addDownVoteEventListener() {
  var counter = 0;
  $("button#down").on('click', function(event) {
    event.preventDefault();
    counter --;
    console.log('clicked')
    // debugger
    $("#minus").text(counter);
  })
}

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
