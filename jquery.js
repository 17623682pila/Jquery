$(document).ready(function(){
    $("#mmm").click(function(){
      $("#zzz").hide();
    });
  });
  $(document).ready(function(){
    $("#nnn").click(function(){
      $(".ttt").toggle();
    });
  });
  
  $(document).ready(function(){
    $("#hid").click(function(){
      $(".lol").hide();
    });
    $("#sho").click(function(){
      $(".lol").show();
    });
  });
  $(document).ready(function(){
    $("#fff").click(function(){
      $("#div1").fadeOut();
      
    });
  });
  $(document).ready(function(){
    $("#hhh").click(function(){
      $("#div2").fadeIn();
      
    });
  });
  $(document).ready(function(){
    $("#iii").click(function(){
      $("#div3").fadeToggle();
      
    });
  });
  $(document).ready(function(){
    $("#alert").mouseenter(function(){
      alert("This is Mouseenter method!");
    });
  });
  $(document).ready(function(){
    $("#leave").mouseleave(function(){
      alert("This is Mouseleave method!");
    });
  });
  $(document).ready(function(){
    $("#click").mouseup(function(){
      alert("This is Mouseup method!");
    });
  });
  $(document).ready(function(){
    $("#hover").hover(function(){
      alert("This is about hover");
    },
    function(){
      alert("Bye! Kadrinchoe la!");
    }); 
  });
  $(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
      $(this).css("background-color", "green");
    });
  });
  $(document).ready(function(){
    $("#pic1").on("click", function(){
      $(this).hide();
    });
  });
  $(document).ready(function(){
    $("#pic2").on("click", function(){
      $(this).hide();
    });
  });
  $(document).ready(function(){
    $("#pic3").on("click", function(){
      $(this).hide();
    });
    $(document).ready(function(){
      $("#id1").click(function(){
        $("#id2").slideDown("slow");
      });
    });
  });
  $(document).ready(function(){
    $("#id3").click(function(){
      $("#id4").slideUp("slow");
    });
  });
  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#ton").click(function(){
      $("#did").animate({left: '250px'});
    });
  });
  $(document).ready(function(){
    $("#not").click(function(){
      $("#did").animate({
        left: '350px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
      });
    });
  });
  $(document).ready(function(){
    $("#tot").click(function(){
      var div = $("#idd");
      div.animate({height: '450px', opacity: '0.4'}, "slow");
      div.animate({width: '450px', opacity: '0.8'}, "slow");
      div.animate({height: '150px', opacity: '0.4'}, "slow");
      div.animate({width: '150px', opacity: '0.8'}, "slow");
    });
  });
  $(document).ready(function(){
    $("#fli").click(function(){
      $("#pop").slideDown(5000);
    });
    $("#stop").click(function(){
      $("#pop").stop();
    });
  });
  $(document).ready(function(){
    $("#utt").click(function(){
      $("#par").hide(1000);
      alert("The paragraph is now hidden");
    });
  });
  $(document).ready(function(){
    $("#bnn").click(function(){
      $("#nin").css("color", "red").slideUp(2000).slideDown(2000);
    });
  });
  $(document).ready(function(){
    $("#btn").click(function(){
      alert($("#w2s").attr("href"));
    });
  });
  $(document).ready(function(){
    $("#gtg").click(function(){
      $("#xxx").prepend("<b>First</b>. ");
    });
    $("#tgt").click(function(){
      $("ol").prepend("<li>Second</li>");
    });
  });
  $(document).ready(function(){
    $("#mnb").click(function(){
      $("#vid").empty();
    });
  })
  $(document).ready(function(){
    $("button").click(function(){
      $("#hty, #lkl").addClass("blue");
      $("#age").addClass("important");
    });
  });
  $(document).ready(function(){
    $("#ras").click(function(){
      $("#der",).css("background-color", "pink");
      $("#wol",).css("background-color", "pink");
      $("#nee",).css("background-color", "pink");
    });
  });
  
  