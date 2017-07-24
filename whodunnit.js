// Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();
//The output is "My name is Keith". This is because 'name' is a global variable accessible from within functions such as 'printName()'.




// Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
//The output is 3. Although score is initially set to 5, however a new local variable called score is also created within the function result() when it is called. This score is set to 3 and it is this score variable which takes priority within the function.





// Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();
//Here we get 0: Ducks 1: Dogs 2: Lions. This is because within the listAnimals function myAnimals is redefined to an array of those animals. A for loop then creates a variable, 'i' which increases by one after each iteration and prints it to the console next to the animal at that index in the array.




// Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
//In this case the first output will by 'Suspects include: Jay, Val, Harvey, Rick'. A local variable suspectThree is defined as 'Harvey' once the allSuspects() function is called, but only locally ie within the function. This is why the second output is 'Suspect three is:Keith', because we are printing suspectThree outside the allSuspects() function where we use the global suspectThree set to 'Keith'.




// Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
//The name of the detective object starts out as 'Ace Ventura'. The variable function detectiveInfo() is printed to the console. To get this result, first the function reassigns the name of the detective object to 'Poirot', then it returns the function printName(), which in turn returns the newly assigned name. This is what is printed to the console (ie 'Poirot').




// Episode 6

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);






// Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.