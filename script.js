$(document).ready(function(){
   $(window).scroll(function(){
    var body = $("body").scrollTop();
		if ( body > 200) { $("#social-panel").css("display", "block"); } else { $("#social-panel").css("display", "none"); };
  })
})
