$(document).ready(function(){
    $('.navbar a').click(function(){
        $('body,html').animate({
            scrollTop:$('#'+$(this).data('value')).offset().top-150
        },1000)     
            $('.navbar a').attr('class','nav-link');
            $(this).attr('class','nav-link active');     
               
    });    
});