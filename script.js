var score=0

$("[class^=cir]").click(function(evt){
  var number=$(this).attr("data-label")
  console.log(number)
  score=parseInt(score+number*10)
  console.log(score)
  updatagame()
})

function updatagame(){
  $(".score").text("Score:"+score)
}
function resetgame(){
  score=0
  updatagame()
  $(".sport").remove()
  $(".target").removeClass("moving")
}

$(window).keydown(function(evt){
  if(evt.key=="r"){
    resetgame()
  }
  if(evt.key=="k"){
    $(".target").toggleClass("moving")
  }
})
$(window).mousemove(function(evt){
  $(".mousetext").text(evt.pageX+","+evt.pageY)
  $(".mouseSymbol").css("left",evt.pageX+"px")
                    .css("top",evt.pageY+"px")
})
$(".target").click(function(evt){
  var sport=$("<div class=sport></div>")
  sport.css("left",evt.pageX-$(this).offset().left+"px")
        .css("top",evt.pageY-$(this).offset().top+"px")
  $(this).append(sport)
})