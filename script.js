let score = 0;

$(".empty").click(function(){
    $(this).css("background-color","white");
});


$(".bomb").click(function(){
    $(this).css("background-color","red");
    $(".message").text("OH NO! YOU FOUND A BOMB! MINUS ONE POINT.");
    // CHALLENGE ONE
score-= 1;
$(".score").text(score);   
});

$(".treasure").click(function(){
    $(this).css("background-color","yellow");
    $(".message").text("YAY! YOU FOUND TREASURE! POINTS FOR YOU!");
    // CHALLENGE TWO
    
  score+=1;
$(".score").text(score);   
    
});

$("present").click(function(){
                  score=0;
    $(".score").text(0);
  $(this).css("background-color","lightblue");
});
