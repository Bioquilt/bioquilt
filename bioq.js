// subscribers to google sheets & form 
$('#gform').on('submit', function(e){
  	$('#gform *').fadeOut(1);
  	$('#gform').prepend('Thanks! Stay quilty....');
});

//close the modal with x 
$('.cancel-icon').click(function(){
    $('.bs-example-modal-sm').modal('hide');
});

//hover over scientific advisory board
let sab1 = document.getElementById('parent1');
sab1.onmouseover = function() {
  document.getElementById('popup1').style.display = 'block';
}
sab1.onmouseout = function() {
  document.getElementById('popup1').style.display = 'none';
}

let sab2 = document.getElementById('parent2');
sab2.onmouseover = function() {
  document.getElementById('popup2').style.display = 'block';
}
sab2.onmouseout = function() {
  document.getElementById('popup2').style.display = 'none';
}

