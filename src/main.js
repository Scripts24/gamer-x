$(document).ready(function(){
    // sidebar toggle
    $("#navbar-show-btn").click(() => $('.navbar-collapse').removeClass('translate-x-full'));
    $('#navbar-hide-btn').click(() => $('.navbar-collapse').addClass('translate-x-full'));

})