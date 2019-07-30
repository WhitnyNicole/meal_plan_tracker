
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
    })
});
}


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
