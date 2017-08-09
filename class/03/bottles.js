function SingSong(initialCount) {
	for (var i = initialCount; i > 2; i--) {
		console.log(i + " bottles of beer on the wall, " + i + " bottles of beer." );
		console.log("Take one down and pass it around, " + parseInt(i - 1) + " bottles of beer on the wall." );
	}


	for (var j = i; j > 0; j--) {
		if (j > 1) {
			console.log(j + " bottles of beer on the wall, " + j + " bottles of beer." );
			console.log("Take one down and pass it around, " + parseInt(i - 1) + " bottle of beer on the wall." );
		} 
		else if (j === 1) {
			console.log(j + " bottle of beer on the wall, " + j + " bottle of beer." );
			console.log("Take one down and pass it around, no more bottles of beer on the wall." );
		}
	}

	console.log("No more bottles of beer on the wall, no more bottles of beer."); 
	console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");

}

SingSong(99);










/*
**99 Bottles of Beer** (bottles.js)
Write a script that logs to the console the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can [find the lyrics 
here](http://www.99-bottles-of-beer.net/lyrics.html). Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

*/
