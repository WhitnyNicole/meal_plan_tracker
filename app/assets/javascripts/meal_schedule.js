$(document).ready(function() {
  addMealScheduleEventListener();
})

class MealSchedule {
  constructor(data) {
    this.id = data.id
    this.eating_time = data.eating_time
    this.meal_type = data.meal_type
    this.meal = data.meal
  }
}

function addMealScheduleEventListener() {
$('.mealSchedule').on('click', function(event) {
  event.preventDefault();
  // const mealPlanId = $(this).data("mealPlanId")
  // debugger
  fetch(`/meal_schedules.json`)
  // fetch(`/meal_plans/${mealPlanId}/meal_schedules.json`)
    .then(function(response) {
      // debugger
      return response.json();
    })
      .then(function(meal_schedules) {
        // debugger
        // console.log(meal_schedules)
        meal_schedules.forEach(function(meal_schedules) {
        let mymealschedule = new MealSchedule(meal_schedules)
        let myMealScheduleHTML = mymealschedule.showHTML()
        // debugger
        let mealScheduleElement = document.getElementById(`all-meal-schedules-div`)
        // let mealScheduleElement = $(`div#all-meal-schedules-div`)
        mealScheduleElement.innerHTML += myMealScheduleHTML
        // mealScheduleElement.html(myMealScheduleHTML)
      })
  });
})
}

MealSchedule.prototype.showHTML = function () {
  return (`
    <div class="col-md-8 well">
      <li> Meal Protein: ${this.meal.protein} </li>
      <li> Meal Schedule Number: ${this.id} </li>
      <li> Eating time: ${this.eating_time} </li>
      <li> Meal Type: ${this.meal_type} </li>
      </ul>
    </div>`
  )}


// MealPlan.prototype.showHTML = function () {
//   let mealInfo = this.meals.map(meal => {  return (`
//     <div class="col-md-8 well">
//       <li> Protein: ${meal.protein} </li>
//       <li> Vegetable: ${meal.vegetable} </li>
//       <li> Side: ${meal.side} </li>
//       <li> Beverage: ${meal.beverage} </li>
//       </ul>
//     </div>`
//   )})
//   return `<h3>${this.goal} - ${this.description}</h3>` + mealInfo
// }
