var sparse=function(r){r=r.replace(/[^\w\s]/gi,"");var e=r.split(" ");if(e.length>2){var t=e.sort(function(r,e){return e.length-r.length});return t[0]+" "+t[1]+" "+t[2]}return r};module.exports={sparse:sparse};