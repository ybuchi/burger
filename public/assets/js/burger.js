$(function(){
$("#addburger").on("click", function(event){
    event.preventDefault();
    //grab the text input and create a new variable that will be sent back to the server to be inputted into the database
    console.log("You clicked");
    console.log($("#burgertext").val().trim())
    //create the burger but make sure to set its devoured status as false
    var newBurger = {
        burger_name: $("#burgertext").val().trim(),
        devoured: 0
    };
    console.log(newBurger);

    //create new burger object that will be sent back to the server
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function(){
            console.log("created new burger");
            location.reload();
        }
    );
});

//When the user clicks devour, UPDATE the data and refresh the page to display it correctly
$(".burger-devour").on("click", function(event){
    var id = $(this).data("id");
    console.log(id);
    var newDevour = {
        devoured: true
    }

$.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevour
}).then(
    function(){
        console.log("changed burger status to " + newDevour);
        //reload the page
        location.reload();
    }
);

});//end of click event

});//end of initial function