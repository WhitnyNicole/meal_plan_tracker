
// $(document).on('turbolinks:load', function() {
//   addMealEventListener();
// })
$(document).ready(function() {
  addMealEventListener();
})

function addMealEventListener() {
$('.myMeal').on('click', function(event) {
  const mealId = $(this).data("mealId");
  event.preventDefault();
  fetch(`/meals/${mealId}.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
    let mymeal = new Meal(data)
    debugger
    let myMealHTML = mymeal.mealHTML()
    document.getElementById('ul meal').innerHTML === myMealHTML
    })
});
}

class Meal {
  constructor(id, protein, meal_schedules) {
    this.id = id
    this.protein = protein
    this.meal_schedules = meal_schedules
  }
}

  Meal.prototype.mealHTML = function () {
    let mealSchedules = this.meal_schedules.map(meal_schedules => {
      return (`
        <p>$(meal_schedules.eating_time)</p>
        `)
    })

    return (`
      <div>
        <h3>$(this.protein)</h3>
        <h3>$(mealSchedules)</h3>
      </div>
      `)
  }




//
// $(document).ready(function() {
//   addMealEventListener();
// })
//
// function addMealEventListener() {
// $('.myMeal').on('click', function(event) {
//   const mealId = $(this).data("mealId");
//   event.preventDefault();
//   getMeals()
//   console.log("clcike")
// })
// }
//
// function getMeals() {
//   fetch(`/meals/${mealId}.json`)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//
//     console.log("working!", data)
//     })
// }



// `<li>${meal.protein}</li>
// <li>${meal.vegetable}%></li>
// <li>${meal.side}</li>
// <li>${meal.beverage_ounces}</li>
// <li>${meal.beverage}</li>
// <li>${meal.day}</li>
// <li>${meal.favorite}</li>`
//
// function capitalize(string) {
//   let newString = string.split("")
//   newString[0] = newString[0].toUpperCase();
//   return newString.join("")
// }
//
// capitalize()
//



// $(document).on('turbolinks:load', function() {
//   $('.my_meal').on('click', function(event) {
//     const mealdata = $(this).data(".my_meal");
//
//     fetch(`/meals/${id}`)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data){
//       $(".my_meal").html(`
//         <h1> Protein: $()
//         `)
//     })
//   });
// })


// $(document).on('turbolinks:load', function() {
//   alert("hello");
// });
//
// $(document).ready(function() {
//   alert("hello again");
// });
