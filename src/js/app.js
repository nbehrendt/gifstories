var $ = require("jquery");
var api = require("./giphy");
var s = require("./sparse");

$(document).ready(function() {

  var $storyCard = $('.story-card');
  var $mainInput = $('#main-input');

  // define function to make API call to Giphy

  var grabGif = function() {

    var inputValue = $mainInput.val();
    var keyword = s.sparse(inputValue);

    api.getGiphy(keyword, function(url) {
      console.log(url);
      $storyCard.append(`<div class="new-gif"><img src="${url}" /></div>`)
      url = null;
    })
    $storyCard.append(`<div>${inputValue}</div>`)
    $mainInput.val('');
  }

  // execute function on enter

  $(document).keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();

      grabGif();

    }


    //append text value

  });

})
