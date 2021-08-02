$(document).ready(function(){
        $("#menu").click(function(){
             $(this).toggleClass('fa-times');
             $('.navbar').toggleClass('nav-toggle');
        })
        $("button").click(function(){
            $(".demo2").fadeIn(900);
        })
        $("button").click(function(){
            $(".demo3").fadeIn(1800);
        })



})