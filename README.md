# _Number Counter and Replacer_

#### _Counts up to user generated integer and then replaces certain numbers with provided phrases, June 14th, 2019_

#### By _**Erik Irgens**_

## Description

_This program should take a user generated input, in the form of an integer number, and then post a string of numbers counting up to that user generated number. However, certain numbers will be replaced with designated strings - such as Beep!, Boop!, and "I'm sorry, Dave. I'm afraid I can't do that.". These will be displayed below, via timer, to the user. Otherwise, the user may opt to look at what is happening between the numbers. Buttons can display what is being generated, and what it is being converted to in a hidden row with two columns. 

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

* _Visit the following link: https://github.com/erik-t-irgens/number-counter-replacer_
* _Clone the repository to your desired directory._
* _OR_
* _Visit here: erik-t-irgens.github.io/number-counter-replacer_




## Known Bugs

_The movement of the lower display can mess with the page if you put a very large number in, and allow it to populate the "What's going on?" section to below the page._
## Support and contact details

_Contact me at erik.t.irgens@gmail.com with any questions or concerns._

## Technologies Used

_HTML, CSS, JavaScript, jQuery were all used._

### License

*GPL license distribution*

Copyright (c) 2019 **_Erik Irgens_**
