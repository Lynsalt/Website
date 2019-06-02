<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-gb" lang="en-gb" dir="ltr" >
<head>
<title>Balac Communications</title>
<link rel="stylesheet" type="text/css" href="css/style.css" />
<!--[if IE]>
<style>
.item {
margin: 5px;
padding: 10px;
}
</style>
<![EndIf]-->
</head>

<body>

<div id="wrapper">

 <div id="int-wrapper">

   <div id="banner-wrapper">
        <!-- <div id="logoholder">
		   <img src="images/logo.jpg" alt="logo" />
             </div>-->
		  
		  <div id = "menubar">
		  
		      <div id ="menu">
                 <a href="#">Home</a>
                 <a href="#">Get Insurance</a>
                 <a href="#">Services</a>
                 <a href="#">Support</a>
                  <a href="#">Contact</a>
			  </div>
		  </div>
             <div id="banner">
                   <img src="images/banner.jpg" alt="banner" />
              </div>
		  </div>
          <div id ="content-wrapper">

           <div id ="content-left">
           	<div id="formWrapper">
                <h1>User Login</h1>
                
                <form class="form1">
                    <input type = "username" name="username" class="inputbox"/>
                    <input type="password" name="pwd" class="inputbox"/>
                </form>
                
                <form>
                  <div id="login-left">
                   <p><input type ="checkbox" name="chk" />Remember Me</p>
                   </div>
                   <div id="login-right">
                      
                      <div id ="login">
                       <a href="#">Login</a>
                       </div>
                   </div>
                </form>
                
                <div id ="left_links">
                
                <a href="#">Forget your password?</a><br/><br/>
                <a href="#">Forget your username?</a>
                
                </div>
             </div>
           </div>
           
           
           <div id ="content-right">
                 <div id ="contentright-wrapper">
                	<form name="form" id="form" action="results.html" Method="post" onsubmit="return(getHealthCare());">
                        <table border="0">
                        <tr>
                            <th align="center" colspan="2px" bgcolor="#C7CF68">Please Sign Up for Affordable Health Care</th>
                        </tr>
                        <tr>
                            <td class="mainForm"><label for="fName">First Name:<sup class="sup">*</sup></label></td>
                            <td><input type="text" id="fName" name="fName" size="35" onblur="getFName()"/></td>
                            <td><div id="msg" class="fcolor"></div></td>
                        </tr>
                        <tr>
                            <td class="mainForm"><label for="lName">Last Name:<sup class="sup">*</sup></label></td>
                            <td><input type="text" id="lName" name="lName" size="35" onblur="getlName()"/></td>
                            <td><div id="msg2" class="fcolor"></div></td>
                        </tr>
                        <tr>
                            <td class="mainForm"><label for="streetAddress">Street Address:<sup class="sup">*</sup></label></td>
                            <td><input type="text" id="streetAddress" size="35" onblur="getAddress()"/></td>
                            <td><div id="adMsg" class="fcolor"></div></td>
                        </tr>
                        <tr>
                            <td class="mainForm"><label for="City">City:<sup class="sup">*</sup></label></td>
                            <td><input type="text" id="City" size="35" onBlur="getCity()"/></td>
                            <td><div id="cmsg" class="fcolor"></div></td>
                        </tr>
                        <tr>
                            <td class="mainForm"><label for="State">State:<sup class="sup">*</sup></label></td>
                            <td><input type="text" id="State" size="5" onChange="changeText();" onBlur= "getState();"/> 
                             
                            <label for="zip">ZipCode:</label>
                            <input type="text" id="zip" size="15" onchange="zipCheck();" onBlur="getZip();"/></td>
                            <td><div id="msgs" class="fcolor"></div></td>
                        </tr>
                        <tr>
                            <td class="mainForm"><label for="SSN">SSN:<sup class="sup">*</sup></label></td>
                            <td><input type="text" id="SSN" size="35" onBlur="mySSN();"/></td>
                            <td><div id="SSNmgs" class="fcolor"></div></td>
                        </tr>
                        <tr>
                            <td class="mainForm"><label for="Tel">Phone Number:<sup class="sup">*</sup></label></td>
                            <td><input type="text" id="Tel" size="35" onBlur="phonenumber();"/></td>
                            <td><div id="phmgs" class="fcolor"></td>
                        </tr>
                        <tr>
                            <td class="mainForm"><label for="DOB">D.O.B:<sup class="sup">*</sup></label></td>
                            <td><input type="text" id="DOB" size="35"/></td>
                        </tr>
                        <tr>
                            <td class="mainForm"><label for="gIncome">Annually Gross Income:<sup class="sup">*</sup></label></td>
                            <td><input type="text" id="gIncome" size="35" /></td>
                        </tr>
                        <tr>
                            <td class="mainForm"><label for="jTitle">Job Title:</label></td>
                            <td><input type="text" id="jTitle" size="35"/></td>
                        </tr>
                        <tr>
                            <td class="mainForm"><label for="depYes">Are there any Dependants?</label></td>
                            <td align="center"><label for="depYes">Yes</label><input type="radio" name="dependants" id="depYes" onclick="disableField();"/> <label for="depenNo">No</label><input type="radio" name="dependants" id="depenNo" onclick="disableField();"/></td>
                        </tr>
                        <tr>
                            <td class="depanSec"><label for="depFName">Dependant's First Name:</label></td>
                            <td><input type="type" id="depFName" size="35"/></td>
                        </tr>
                        <tr>
                            <td class="depanSec"><label for="depLName">Dependant's Last Name:</label></td>
                            <td><input type="type" id="depLName" size="35"/></td>
                        </tr>
                        <tr>
                            <td class="depanSec"><label for="streetAddress2">Street Address:</label></td>
                            <td><input type="text" id="streetAddress2" size="35"/></td>
                        </tr>
                        <tr>
                            <td class="depanSec"><label for="City2">City:</label></td>
                            <td><input type="text" id="City2" size="35"/></td>
                        </tr>
                        <tr>
                            <td class="depanSec"><label for="State2">State:</label></td>
                            <td><input type="text" id="State2" size="5"/> <label for="zip2">ZipCode:</label><input type="text" id="zip2" size="15"/></td>
                        </tr>
                        <tr>
                            <td align="center" colspan="2"><button type="button" onclick="getHealthCare();">Register</button><button type="reset" value="Reset" >Reset</button></td>
                        </table>
                </form>
