// JavaScript Document
function getFName(){
   var fName=document.getElementById("fName").value
   if(fName==""){
	   document.getElementById("msg").innerHTML="Please fill out your first name."; 
   }
   else{
	   document.getElementById("msg").innerHTML="";
   }
}
//------------------------------------------------------------------------------
function getlName(){
   var lName=document.getElementById("lName").value
   if(lName==""){
	   document.getElementById("msg2").innerHTML="Please fill out your last name."; 
   }
   else{
	   document.getElementById("msg2").innerHTML="";
   }
}
//------------------------------------------------------------------------------

function getAddress(){
	var Address = document.getElementById("streetAddress").value;
	if(Address ==""){
		document.getElementById("adMsg").innerHTML="Please fill out your address."; 
	}
	else{
		document.getElementById("adMsg").innerHTML="";
	}
}
//-----------------------------------------------------------------------------
function getCity(){
	var City = document.getElementById("City").value;
	if(City ==""){
		document.getElementById("cmsg").innerHTML="Please enter a city.";
	}
	else{
		document.getElementById("cmsg").innerHTML="";
	}
}
function getState(){
	var State = document.getElementById("State").value;
	if(State ==""){
		document.getElementById("msgs").innerHTML="Please enter a state.";
	}
	else{
		document.getElementById("msgs").innerHTML="";
	}
}
//---------------------------------------------------------------------------
//if User clicks no on the dependant tradio button depenndant 
//fiends are disabled
function disableField(){
  if(document.getElementById("depenNo").checked == true){
	 var depFName = document.getElementById("depFName").disabled=true;
 	 var depLName = document.getElementById("depLName").disabled=true;
 	 var addressDep =document.getElementById("streetAddress2").disabled=true;
 	 var CityDep =document.getElementById("City2").disabled=true;
 	 var StateDep =document.getElementById("State2").disabled=true;
	 var depZipCode =document.getElementById("zip2").disabled = true;
 }
 else if(document.getElementById("depYes").checked == true){
	 var depFName = document.getElementById("depFName").disabled=false;
 	 var depLName = document.getElementById("depLName").disabled=false;
 	 var addressDep =document.getElementById("streetAddress2").disabled=false;
 	 var CityDep =document.getElementById("City2").disabled=false;
 	 var StateDep =document.getElementById("State2").disabled=false;
	 var depZipCode =document.getElementById("zip2").disabled = false;
     }
}
//----------------------------------------------------------------------------
//Changes the state to upper case
function changeText(){
	var n = document.getElementById("State");
	n.value= n.value.toUpperCase();
	
    var State = document.getElementById("State").value;	
    	if(State.length>2){
		var strn =State.substring(0,2);
		var y = document.getElementById("State");
		y.value = strn;
       }
};
//--------------------------------------------------------------------------------
//if zip code is more than 5 character resets them to 5
function zipCheck(){ 
	  var zip =document.getElementById("zip").value;
	  if(zip.length > 5){
		document.getElementById("msgs").innerHTML="Zip Code Must be 5 Numbers.";
	    var str5 = zip.substring(0,5);
		var x = document.getElementById("zip");
		x.value = str5; 
      }
	 
};
//--------------------------------------------------------------------------------
function getZip(){
	    var ZipCode = document.getElementById("zip").value;
	    if(ZipCode==""){
		 document.getElementById("msgs").innerHTML="Please enter a zip code."
	     }
	    else{
		document.getElementById("msgs").innerHTML=""
	    }
}

//--------------------------------------------------------------------------------
//only accepts 11 charcters for the social security number
function mySSN(){
	var SSN = document.getElementById("SSN").value
	var pattern = /^\d{3}-?\d{2}-?\d{4}$/;
	if(SSN=="" ||!SSN.match(pattern)){
		document.getElementById("SSNmgs").innerHTML="Please enter a Social Security Number.";
	}
	else{
		document.getElementById("SSNmgs").innerHTML="";
	}
	
};
//--------------------------------------------------------------------------------
function phonenumber(){  
  var Tel = document.getElementById("Tel").value
   var telPattern = /^\d{3}-?\d{3}-?\d{4}$/;
  if(Tel=="" || !Tel.match(telPattern)){  
      document.getElementById("phmgs").innerHTML="Please enter a telephone number.";
  }
  else{
		document.getElementById("phmgs").innerHTML="";
	}
};

