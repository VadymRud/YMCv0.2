//lang

// $.i18n({ 
    // locale: 'he' // Locale is Hebrew
// });


$(function(){
        var opts = { language: "ru", pathPrefix: "js/lang" };
        $("[data-localize]").localize("main", opts);
});



//login user 
var login_user_url = 'http://192.168.0.20:3535/mobile.login';

