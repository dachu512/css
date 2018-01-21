'use strict';

$(function(){
   $('#hamburger') .click(function() {
      $('#first-line').addClass('cross'); 
       
   });
});

$(function(){
   $('#hamburger') .click(function() {
      $('#second-line').addClass('cross'); 
   });
});

$(function(){
   $('#hamburger') .click(function() {
      $('#third-line').addClass('hide'); 
   });
});

$(function(){
   $('#hamburger') .click(function() {
      $('#ham-content').addClass('show-list');
       $('#ham-content').css({
           'transition' : 'all 2s linear'
       });
   });
});s