function remove(){
	document.getElementById("results").style.display="none";	
}
//--------------------------------------------------------------------------------
function validateAge(){
	
  var DOB = document.getElementById("DOB").value;
  var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
  if(DOB == null || DOB=="" || !pattern.test(DOB)){
	  document.getElementById("dobmg").innerHTML="Enter a valid date in the format MM/DD/YYYY."
  }
  else{
	  document.getElementById("dobmg").innerHTML="";
  }

}	
/*
	var DOB = document.getElementById("DOB").value
	if(DOB ==""){
		document.getElementById("dobmg").innerHTML="Please enter a date of birth";
	}
	else{
		document.getElementById("dobmg").innerHTML="";
	}*/
//----------------------------------------------------------------------------------
function getIncome(){
	var gIncome =document.getElementById("gIncome").value
	if(gIncome == ""){
		document.getElementById("AGI").innerHTML="Please enter your annual gross income";
	}
	else{
		document.getElementById("AGI").innerHTML="";
	}
}
//----------------------------------------------------------------------------------
function isAnumber(x)
{
// Function to determine if input character is a number (48-57)
// Returns true if number, else returns false
var x =document.getElementById("pwd").value;
var y = x.charCodeAt(0);
if (y >= 48 && y <= 57)
	return true;
else
	return false;
}
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
}

/*function specialChacters(){
	//var pwd = document.getElementById("pwd").value
	 for(var i=0; i< n.length; i++)
	{
		var pword = n.charCodeAt(i);
		if((pword = 33) || (pword  = 45) || (pword  = 58) || (pword  = 64) || (pword =35) || (pword =36) || (pword  = 37) || (pword  = 45) || (pword = 95) || (pword = 58))
			;
		else 
		   return false;
	    }
		return true;

}*/
function specialCharacters(str1){
	
	for(var i=0; i < str1.length; i++){
		var p = str1.charCodeAt(i);
		
		if( (p == 64) || (p == 33) || (p == 45) || (p == 58) || (p == 64) || (p == 35) || (p == 37) || (p == 95))
		;
		else
		    return true;
	  }
	return false;
}
//----------------------------------------------------------------------------------




//----------------------------------------------------------------------------------
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
} 
// End function
//----------------------------------------------------------------------------------

