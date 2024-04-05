/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

$(document).ready(function(){
  console.log("aaa");
  $('.owl-carousel').owlCarousel({
    items : 1,
    loop  : true,
    margin : 30,
    nav    : true,
    smartSpeed :900,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
  });
});