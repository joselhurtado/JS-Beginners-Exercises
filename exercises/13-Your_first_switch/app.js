//Code Already Compiled

function getColor(selection) {

	// Code starting here
	switch(selection){
		case "red":
			selection = "red";
			return true;
			break;
		case "green":
			selection = "green";
			return true;
			break;
		case "blue":
			selection = "blue";
			return true;
			break;
			
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}

var colorName = prompt('What color do you want?').trim();
var isAvailable = getColor(colorName.toLowerCase());

if(isAvailable)
	console.log('Good news! That color ' + (colorName.toLowerCase()) + ' is available');
else 
	console.log('We are sorry, that color ' + (colorName.toLowerCase()) + ' is not available');
