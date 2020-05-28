$(document).ready(function () {
  //hide me
  $("#hide").click(function () {
    $("p").hide();
  })
  // show me
  $("#show").click(() => {
    $("p").show();
  })
  //toggle to hide and show in slow motion
  $("#toggle").click(() => {
    $("p").toggle("slow");
  })
  //slide down when the blue box is hidden
  $("#slide_down").click(function () {
    $("#blue_box").slideDown("slow")
  })
  // slide up when the blue box is shown and hide
  $("#slide_up").click(function () {
    $("#blue_box").slideUp("slow");
  })

  //Toggle sliding the blue box

$("#slide_toggle").click(function () {
    $("#blue_box").slideToggle("slow");
  })

  //fade in 
  $("#fade_in").click(function() {
    $("#red_box").fadeIn("slow")
  })
  //Fade out
  $("#fade_out").click(function() {
    $("#red_box").fadeOut("slow")
  })

  //add purple class to the span
  $("#add_class").click(function() {
    $("span").addClass("purple")
  })
  //add BEFORE word before the span text
  
})