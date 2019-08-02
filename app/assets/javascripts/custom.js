
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
    // document.getElementsByClassName('myMeal').innerHTML += myMealHTML
    $(`ul#meal-33`).html(data) 
    })
});
}

class Meal {
  constructor(data) {
    this.id = data.id
    this.protein = data.protein
    this.vegetable = data.vegetable
    this.side = data.side
    this.beverage = data.beverage
    this.meal_schedules = data.meal_schedules
  }

  static newMealForm(){
    return (`
    <strong>Add New Meal</strong>
      <form>
        <input type="text" name="protein"></input><br>
        <input type="submit" />
      </form>
      `)
  }
}




  Meal.prototype.mealHTML = function () {
    return (`
      <div>
        <h3>${this.protein}</h3>
        <h3>${this.vegetable}</h3>
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
