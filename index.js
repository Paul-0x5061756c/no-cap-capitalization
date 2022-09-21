function capitalizeFirstLetter(string, locale = "en") {
  if(typeof string !== 'string' && !(string instanceof String)) {
    throw "input should be a string";
  }
  return string.replace(/^\p{CWU}/u, char => char.toLocaleUpperCase(locale))
};

function capitalizeFirstLetterOfEveryWord(string, locale = "en"){
  return string.split(" ").map(word => capitalizeFirstLetter(word, locale)).join(" ")
}

module.exports =  { capitalizeFirstLetter, capitalizeFirstLetterOfEveryWord }