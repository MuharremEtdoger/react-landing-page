$(document).on('click','.to-div-link',function(e){
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 50,
    }, 500);   
    e.preventDefault();
});