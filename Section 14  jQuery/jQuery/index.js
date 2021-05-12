// $(document).ready(function(){        // only use if we place the jQuery file in html tag
//     $('h1').css("color",'red');
// });

/*************************************************************** manipulating STYLE ****************************************************************************************/

$("h1");  // select all h1 file, we use css selector in side the ""

//.css method is used to for manipulating styles in jQuery
$("h1").css("color", "blue");   // the first parameter gets what to change and second parameter set the value to a new given value
console.log($("h1").css("color")); //so we can get hold of the current value.

/*************************************************************** manipulating CLASS ****************************************************************************************/

// changing style directly in javascript file is not recommented
$("h1").addClass("big-title");  //changing style by adding class
$("h1").removeClass("big-title"); //changing style by removing class

// we can add or remove multiple class by writing the class with a 'space in between'
$("h1").addClass("big-title green-color"); 
$("h1").removeClass("big-title green-color");

/**************************************************************** manipulating TEXT *****************************************************************************************/

// .text method is used to change the text of the selected elements
$("h1").text("my name is gokul dev"); // change all the h1 tag text to my name is gokul dev
$("button").text("click or not");  // change all the text inside button tag

//.html is used to change the innerHTML of the selected elements
$('h1').html("<em>G</em>okul <em>D</em>ev. <em>P</em>"); // change all innerHTML of h1 tag

/**************************************************************** manipulating ATTRIBUTES ************************************************************************************/

// .attr method is used to manipulate attribute
$('a').attr('href');  // we get the value of current href with one parameter.
$('a').attr('href', 'https://www.google.com');  // we can set the value of current href with two parameter.

// note: we can add all attributes in this way including class.

/**************************************************************** manipulating Event Listeners *******************************************************************************/

// .click for the click eventListener
$('button').click(function(){
    $('button').addClass('green-color big-title');
});

// .keydown for keydown eventListener
$("body").keydown(function(event) {
    console.log(event.key);
});

//example : changing the h1 tag according to key pressed
$("body").keydown(function(event) {
    $("h1").text(event.key);
});

// note: we can also use .on(event,function) function for eventListener the first parameter takes the event and second takes the function.
$("h1").on('mouseover', function() {
    $('h1').css("color", "pink");
});

/************************************************************ Adding and Removing elements with jQuery ***********************************************************************/

// we can use .before to add a element before the current element
$("h1").before("<button>before</button>");

// we can use .after to add a element after the current element
$("h1").after("<button>after</button><br><br>");

// we can use .prepend to add a element before the current element in the content of the current element tag.
$("h1").prepend("<button>prepend</button>");

// we can use .append to add a element after the current element in the content of the current element tag.
$("h1").append("<button>append</button>");

// note : we can remove elements using .remove()
$('h1').remove("button"); //remove all the button tag.

/********************************************************** Website animation with jQuery ************************************************************************************/

$('button').click(function(){
    // .hide() is useful in hiding the element
    $("h2").hide();
    // .toggle() is used to make the element hide and show
    $("h3").toggle();
    // .fadeOut() is used to make the element slowly fade away
    $("h4").fadeOut();
    // .fadeIn() is used to make the element slowly come back
    $("h5").fadeIn();
    // .fadeToggle is used to make a element fadeOut and fadeIn  
    $("h6").fadeToggle();
    // .slideUp() is used to make the text hide by slide up
    $(".p1").slideUp();
    // .slideDown() is used to make the text hide by slide down
    $(".p2").slideDown();
    // .slideToggle() is used to make the text hide by slide up and slide down
    $(".p3").slideToggle();


    // .animate({}) can be used to give custom css, we can only give css with numerical value
    $("h1").animate({opacity: 0.4});

    //note: if we use %, rem e.t.c. we need to place the value inside ""
    
    // we can chain animations in a order
    $(".p4").slideUp().slideDown().fadeOut().fadeIn().animate({opacity: 0.4});
});

/*******************************************************************************************************************************************************************************/