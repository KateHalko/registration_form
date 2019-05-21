function validate(){
    var firstName=document.getElementById("firstName");
    var lastName=document.getElementById("lastName");
    var emailAddr=document.getElementById("emailAddr");
    var passw=document.getElementById("passw");
    var passw_confirm=document.getElementById("passw2");
    var email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var text_pattern = /^[a-zA-Z]{3,20}/;
    var password_pattern=/^[a-zA-Z0-9]{7,20}/;
    var fn = document.getElementsByTagName("input")[0].value;
    var ln = document.getElementsByTagName("input")[1].value;
    var ead = document.getElementsByTagName("input")[2].value;
    var pas = document.getElementsByTagName("input")[3].value;
    var pas_c = document.getElementsByTagName("input")[4].value;

    
    var valid=true;
    if(!text_pattern.test(fn)){
        firstName.style.border="2px solid red";
        valid =false;
    }
    else{
        firstName.style.border="1px solid #a0b3b0";
    }

    if(!text_pattern.test(ln)){
        lastName.style.border="2px solid red";
        valid = false;
    }
    else{
        lastName.style.border="1px solid #a0b3b0";
    }
    
    if (!email_pattern.test(ead)){
        emailAddr.style.border="2px solid red";
        valid=false;
    } 
    else{
        emailAddr.style.border="1px solid #a0b3b0";
    }
    if(!password_pattern.test(pas)){
        passw.style.border="2px solid red";
        valid =false;
    }
    else{
        passw.style.border="1px solid #a0b3b0";
    }
    if(!pas_c || pas!=pas_c){
        passw_confirm.style.border="2px solid red";
        valid =false;
    }
    else{
        passw_confirm.style.border="1px solid #a0b3b0";
    }
    if(valid==false)
    {
        return false;
    }
    else{ return true;}
}
function Validate2(){
    var emailAddr=document.getElementById("email");
    var passw=document.getElementById("password");
    var ead = document.getElementsByTagName("input")[5].value;
    var pas = document.getElementsByTagName("input")[6].value;
    var email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var valid=true;
    if (!email_pattern.test(ead)){
        emailAddr.style.border="2px solid red";
        valid=false;
    } 
    else{
        emailAddr.style.border="1px solid #a0b3b0";
    }
    if(!password_pattern.test(pas)){
        passw.style.border="2px solid red";
        valid =false;
    }
    else{
        passw.style.border="1px solid #a0b3b0";
    }
    if(valid==false)
    {
        return false;
    }
    else{ return true;}
}