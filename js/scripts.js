$(document).ready(function() {
    $("form#counterForm").submit(function(event) {

        // This will take user input and store it

        var userNumber = parseInt($("#userNumber").val());
        console.log(userNumber);


        //  This logic gathers userNumber and then creates an array full of every number below it, including zero. 
        debugger;
        var countedString = [];
        var nestCountedString = [];
        for (let index = 0; index <= userNumber; index++) {
            countedString.push(index);
            nestCountedString.push([index]);
        }



        console.log(countedString);
        console.log(nestCountedString);

    //   First attempt to change integer values within the nested array of nestCountedString into String values.
        // nestCountedString.map(String);
        // console.log(nestCountedString);
   


        console.log(converter(nestCountedString));



        event.preventDefault();
    });
});