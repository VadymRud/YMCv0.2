storage=$.localStorage;



$('#registry').click(function(){
    $("#second_layer").flippy({
        duration: "500",
        verso:$("#registation1").html()
        
    });
});


//add to storage
function addToStorage(key, value){
    storage.set(key, value) ;
}
//eand  

//change image

function changeImage(image){

    widthScreen = $(window).width();
    heightScreen = $(window).height();
    //background-size: 200px 150px;
    backgroundSize = widthScreen+ 'px ' + heightScreen + 'px';
    $('#first_layer').css({
        //../img/reg_bg.jpg
        'background': 'url('+ image +') 50% 0',
        'background-size' : backgroundSize
    });
}
//end



//registration1 page
function click_top_bar_left_registrations1(){
    
    $("#second_layer").flippy({
        duration: "500",
        verso:$("#main_page").html(),
        direction : 'RIGHT'
    });
};

function click_button_registrations(){
    
    $("#second_layer").flippy({
        duration: "500",
        verso:$("#registation1").html(),
        direction : 'LEFT'
    });
};

function phoneMask(phone){
    $(phone).mask('00-000-000-00-00');
    
}

function validatePhone(phone){
    if((phone.length < 16)){
        alert('Проверьте правильный ли номер телефона!');
        //return false;
    } else {
        return true;
    }
}

function validateEmail(email) {
    if (email.length >= 0){
          
          var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        // alert( pattern.test(emailAddress) );
        //return pattern.test(email);
          
          if( !pattern.test( email )) {
              //alert('Проверьте email!');
              return false;
          } else {
            return true;
          }
    }else{
        return 'false';
    } 
}

function validatePass(pass) {
    if( $(pass).val().length < 6 ){
        alert('Пароль слишком короткий (менее 6 знаков).');
    }
      // var passReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      // if( !emailReg.test( $(email).val() ) ) {
          // alert('!!!!');
      // } else {
        // return true;
      // }
}





function clickButtonRegistrationsNext(){
    var valid_phone = validatePhone($("#registation1_phone").val()),
        valid_email = validateEmail($("#registation1_email").val());
        changeImage('img/reg_bg.jpg');
    $('#second_layer input').each(function(){
            //add values to localstorage 
            addToStorage(this.id, $(this).val());
            
        });
    if( valid_phone === true || valid_email === true ){
        
        $("#second_layer").flippy({
            duration: "500",
            verso:$("#registation2").html(),
            direction : 'LEFT',
            onFinish : function(){
                //changeImage('img/reg_bg.jpg');
            }
        });
        
        //addToStorage(key, value);
        
        
    }else{
    }
};
////end registration1 page



//registration2 page
function clickButtonBackRegistrations2(){
    
    $("#second_layer").flippy({
        duration: "500",
        verso:$("#registation1").html(),
        direction : 'RIGHT',
        onFinish : function(){
            //get values from localstorage
            $('#registation1_phone').val(storage.get('registation1_phone'));
            $('#registation1_email').val(storage.get('registation1_email'));
            $('#registation1_name').val(storage.get('registation1_name'));
            $('#registation1_pass').val(storage.get('registation1_pass'));
            
        }
    });
    
    changeImage('img/main_page_bg_blur.jpg');
    
};

//registration2 page

function clickButtonNextRegistrations2(){
    $("#second_layer").flippy({
            duration: "500",
            verso:$("#status").html(),
            direction : 'LEFT',
            onFinish : function(){
                
                //changeImage('img/reg_bg.jpg');
            }
            
        });
        changeImage('img/main_page_bg_blur.jpg');
}




//end registration2 page



//status page
function toggleRadioButton(rb){
    
    $(rb).toggleClass('active');
}

function toggleRadioPlanning(rb){
    if($('#pregnant').hasClass('active')){
        $('#selectForm').hide('fast');
        $('#pregnant').toggleClass('active');
    }
    //$(rb).toggleClass('active');
}

function visibleSelectForm(rb){
    
    if($(rb).hasClass('active')){
        $('#selectForm').show('slow');
        $('#iwait').toggleClass('active');
    }else{
        $('#selectForm').hide('fast');
    }
}


function nextStatus( write ){
    
    if (write === 1){
        $('#second_layer select').each(function(){
            //add values to localstorage 
            addToStorage(this.id, $(this).val());
            
        });
        
    }
    
    // //temporary code
        // $('#second_layer select').each(function(){
            // //add values to localstorage 
            // alert(storage.get(this.id));
            // //addToStorage(this.id, $(this).val());
//             
        // });
    // //end
    $("#second_layer").flippy({
            duration: "500",
            verso:$("#childList").html(),
            direction : 'LEFT'
     });
}
window._cordovaNative = true;
jQuery(document).ready(block_resize);
jQuery(window).on('resize',block_resize);
    //add child page
    function block_resize() {   
        var block_cover_height  = jQuery(window).height();
        jQuery('.add_child_my_childs').each(function() { //передано через each т.к. может быть несколько блоков на страницу (если не будет, то убрать)
            var block_height  = jQuery(this).height();
            //  ниже минусуем 60px от середины. Вроде в центре, а вроде и нет =)
            var block_padding = ( ((block_cover_height - block_height)/2)-100 ); 
            jQuery(this).css({"padding-top": block_padding, "padding-bottom": block_padding});
            
        });
    };  

//end status page

