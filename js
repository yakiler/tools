/**
  Compare two object values for equality
*/
var f = (a, b) => JSON.stringify(a).replace(/[\{\}\[\]\:]/g,',').split(',').sort().toString() == JSON.stringify(b).replace(/[\{\}\[\]\:]/g,',').split(',').sort().toString()
