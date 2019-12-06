// $( ".bergLayer2" ).click(function() {
//   $( "#ocean1" ).fadeOut( "slow", function() {
//
//   });
// });

// window.onload = function(){
// 	for(var i=0; i<totalFish; i++){
// 		var fish = $('<img class="fish" src="images/fish.png">');
// 		$('body').append(fish);
// 	}
//
// }

// $( ".bergLayer2" ).click(function() {
//   $( this ).fadeOut( 1000, function() {
//     $( "div" ).text( "'" + $( this ).text() + "' has faded!" );
//     $( this ).remove();
//   });
// });
// $( "span" ).hover(function() {
//   $( this ).addClass( "hilite" );
// }, function() {
//   $( this ).removeClass( "hilite" );
// });

// $( "text1" ).click(function() {
//   $( "#ocean1" ).fadeOut( "slow" );
// });

$(document).ready(function(){
  $(".bergLayer2").click(function(){
    $("#ocean1").fadeOut(1500);
  });
});
