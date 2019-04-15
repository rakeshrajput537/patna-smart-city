$(document).ready(function(){
    
    // $("#loading").fadeOut("slow");
    $("#loading").hide();

});
$(document).ready(function(){


$('.navbar-nav li').click(function(){
    $('.navbar-nav li').removeClass('active');
    $(this).addClass('active');
});
});