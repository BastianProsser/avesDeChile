const array = [1, 2, [3, 4]]
let reducir = array.reduce((a, b) => a.concat(b), [])
console.log(reducir)