$('.dropdown').dropdown({
          // you can use any ui transition
          transition: 'drop'
        })
      ;

$('.ui.accordion')
  .accordion()
;

// $('.dimmer')
//   .dimmer({
//    closable: false
//   })
// ;

$('.userAddComment').click(function() {
  $('#commentDimmer')
    .dimmer('show');
});


$('#userSearch').click(function() {
  $('#searchDimmer')
    .dimmer('show');
});

// $('.ui.dimmer')
//   .dimmer('show');

function BlockElasticScroll(event) {
    event.preventDefault() ;
}

// custom button triggers native button
$('#userUploadNew').click(function(){
  $('#cameraInput').click();
})

$('.ui.sticky')
  .sticky();
;


// # NAVIGATION

function toggle(){
  $('#goUser').toggleClass("active");
  $('#goHome').toggleClass("active");

  $('#timeline').toggleClass("hidden");
  $('#userPage').toggleClass("hidden");
}

$('#goUser').click(toggle);
$('#goHome').click(toggle);

$('#userHighFive').click(function(){
  $('#userHighFive').toggleClass("active");
  if ($('#userHighFive').hasClass("active")){
    $('#numLikes').html(parseInt($('#numLikes').html())+1);
    $('#numLikesField').transition('pulse');
  } else {
    $('#numLikes').html(parseInt($('#numLikes').html())-1);
  }
})

// var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
// $('.iImage').width(width-20);