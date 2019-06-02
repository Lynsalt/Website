function containsUpperAndLowerCaseLetters(str)
{
	var isUpper = false; var isLower = false;
	for (var i=0; i < str.length; i++)
	{
		var s = str.charCodeAt(i);
		if ( (s >= 65 && s <= 90)) 
		{
			isUpper = true;
			break;
		}
	} // end first for loop
	
	for (var i=0; i < str.length; i++)
	{
		var s = str.charCodeAt(i);
		if (s >= 97 && s <= 122) 
		{
			isLower = true;
			break;
		}
	} // end first for loop
  if (isUpper && isLower)
	return true;
 else
	return false;
} // End function

function containsLettersAndNumbers(str)
{
// Function to check if str contains letters & numbers
// Returns true if str contains both letters & numbers else false
var isLetter = false;
var isNumber = false;
 for (var i=0; i < str.length; i++)
 {
	var s = str.charCodeAt(i);
	if ( (s >= 65 && s <= 90) || (s >= 97 && s <= 122)) 
	{
		isLetter = true;
		break;
	}
 } // end first for loop
 for (var i=0; i < str.length; i++)
 {
	var s = str.charCodeAt(i);
	if (s >= 48 && s <= 57) 
	{
		isNumber = true;
		break;
	}
 }  // end 2nd for loop
 if (isLetter && isNumber)
	return true;
 else
	return false;
} // End function

function checkStringLength(str, min, max)
{
// Function to determine if input string length is between specified min and max 
// Returns true if within min & max else false
 if (str.length >= min && str.length <= max)
	return true;
 else
	return false;
}
function containsOnlyLetNums(x)
{
// Function to determine if input string contains only numbers& letters
// returns true if only numbers&letters else false
	for (var i=0; i < x.length; i++)
	{
		var p = x.charCodeAt(i);
	    if ( (p >= 65 && p <= 90) || (p >= 97 && p <= 122) || (p >= 48 && p <= 57) )
			; // don't do anything, go to next character
		else
			return false;
	}	// end of for loop
	return true;
}  // end of function
function isAnumber(x)
{
// Function to determine if input character is a number (48-57)
// Returns true if number, else returns false
var y = x.charCodeAt(0);
if (y >= 48 && y <= 57)
	return true;
else
	return false;
}