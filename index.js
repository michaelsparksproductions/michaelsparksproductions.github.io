$(document).ready(function() {
   
    $('#heading').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        return false;
    });
