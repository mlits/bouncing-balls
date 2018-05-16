// function to generate random number
export function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}
