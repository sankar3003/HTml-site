
  $(document).ready(function(){

    $("#hide").click(function(){
        $("#hidet").hide();
      });
      
      $("#show").click(function(){
        $("#hidet").show();
      });
      $(".menu-icon").click(function(){
        // $(".menu-section .ul-menu").toggle();
        $(".menu-section").toggleClass('my');
 
      });  
  
 
  });
