var $ = require("jquery");
var api = require("./giphy");
var s = require("./sparse");

$(document).ready(function() {

  var $initialCard = $('.initial-card');
  var $storyContainer = $('.story-container');
  var $mainInput = $('#main-input');
  var $clearBtn = $('#clear-button');
  var $submitBtn = $('#submit-form');

  // display instructions
  $initialCard.hide().fadeIn(1000);

  // clear story
  $clearBtn.click(function(){
    $('.story-card').remove();
    $mainInput.attr('placeholder', 'What happened?')
  });

  // define function to make API call to Giphy

  var grabGif = function() {

    var inputValue = $mainInput.val();
    var keyword = s.sparse(inputValue);

    api.getGiphy(keyword, function(url) {
      $storyContainer.append(`
        <div class="story-card">
          <div class="card-header">${inputValue}</div>
              <img class="card-gif" src="${url}" />
          <div class="clearfix"></div>
        </div>
      `)
    })
    $mainInput.val('');
    $storyContainer.animate({scrollTop: $storyContainer[0].scrollHeight}, 1000);
  }

  // execute function on enter

  $(document).keypress(function(e) {
    if (e.which == 13) {
      
      e.preventDefault();

      if($initialCard) {
        $initialCard.hide();
      }

      grabGif();

      if($('.story-card')) {
        $mainInput.attr('placeholder', 'Then what happened?');
      }
    }
  });

  // execute function on button click

  $submitBtn.click(function(e) {

    e.preventDefault();

    if($initialCard) {
      $initialCard.hide();
    }

    grabGif();

    if($('.story-card')) {
      $mainInput.attr('placeholder', 'Then what happened?');
    }
  });

}); // end document ready wrapper
