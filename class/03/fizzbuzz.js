function FizzBuzz(ceiling) {

	for(i=1; i<ceiling; i++) {
		if((i%3 === 0 ) && (i%5===0))  {
			console.log("fizzbuzz");
		}
		else if(i%3 === 0) {
			console.log("fizz");
		}
		else if(i%5 === 0) {
			console.log("buzz");
		}
		else console.log(i);
	}
}

//For node, this would require the use of the prompt, or other package.
//var num = prompt("Please enter a number that you would like to have FizzBuzzed: ");

FizzBuzz(34);



/*
**Fizz Buzz** (fizzbuzz.js)
Fizz buzz is literally the most fun game you'll ever play in your entire life! 
The rules are simple: set a ceiling, which is as high as you will count, and start counting up from 1. 
As you count up, replace any number that is a multiple of 3 with `fizz` 
and any number that is a multiple of 5 with `buzz`. Repeat until you reach your ceiling. 
So, if our ceiling were 20, 
we'd get the following: `1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, buzz, fizz, 17, fizz, 19, 20`

*Bonus:* replace any number that is a multiple of both 3 and 5 with `fizzbuzz`.
*/