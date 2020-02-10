// Sprite
// var element = document.querySelector('#sprite');
// var sprite = new Motio(element, {
// 	fps: 10,
// 	frames: 14
// });
// sprite.play(); // start animation
$(function() {

  var $example = $('#sprite .example');
  var frame = $example.find('.frame')[0];
  var motio = new Motio(frame, {
  	// fps: 10,
  	frames: 34
  });
console.log($example);
  // Play when mouse enters the frame, and pause when it leaves
  $example.on('mouseenter mouseleave', function (event) {
  	motio[event.type === 'mouseenter' ? 'play' : 'pause']();
  });


  // CIRCULAR EXAMPLE
  // var $example = $('#circview .example');
  // var exampleLeft = $example.offset().left;
  // var exampleWidth = $example.width();
  // var frame = $example.find('.frame')[0];
  // var motio = new Motio(frame, {
  //   frames: 34
  // });
  //
  // // Update example left offset on window resize
  // $(window).on('resize', function () {
  //   exampleLeft = $example.offset().left;
  // });
  //
  // // Activate frame based on the cursor position
  // $example.on('mousemove', function (event) {
  //   motio.to(Math.floor(motio.frames / exampleWidth * (event.pageX - exampleLeft)), true);
  // });


});
