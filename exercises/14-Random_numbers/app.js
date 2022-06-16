/*Exercise closely resembles 11 - consider introducing another concept here? 
LOOKING FOR MORE GUIADANCE ON THIS */

function getRandomInt(min, max)
{
	var randomNumber = Math.random();
	return Math.floor(Math.random() * (max - min + 1)) + randomNumber;
}


console.log(getRandomInt(1, 10));