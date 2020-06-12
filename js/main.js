function initMap(){
    var location = {lat:27.708065, lng:85.337099};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom:16,
        center: location
    });
}

window.addEventListener('scroll', function(){
    if(window.scrollY >150){
       document.querySelector('#navbar').style.opacity = 0.9;
    }else{
      document.querySelector('#navbar').style.opacity = 1;
    }
});
//Smooth scrolling
$('#navbar a').on('click',function(event){
  if(this.hash !==''){
      event.preventDefault();
      const hash = this.hash;
 
  $('html,body').animate(
      {
          scrollTop: $(hash).offset().top -20
      },
      800
  );
}
});

$(document).ready(function(){
    $(".check").click(function(){
        $("#myCheck").prop("checked", true);
    });
    $(".uncheck").click(function(){
        $("#myCheck").prop("checked", false);
    });
});
