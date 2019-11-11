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

//Send the PUT request

});//end of initial function