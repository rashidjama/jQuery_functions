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
  //add CODING-DOJO before the span text
  $("#before").click(function() {
    $("span").before("Coding-dojo ");
  })

  //add CODING-DOJO after the span text
  $("#after").click(function() {
    $("span").after(" WEB DEVELOPMENT ");
  })
  //Append jQuery word to span
  $("#append").click(function() {
    $("span").append(" jQuery ");
  })
  //change html tag span to h1
  $("#html").click(function() {
    $("span").html("<h1>H1 Replaced span tag!!</h1>");
  })
  //Get the attributes of paragraph
  $("#attri").click(() => { 
    console.log($("p").attr("id"))
  })
  //get the value of span
  $("#val").click(function() {
    console.log($("input").val());
  })
  //get or set the text of span
  $("#text").click(_=> {
    $("span").text("rashid is the new king!")
    console.log($("span").text());
  })
})