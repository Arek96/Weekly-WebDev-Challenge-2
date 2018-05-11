

function navBgChange(){
    
   if($(document).scrollTop()>= $(".navbar").height()){
       $(".navbar").removeClass("nav-bg--none");
       $(".navbar").addClass("nav-bg--white");
   }
    if($(document).scrollTop()<= 10){
       $(".navbar").removeClass("nav-bg--white");
       $(".navbar").addClass("nav-bg--none");
    }
}
function scrollCon(hash){
    if(hash == "#home"){ 
        return $(hash).offset().top;
    }
     else { 
        return $(hash).offset().top - 90;
     }
}
$(document).ready(function(){
 $(document).scroll(navBgChange);
    $('body').scrollspy({ target: ".navbar" , offset:91});
    $(".navbar a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash ;
    $('html, body').animate({
      scrollTop: scrollCon(hash)
    }, 800, function(){
        console.log(hash)
    
    });
  }
});

    $(".home__img-a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash ;
    $('html, body').animate({
      scrollTop: scrollCon(hash)
    }, 800, function(){    
    });
  }
});
})
