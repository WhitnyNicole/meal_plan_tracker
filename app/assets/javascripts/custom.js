
// $(document).on('turbolinks:load', function() {
//   addMealEventListener();
// })
$(document).ready(function() {
  addMealEventListener();
})

function addMealEventListener() {
$('#myMeal').on('click', function(event) {
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
