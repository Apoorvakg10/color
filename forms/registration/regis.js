function formvalidate(){
    var name=document.getElementById("user").value;
    var email=document.getElementById("email").value;
    var gender=document.getElementById("gender").value;
    var state=document.getElementById("states").value;
    if(name == " ")
    {
        document.getElementById("username").innerHTML="Please fill the name field";
        return false;
    }
    if(email == " ")
    {
        document.getElementById("emai").innerHTML="Please fill the email field";
    return false;
    }
    if(gender == " ")
    {
        document.getElementById("gen").innerHTML="Please select yhe option";
        return false;
    }
    if(state == " ")
    {
        document.getElementById("state").innerHTML="Please select the option";
        return false;
    }
}