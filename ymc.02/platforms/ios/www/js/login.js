$(document).ready(function(){
    $("#login_button").click(function(){
        //validate #pass_text
        var pass_text = $("#pass_text").val();
        
        //if number or email
        
        if(phonenumber(pass_text) !== true ){
            
            //check email
            if(validateEmail(pass_text) === true ){
                
                //load next fuckinf page
                alert("next page")
            }else{
                alert("check email suka!!!")
            }
        }
    });
});

//check email
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\
".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA
-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 


//check phone - 10 digit
function phonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
        if (inputtxt.value.match(phoneno)) {
            return true;
        } else {
            alert("Not a valid Phone Number");
            return false;
        }
    }

