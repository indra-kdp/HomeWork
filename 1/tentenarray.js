let arr = new Array();
for (let i=0; i < 10; i++) {
  arr[i] = new Array();
  for (let j=0; j < 10; j++){
    arr[i][j]=Math.floor(Math.random()*90 + 10);
  }
}

let evenCount = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] % 2 === 0) {
      evenCount++;
    }
  }
}

let sumOver100 = 0;
for (let i = 0; i < arr.length; i++) {
  let rowSum = arr[i].reduce((acc, curr) => acc + curr, 0);
  if (rowSum > 100) {
    sumOver100++;
  }
}

console.log(arr);
console.log(evenCount);
console.log(sumOver100);