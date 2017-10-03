$(document).ready(function() {
    html = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    $('.dropbtn').on(click, function(){
        $('.dropdown-content').toggle();
    });
    $('#dropbtn1').mouseenter(function(){
        console.log("sound")
        $('#dropbtn2').css('color', '#fff');
    });
    
})