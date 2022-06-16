//Code Already Compiled

function getRandomInt(min, max)
{
	var randomNumber = Math.random();
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 6));