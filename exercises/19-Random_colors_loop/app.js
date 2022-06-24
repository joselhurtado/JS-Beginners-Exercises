// Code Already Compiled with errors

function getColor(colorNumber)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}
// console.log(getColor(2));

function getAllStudentColors(){ 
	for(let i = 1; i <= 10; i++){ //your loop here
		var num = Math.floor(Math.random() * 4);
		var exampleColor = getColor(num);
		console.log(num, exampleColor);
	}
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();