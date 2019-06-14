$(document).ready(function() {
    $("form#counterForm").submit(function(event) {

        // This will take user input and store it

        var userNumber = parseInt($("#userNumber").val());
        console.log(userNumber);


        //  This logic gathers userNumber and then creates an array full of every number below it, including zero. 
        debugger;
        var countedString = [];


        for (let index = 0; index <= userNumber; index++) {
            countedString.push("" + index); // Adds the numbers 0 to userNumber via index, while making them strings instead of integers, to my array.
            // this for loop looks at each position of the array, then look inside each string to see if there's a 1 2 or 3. If there is, (>= 0 .indexOf), it will replace the entire index in the array with the required message.
            for (let jindex = 0; jindex < countedString.length; jindex++) {
                if (countedString.indexOf("3") >= 0) {
                    countedString[jindex] = "I'm sorry, Dave. I'm afraid I can't do that.";
                }  else if (countedString.indexOf("2") >= 0) {
                    countedString[jindex]= "Boop!";
                }  else if (countedString.indexOf("1") >= 0) {
                    countedString[jindex] = "Beep!";
                }
            }
        }



        console.log(countedString);



        event.preventDefault();
    });
});