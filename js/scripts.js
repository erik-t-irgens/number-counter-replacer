$(document).ready(function() {
    $("form#counterForm").submit(function(event) {

        // This will take user input and store it

        var userNumber = parseInt($("#userNumber").val());
        console.log(userNumber);


        //  This logic gathers userNumber and then creates an array full of every number below it, including zero. 
        var countedString = [];

        for (let index = 0; index <= userNumber; index++) {
            countedString.push(index);
        }

        console.log(countedString);





        event.preventDefault();
    });
});