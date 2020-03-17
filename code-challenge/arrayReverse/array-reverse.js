
let arrayNum = [1, 2, 3, 4, 5, 6];
let reverseArray = (arr) => {
  for (let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
    let el = arr[i];
    console.log(el);
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = el;
  }
  return arr;
}
console.log(reverseArray(arrayNum));


