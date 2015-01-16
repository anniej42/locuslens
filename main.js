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
  $('#uploadDimmer')
    .dimmer('show');
  $('#imageLoader').dimmer('show');
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

// UPLOAD IMAGE PREVIEW 

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#userUploadPreview')
        .attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
  $("#imageLoader").dimmer('hide');
  $('#userSubmit').removeClass("disabled");

}

// if user hits "cancel" on the uploader, reset everything
$("#userCancelUpload").click(function(){
  $('#imageLoader').dimmer('hide');
  $('#uploadDimmer').dimmer('hide');
  $('#userSubmit').addClass("disabled");
  $('#userUploadPreview')
        .attr('src', "#");

})