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

  $('#timeline').toggle()
  $('#userPage').toggle()
}

$('#goUser').click(toggle);
$('#goHome').click(toggle);



// var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
// $('.iImage').width(width-20);