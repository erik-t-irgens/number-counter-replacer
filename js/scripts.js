$(document).ready(function() {
    $("form#counterForm").submit(function(event) {

       // business code
        // This will take user input and store it

        var userNumber = parseInt($("#userNumber").val());
        console.log(userNumber);

        // Start with an empty array that we'll put our results into
        var countedString = [];

        // Use a for loop to cound up to userNumber
        for (let index = 0; index <= userNumber; index++) {
            // Convert the number to a string so we can check whether "1", "2", and "3" are in it
            var counterStep = "" + index;
            // Check 3 first, then 2, then 1 to cascade the rules
            // Pushing the result to the array if it's found
            if (counterStep.indexOf("3") >= 0) {
                countedString.push("I'm sorry, Dave. I'm afraid I can't do that.");
            }
            else if (counterStep.indexOf("2") >= 0) {
                countedString.push("Boop!");
            }
            else if (counterStep.indexOf("1") >= 0) {
                countedString.push("Beep!");
            } else {
                countedString.push(counterStep)
            }
        }

       // front end code

    for (let index = 0; index < countedString.length; index++) {
            setTimeout (function timer(){
                $("#resultant").text(countedString[index]);
            }, index*1000 );        
    }

        console.log(countedString);



        event.preventDefault();
    });
});