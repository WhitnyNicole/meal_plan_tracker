$(document).ready(function() {
  addMealEventListener();
  listenForFormSubmit();
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
        // debugger
        let myMealHTML = mymeal.mealHTML()
        // document.getElementById(`meal-${mealId}`).innerHTML += myMealHTML
        $(`ul#meal-${mealId}`).append(myMealHTML)
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
}

Meal.prototype.mealHTML = function () {
  let mealMealSchedule = this.meal_schedules.map(meal_schedule => {
    return(`
      <ul>
        <li>Eating Time: ${meal_schedule.eating_time}</li>
        <li>Meal Type: ${meal_schedule.meal_type}</li>
      </ul>
    `)
  })
  return (`
    <div class="col-md-8 well">
      <ul> <h5>Meal Info: </h5>
        <li>Meal Id: ${this.id}</li>
        <li>Protein: ${this.protein}</li>
        <li>Vegetable: ${this.vegetable}</li>
        <li>Side: ${this.side}</li>
        <li>Beverage: ${this.beverage}</li>
        <li>Meal Schedule: ${mealMealSchedule}</li>
      </ul>
      </div>
    `)
  }

function listenForFormSubmit() {
  $( ".meal-form" ).submit(function( event ) {
    event.preventDefault();
    debugger
    let values = $(this).serializeArray();
    let posting = $.post('/meal_schedules.json', values);
    posting.done(function(mealData) {
      debugger
      // document.querySelector("div#mealResult").innerHTML =
      $("div#mealResult").html(
      `Meal Created!:
      <h4>Meal: ${mealData.meal_type}</h4>
      <P>Time: ${mealData.eating_time}</p>
      <p>Protein: ${mealData.meal.protein}</p>
      <p> Veggies: ${mealData.meal.vegetable}</p>
      <p>Side: ${mealData.meal.side}</p>
      <p>Beverage: ${mealData.meal.beverage}</p>
      `)
    })
  })
}
