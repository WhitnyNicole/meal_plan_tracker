$(document).ready(function() {
  addMealEventListener();
  listenForFormSubmit();
})
//^ document.ready (jquery browser event) refers to once the whole page loads
//then calls on the function

//listening on the DOM for events (click) to happen
function addMealEventListener() {
  //jquery selector (.class) and event handler (.on) and mouse event (.click), event object (prevent default)
  //once click occurs, fires the function and pass the event of that click to the function
$('.myMeal').on('click', function(event) {
  const mealId = $(this).data("mealId");
  event.preventDefault();
  //prevent default, prevent page refresh
  fetch(`/meals/${mealId}.json`)
    .then(function(response) {
      return response.json();
    })
      .then(function(data) {
        let mymeal = new Meal(data)
        //data = json data
        debugger
        //turn json data into string oof HTML to put on webpage/DOM
        //javascript .innerHTML -> I am adding/appending to whatever HTML is there using +=
        //to use jquery could use append() method
        let myMealHTML = mymeal.mealHTML()
        // document.getElementById(`meal-${mealId}`).innerHTML += myMealHTML
        $(`ul#meal-${mealId}`).append(myMealHTML)
      })
  });
}

// instance method, takes in an object,
// creating an instance of the post,
// turns it into JS model object
// has array of meal schedules
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

//custom function that allows you to put HTML onto the page/DOM
//calling the Meal class
// this = instance of the post
// .map method creates a new array with the results
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
  $( "form" ).submit(function( event ) {
    event.preventDefault();
    debugger
    let values = $(this).serializeArray();
    //submit to meal_schedules/id -> show page
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
