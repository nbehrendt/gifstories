var sparse = function(string) {
  string = string.replace(/[^\w\s]/gi, ''); // clear punctuation and special characters
  var splitString = string.split(" ");

  if (splitString.length > 2) {
    var sortedStrings = splitString.sort(function(a, b) {
      return b.length - a.length;
    });
    return sortedStrings[0] + " " + sortedStrings[1] + " " + sortedStrings[2];
  }

  return string;

}

module.exports = {
  sparse: sparse
}
