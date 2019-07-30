Requirements

1. Must translate JSON responses from your Rails app into JS Model Objects using either ES6 class or constructor syntax. The Model Objects must have at least one method on the prototype
2. Must render at least one index page (index resource - 'list of things') via a JS and an Active Model Serialization JSON backend
3. Must render at least one show page (show resource = 'one specific thing') via JS and an Active Model Serialization JSON backend
4. Your Rails app must dynamically render on the page at least one serialized has_many relationship through JSON using JS
5. Must use your Rails app to render a form for creating a resource submitted dynamically and displayed through JS and a JSON without page refresh



//this is project requirement 1
// 1. hijack form submit. Go through process of submitting request to Rails API to create the object
// 2. with the API response. Use class syntax to create a dog class in JS . Review this section: Constructor - OOJS
// 3. Prototype method (instance function), create a function for objects that formats how you display the new data


// This is project requirement 2
// hijack click request
// JS is going to an index route
// i.e for dog owner, you would see a button on the owner show page to "show all pets"


// This is project requirement 3
// this is one that you can use for the index page to have a pop up to show what would normally be on the show page


//This is project requirement 4
// using has_many association
// AMS, serializer
// example "view my dogs"


//This is project requirement 5
//tied in with number 1
// you can use Rails to render the form. We are hijacking the submission 
