// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-119935815-1');


// subscribers to google sheets & form 
$('#gform').on('submit', function(e){
  	$('#gform *').fadeOut(1);
  	$('#gform').prepend('Thanks! Stay quilty....');
});

//close the modal with x 
$('.cancel-icon').click(function(){
    $('.bs-example-modal-sm').modal('hide');
});

