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
  // const mealPlanId = $(this).data("mealPlanId");
  event.preventDefault();
  // fetch(`/meal_plans.json`)
  fetch(`/meal_plans.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(meal_plans) {
      console.log(meal_plans)
      meal_plans.forEach(function(data) {
      // meal_plans.forEach(meal_plan => this.meal_plans.push(meal_plan))
    // let mymealplan = new MealPlan(meal_plans[0])
    let mymealplan = new MealPlan(data)

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
})
}





  MealPlan.prototype.mealPlanHTML = function () {

      return (`
        <div class="col-md-8 well">
        <ul>
          <li>Goal: ${this.goal}</li>
          <li>Description: ${this.description}</li>
        </ul>
        `)
    }

    //this works to show meal plans and meals 59-79
  //   let mealPlanMeals = this.meals.map(meal => {
  //
  //     return(`
  //       <div class="col-md-8 well">
  //         <p> Protein: ${meal.protein}<p>
  //         <p> Vegetable: ${meal.vegetable}<p>
  //         <p> Side: ${meal.side}<p>
  //         <p> Beverage: ${meal.beverage}<p>
  //       </div>
  //       `)
  //     })
  //
  //   return (`
  //     <div class="col-md-8 well">
  //     <ul>
  //       <li>Goal: ${this.goal}</li>
  //       <li>Description: ${this.description}</li>
  //       <li> All Meals: ${mealPlanMeals}</li>
  //     </ul>
  //     `)
  // }


//sample code
// $(function() {
//   $('.mealPlans').on('click', function(event) {
//     $.ajax({
//       method: "GET",
//       url: this.href
//     }).done(function(data){
//       console.log(data)
//     });
//     event.preventDefault
//   })
// })
