var $ = require("jquery");
var api = require("./giphy");
var s = require("./sparse");

$(document).ready(function() {

  var $storyContainer = $('.story-container');
  var $mainInput = $('#main-input');
  var clearBtn = $('#clear-button');

  // clear story
  clearBtn.click(function(){
    $('.story-card').remove();
    $mainInput.attr('placeholder', 'What happened?')
  })

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
    $('.story-container').animate({ scrollTop: $('.story-container')[0].scrollHeight}, 1000);
  }

  // execute function on enter

  $(document).keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();

      grabGif();

      if($('.story-card')) {
        $mainInput.attr('placeholder', 'Then what happened?');
      }

    }

  });

})