<div id="results"></div>
             </div>
             
             <div id ="contentbottom-wrapper">
             <div id ="content-bottomleft">
             <h3>Estimating your income</h3>
             
             <p>When you apply for lower costs in the Marketplace, you'll need to estimate your income for 2014.</P>
             <h4>You can start by adding up the following items for:</h4>
                 <ul>
                      <li>You and your spouse, if you are married and will file a joint tax return</li>
                      <li>Any dependents who make enough money to be required to file a tax return</li>
                 </ul>
                <h4>For each of the following sources, estimate what your income will be in 2014</h4>
                  <ul>
                      <li>Wages</li>
                      <li>Salaries</li>
                      <li>Tips</li>
                  </ul>
                  <br/>
                   <div id ="readmore">
              <a href="#">Read More</a>
             
             </div>
                   
             </div>
             
             
             <div id ="content-bottomright">
            <h3>Reporting on your household</h3>
            <p><b>When filling out your application, include:</b></p>
               <div id ="nav">
                
                <ul>
                <li><a href="#">Yourself</a></li>
                <li><a href="#">Your spouse</a></li>
                <li><a href="#">Dependents</a></li>
                <li><a href="#">Microwaves</a></li>
                <li><a href="#">Anyone else under 21</a></li>
                </ul>
               
               
               </div>
            
            
             </div>
             
           </div>
            </div>
        </div>
     </div>
</div>
</body>
</html>