// function to generate random number
export function random(min, max, exp) {
  let num;
  if (exp !== undefined) {
    do {
      num = Math.floor(Math.random() * (max - min)) + min;
    }
    while (num === 0);
  } else {
    num = Math.floor(Math.random() * (max - min)) + min;
  }
  return num;
}
