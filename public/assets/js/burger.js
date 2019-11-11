$(function(){
$("#addburger").on("click", function(){
    //grab the text input and create a new variable that will be sent back to the server to be inputted into the database
    console.log("You clicked");
    var id = $(this).data("id");
    var newBurger = $(this).data("newburger");
    console.log("NewBurger");
    var newBurgerEntry = {
        burger_name: newBurger
    };

//Send the PUT request

$.ajax("/")
});
});//end of initial function