//----------------------------------------------------------------------------------
function getHealthCare(){
	//If first name isn't filled out the form does not submit 	
    var fName=document.getElementById("fName").value; 
	var lName=document.getElementById("lName").value;
	var MName=document.getElementById("MName").value;
	var Address = document.getElementById("streetAddress").value;
	var City = document.getElementById("City").value;
	var State = document.getElementById("State").value;
	var zip = document.getElementById("zip").value;
	var Tel = document.getElementById("Tel").value;
	var jTitle = document.getElementById("jTitle").value;
	var depFName =document.getElementById("depFName").value;
	var depLName = document.getElementById("depLName").value;
	var grossIncome = document.getElementById("gIncome").value;
	var Address2 = document.getElementById("streetAddress2").value;
	var City2 = document.getElementById("City2").value;
	var State2 = document.getElementById("State2").value;
	var zip2 = document.getElementById("zip2").value;
	if(fName==""||lName==""||streetAddress =="" || City=="" || State=="" ||zip=="" || Tel==""){
		return false;
      }
	  
	var curdate = new Date ();
	var month = (curdate.getMonth() +1);
	var day   = curdate.getDate();
	var year =  curdate.getFullYear();
    var today = month + "/" + day + "/" + year;

	var DOB = document.getElementById("DOB").value;
	var AGI = parseInt(document.getElementById("gIncome").value)
	document.getElementById("gIncome").value = "$" + AGI.toFixed(2);
		//regular expression to validate date value
		var regex =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
		if(regex.test(DOB)){
			//covert input date into date object
			var DOBDate = new Date(DOB);
			var DOBMonth =(DOBDate.getMonth() +1);
			var DOBDay = DOBDate.getDate();
			var DOBYear = DOBDate.getFullYear();
			var DOBBirthday = DOBMonth + "/" + DOBDay + "/" + DOBYear;
            const MAXAGE = 50;
	        const MAXINCOME = 100000;
			var Age = (curdate.getFullYear()-DOBDate.getFullYear());
				if(Age > MAXAGE && AGI < MAXINCOME){
		document.getElementById("results").innerHTML ="<b>"+"Thanks for Signing up: " +fName+ " "+MName+ " " +lName+ "<br/>" + "<br/>" + jTitle +"<br/>" + "<br/>"   +Address+ "<br>" +City+ ","+ " " +State+ "<br/>" +zip+ "<br/>" +Tel+ "<br/>" + "<br/>"+ "Based on your income level of"+" " +"$" +grossIncome+ " " + "and" + " " + "age" + " " + Age + "<br/>"+ "<br/>" +"you qualify for the Bronze Plan" + "<br>" +"BlueCross Blue Shield ($300)" + "<br>" + "WellPoint Basic ($200)" + "<br/>" + "Kaiser Universal ($250)" + "<br>" + "Medicate Plan B ($290)" + "</b>" + "<br/>" + "<br/>" + "</b>" + " " + depFName + " " +depLName + "<br/>" + Address2 + "<br/>" + City2 + "<br/>" + State2 +"," + zip2;

	}
			
			else if(Age < MAXAGE && AGI < MAXINCOME){
				document.getElementById("results").innerHTML ="<b>"+"Thanks for Signing up: "  +fName+ " " +MName+ " " +lName+ "<br/>"+ "<br/>" + jTitle + "<br/>" + "<br/>" + Address+ "<br/>" +City+ "," + " " +State+ "<br/>" +zip+ "<br/>" +Tel+ "<br/>" + "<br/>" + "Based on your income level of" +" " +"$" +grossIncome+ " "+ "and" +" " + "age" + " " + Age +"<br>"+"you qualify for the Gold Plan" + "<br>" + "CareFirst Max Choice ($500)" + "<br>" +"WellPoint Advantage ($520)" + "<br>" + "Dominion Plus ($480)" + "<br>" + "Aetna Supreme ($460)" +"</b>" + "<br/>" + "<br/>" + "</b>" + " " + "<br/>" + depFName + " " +depLName + "<br/>" + Address2 + "<br/>" + City2 + "<br/>" + State2 +"," + zip2;
			}
			else if(Age > MAXAGE && AGI > MAXINCOME){
		document.getElementById("results").innerHTML ="<b>"+"Thanks for Signing up: " + " " +fName+ " " +MName+ " " +lName+ "<br/>" + "<br/>" + jTitle + "<br/>" + "<br/>" + Address+ "<br>" +City+ "," + " " +State+ "<br/>" +zip+ "<br/>" +Tel+ "<br/>" + "<br/>" + "Based on your income level of" + " " +"$" +grossIncome + " " + "and" + " " + "age" + " " + Age + "<br>"+"you qualify for the Silver Plan" + "<br>" + "CareFirst Plus ($400)" + "<br>"  + "Delta Supreme ($410)" + "<br>" + "Kaiser Key ($420)" + "<br>" + "Medicare Plan B+ ($390)" +"</b>" + "<br/>" + "<br/>" + "1)" + " " +"</b>" + " " + depFName + " " +depLName + "<br/>" + Address2 + "<br/>" + City2 + "<br/>" + State2 +"," + zip2;

	       }
		   else {
		alert("You do not qualify for health insurance");
		return false;
	     }

		}  
	  
	  
}

