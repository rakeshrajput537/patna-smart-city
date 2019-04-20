$(document).ready(function(){
    
    // $("#loading").fadeOut("slow");
    $("#loading").hide();

});
$(document).ready(function(){


$('.navbar-nav .nav-link').click(function(){
	console.log($('.navbar-nav .nav-link'));
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
});

});
document.querySelectorAll('.dropdown.nav-item').forEach(el => {
	el.addEventListener('mouseleave', () => {
		el.querySelector('.dropdown-menu.show').classList.remove('show')

	});
});