/* 
==> Adding an event Listener - It is used to call a function when a event is occured.
-->SYNTAX: element.addEventListener(event, function, useCapture);
*/
// Example:
function handleClick() {
    alert("I got Clicked!")
}
document.querySelector(".w").addEventListener("click",handleClick)

/*
An anonymous function is a function that was declared without any named identifier to refer to it. 
As such, an anonymous function is usually not accessible after its initial creation.
function () {
    alert("I got Clicked!")
}

We can also use anonymous function in Adding an event Listener
*/
document.querySelector(".w").addEventListener("click",function() {
    alert("I got Clicked!")
})

//we can also us 'keydown' as parameter for taking keyboard press as input.
document.addEventListener('keydown', function (event) {
    makeSound(event.key);
}
); 

/********************************************************************************************************************/
/*
==> Higher Order Function and Passing Functions as Args.
we can pass functions inside a anouther function as arguments

the function as parameter is called callback function and the other function is called higher order function.

example:
function add(a, b){
    return a+b;
}

function calculate(a,b,operation) {
    rreturn operation(a,b);
}

in the example 
operation - callbackfunction
calculate - higher order function
*/
/********************************************************************************************************************/

/*
==> Playing audios on a website.
let audio = new Audio('audio_path');
audio.play();
*/

/*
this - used to find the identity of the current element of the selected object.
*/

/***********************************************************************************************************************/

/*
==> Constructor Function - It is a function that create a instance of a class which is typically called object.
                         - The use of constructor is to create a object and set values if properties present
						   in object.
						 - Name of constructor need function need to be capitalized  
						 - When creating objects using constructor we use 'new' keyword.
						   
Syntax: Creating a constructor function.
fuction FunctioName(property_1, property_2, ..., property_n) {
	this.property_1 = property_1_name,
	this.property_2 = property_2_name,
	...,
	this.property_n = property_n_name
};

syntax: creating a new object using constructor.
var objectName1 = new FunctioName(property_1_value,property_2_value,...,property_n_value);

*/


/*
==> OBJECTS - a collection of properties, associated between a name(key) and value. 
              the properties that are function agre called Methods.
example:
var student1 = {
	name: "std1",
	age: 15,
	class: "A"
};

now we can access the student property(like name, age, class) as
student1.name
*/

/*
==> METHODS - they are function inside a constructor
Syntax:
fuction FunctioName(property_1, property_2, ..., property_n) {
	this.property_1 = property_1_name,
	this.property_2 = property_2_name,
	...,
	this.property_n = property_n_name,
	this.method_1 = function() {
		// code body of function.
	}
};

we can access method as 
object.method_1();

Example:
function Player(name,age,level,gameclass,is_online) {
  this.name=name,
  this.gre=age,
  this.level=level,
  this.class=gameclass,
  this.is_online=is_online
  this.level_up=function() {
    this.level++;
  }
};

*/

/**************************************************************************************************************************/

/*
==> SWITCH - look the expression , if its case 1 do code block in that ... if not in any case do default code block

Syntax:
switch(expression){
	case 1:
	    code block
	    break;
	case 2 :
	    code block
		break;
	default:
	    code block
}
*/

/**************************************************************************************************************************/

/*
==> setTimeout - function used for delay
syntax:
setTimeout(function() {}, n miliseconds);

here the function runs the function () after n miliseconds
*/

/**************************************************************************************************************************/