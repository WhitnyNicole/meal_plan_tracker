$(document).ready(function() {
  addMealEventListener();
  listenForNewMealFormClick();
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
        document.getElementById(`meal-${mealId}`).innerHTML = myMealHTML
      })
  });
}

function listenForNewMealFormClick(){
  $('button#meal-data').on('click', function (event) {
    event.preventDefault()
    let newMealForm = Meal.newMealForm()
    document.querySelector('div#new-meal-form-div').innerHTML = newMealForm
    // debugger
  })
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
        <li>Protein: ${this.protein}</li>
        <li>Vegetable: ${this.vegetable}</li>
        <li>Side: ${this.side}</li>
        <li>Beverage: ${this.beverage}</li>
        <li>Meal Schedule: ${mealMealSchedule}</li>
      </ul>
      </div>
    `)
  }

//step 1 hijack

function listenForFormSubmit() {
  $( "form" ).submit(function( event ) {
    event.preventDefault();
    // console.log("clicked")
    debugger

    var values = $(this).serializeArray();
    //submit to meal_schedules/id -> show page
    var posting = $.post('/meal_schedules.json', values);
    posting.done(function(data) {
      console.log(data)
      debugger
      var mealData = data;
      console.log(["meal"]["protein"]);
      document.querySelector("div#mealResult").innerHTML +=
      $("#mealProtein").text(mealData["meal"]["protein"]);
      $("#mealVegetable").text(mealData["meal"]["vegetable"]);
      $("#mealSide").text(mealData["meal"]["side"]);
      $("#mealBeverage").text(mealData["meal"]["beverage"]);
      $("#mealEatingTime").text(mealData["eating_time"]);
      $("#mealMealType").text(mealData["meal_type"]);
    })
  })
}
//step 2 get the information

// jquery serialize
// $( this ).serializeArray()


//step 3 send the information to Rails API / fetch


//step 4 handle the response
// <div id="mealResult">
//   <h2 id="mealProtein"></h2>
//   <p id="mealVegetable"></p>
// </div>


  //  can render the form with rails and hijack the submission or do a listener to a click request on the button
  //   static newMealForm(){
  //     return (`
  //     <div class="col-md-8 well">
  //     <strong>New Meal: </strong>
  //       <form>
  //         Protein: <input type="text" name="protein"></input><br>
  //         Vegetable: <input type="text" name="vegetable"></input><br>
  //         Side: <input type="text" name="side"></input><br>
  //         Beverage: <input type="text" name="beverage"></input><br>
  //         <input type="submit" />
  //       </form>
  //       </div>
  //       `)
  //   }
  // }

  //new form submit

  // $(function() {
  //   $('form').submit(function(event) {
  //     event.preventDefault();
  //     alert("new meal created")
  //   })
  // })
  ////
