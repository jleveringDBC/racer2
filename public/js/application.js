$(document).ready(function() {

  $("button").click(function(e) {
      var form = $("form").select();
      e.preventDefault();
      $(".entrance").animate({left:'-1000px'});
      $("#3").delay(500).animate({right:'1400px'}, 800);
      $("#2").delay(1500).animate({right:'1400px'}, 800);
      $("#1").delay(2500).animate({right:'1400px'}, 800);
      setTimeout(function () {
        form.submit();
      }, 3300);
      
  });

  var p1_current_square = 0;
  var p2_current_square = 0;
 
  function update_position(player, counter)
  {
    var length = $("#player" + player + "_strip > td").size();
    if (counter == length)
    {
      $.get("/endgame/" + player, function(response){
        console.log(response);
        $("#results").replaceWith(response);
      });

    }


 
 
    counter += 1;
    $("#player" + player + "_strip td.active").removeClass("active");
    $("#player" + player + "_strip td:nth-child(" + counter + ")").addClass("active");
    return counter;
  }
 
 
  $(document).keyup(function(e) {
    if(e.which == 81) {
      p1_current_square = update_position("1", p1_current_square);
    }
    else if (e.which == 80) {
      p2_current_square = update_position("2", p2_current_square);
    }
  });
});

$(document).ready(function() {



});
