$(document).ready(function() {
    $("form#counterForm").submit(function(event) {

        // This will take user input and store it

        var userNumber = parseInt($("#userNumber").val());
        console.log(userNumber);


        //  This logic gathers userNumber and then creates an array full of every number below it, including zero. 
        debugger;
        var countedString = [];

debugger
        for (let index = 0; index <= userNumber; index++) {
            countedString.push("" + index); // Adds the numbers 0 to userNumber via index, while making them strings instead of integers, to my array.
            if (countedString.indexOf("3") >= 0) {
                var replace3 = countedString[index].indexOf("3");
                console.log(replace3);
                console.log(countedString[replace3]);
                countedString[index, replace3] = "I'm sorry, Dave. I'm afraid I can't do that.";
                
            }  
            if (countedString.indexOf("2") >= 0) {
                var replace2 = countedString[index].indexOf("2");
                countedString[index, replace2]= "Boop!";
               
            }  
            if (countedString.indexOf("1") >= 0) {
                var replace1 = countedString[index].indexOf("1");
                countedString[index, replace1] = "Beep!";
               
            }
        
        }



        console.log(countedString);



        event.preventDefault();
    });
});