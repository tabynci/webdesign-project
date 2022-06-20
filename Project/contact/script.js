function myFunction() {
    var username = document.getElementById("fname").value;
    document.getElementById("demo").innerHTML=username;
    var Email = document.getElementById("email").value;
    document.getElementById("demo").innerHTML=Email;
    var phoneNo = document.getElementById("phone").value;
    document.getElementById("demo").innerHTML=phoneNo;
    var Message = document.getElementById("message").value;
    document.getElementById("demo").innerHTML=Message;
	if (username == "" && Email != " " && phoneNo != "" && Message != "") {
		alert("Username must be filled out");
    return false;
    }
    else if (username != ""&& Email == "" && phoneNo != "" && Message != "") {
    alert("Email must be filled out");
   return false;
    }
    else if (username!= "" && Email != "" && phoneNo == "" && Message != "") {
    alert("Phone no must be filled out");
    return false;
    }
    else if (username!= "" && Email != "" && phoneNo != "" && Message == "") {
    alert("Message must be filled out");
    return false;
     }
    else if (username != "" && Email != " " && phoneNo != "" && Message != "") {
    alert(username+ ", thank you for your details. We will be in touch via " +phoneNo + " or " + Email +" shortly.");
    
	const form=document.getElementById("form");
    form.style.display = "none";
     if (form.style.visibility==="hidden") {
         form.style.visibility ="visible";
     } else {
             form.style.visibility ="hidden";
         }
    return true;
    }
    else{
    alert("All fields must be filled");
    }
    

    document.getElementById("demo").style.display = "none";
    return false;
}