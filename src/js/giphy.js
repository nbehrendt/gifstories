var api = require("giphy")("dc6zaTOxFJmzC");

function getGiphy(keyword, callback){
  api.search({q: keyword,limit: 1}, function(err, res) {
    res.data.forEach((d) => {
      callback(d.images.fixed_height.url)
    })
  })
}

module.exports = {
  getGiphy: getGiphy
}
