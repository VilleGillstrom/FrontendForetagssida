
const func = (x) => {
  let double = x * 2;
  let half = x / 2;
  let expo = x * x;
  return [double, half, expo]
}

let [a, b, c] = func(4)

console.log(a)
console.log(b)
console.log(c)
