# _Number Counter and Replacer_

#### _Counts up to user generated integer and then replaces certain numbers with provided phrases, June 14th, 2019_

#### By _**Erik Irgens**_

## Description

_This program should take a user generated input, in the form of an integer number, and then post a string of numbers counting up to that user generated number. However, certain numbers will be replaced with designated strings - such as Beep!, Boop!, and "I'm sorry, Dave. I'm afraid I can't do that.". These will be displayed on a timer  Otherwise, the user may opt to look at what is happening between the numbers. Buttons can display what is being generated, and what it is being converted to in a hidden row with two columns. 

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses localhost:5004 | Homepage with user input form |
| **Program Gathers User Input** | User input: "5" | Output: "5" |
| **Program counts up to User Input number from 0**| User input: "5" | Output: "0, 1, 2, 3, 4, 5" |
| **Program replaces all "1" integers within the count with "Beep!"**| User input: "5" | Output: "0, Beep!, 2, 3, 4, 5" |
| **Program replaces all "2" integers within the count with "Boop!"**| User input: "5" | Output: "0, Beep!, Boop!, 3, 4, 5" |
| **Program replaces all "3" integers within the count with "I'm sorry, Dave. I'm afraid I can't do that."**| User input: "5" | Output: "0, Beep!, Boop!, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5" |
| **Program replaces entire number if any of the above rules are met with the result.**| Input: 105| Output: "Beep!" |
| **Program's previous rules have reverse seniority over other rules**| Input: 32, 21, 10| Output: "I'm sorry...", Boop!, Beep! |


## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
