// subscribers to google sheets & form 
$('#gform').on('submit', function(e){
  	$('#gform *').fadeOut(1);
  	$('#gform').prepend('Thanks! Stay quilty....');
});

//close the modal with x 
$('.cancel-icon').click(function(){
    $('.bs-example-modal-sm').modal('hide');
});

