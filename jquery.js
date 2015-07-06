$(document).ready(function(){
       $('#designerFilter').attr('checked', false);
    $('#developerFilter').attr('checked', false);
    
    $('#allFilter').attr('checked', true);
    $('input:checkbox').removeAttr('checked');
    
	$("#tab1").click(function(){
			$("#section1").toggle();
			$("#section2").hide();
			$("#section3").hide();
	 		return false;
			 
		});

	$("#tab2").click(function(){
			$("#section2").toggle();
			$("#section1").hide();
			$("#section3").hide();
	 		return false;
			 
		});

 		$("#tab3").click(function(){
			$("#section3").toggle();
			$("#section1").hide();
			$("#section2").hide();
	 		return false;
			 
		});
    
    
    
    	$(".clicktoshowEx").click(function(){
			$(".exceptions").toggle();
             
	 	
			 
		});
    
    
          
 
$(".clicktoshowEx").click(function() { 
  if ($(".exceptions").css('display')==='none') 
  { 
     $(".hideOrShow").text("Show"); 
  } 
  else 
  { 
     $(".hideOrShow").text("Hide"); 
  }; 
});







    
    
 
$("#designerFilter").on("click", function () {
if($("input:radio[id='designerFilter']").is(":checked")) {
    $('.des').css('display', 'block');
    
    $('.dev').css('display', 'none');
    
    $('.justDev').css('opacity', '0.2'); 
    $('.justDes').css('opacity', '1')}; 
    
    
}); 
    
$("#developerFilter").on("click", function () {
if($("input:radio[id='developerFilter']").is(":checked")) {
    $('.dev').css('display', 'block');
    $('.des').css('display', 'none');
    $('.justDes').css('opacity', '0.2'); 
 $('.justDev').css('opacity', '1')}; 
    
});   
    

    
        
$("#allFilter").on("click", function () {      
    $('#designerFilter').attr('checked', false);
    $('#developerFilter').attr('checked', false);
    $('.des').css('display', 'block');
    $('.dev').css('display', 'block');
    $('.justDev').css('opacity', '1'); 
    $('.justDes').css('opacity', '1'); 
});     
    
  
    

    
    
$("#resetFilter").on("click", function () {
 
            
    $('#designerFilter').attr('checked', false);
 $('#developerFilter').attr('checked', false);
         $('#allFilter').attr('checked', false);
    
        $('.dev').css('display', 'block');
     $('.justDev').css('opacity', '1'); 
});     
    

              
     
$(".pass").on("click", function () {
     $("input:checkbox[class=pass]").each(function () {        
     var checkBoxId =  $(this).attr("id");     
     
     if ( ( $('div').hasClass(checkBoxId) || $('div').hasClass('checklistItem') ) && this.checked == true) {
        $(this).parent().css('opacity', '0.3');   
         $(this).parent().css('border-left', '10px solid green');  
     
     }
     else {  
         $(this).parent().css('opacity', '1');
           $(this).parent().css('border-left', '2px solid black');  
     } 
});

});
    
    

        $("#resetChecks").on("click", function () {
             $("input:checkbox[class=pass]:checked").each(function () {     
            $('input:checkbox').removeAttr('checked');
             $(".guideline").css('opacity', '1');
                              $(".guideline").css('border-left', '2px solid black');
               
         });

  });


}); /*END*/