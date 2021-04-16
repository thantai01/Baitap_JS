
let arr = [-3,5,6,8,7,4,1,0,7,8];
let first = 0;
let last = arr.length-1;
while (first < last) {
    let b = arr[first];
    arr[first] = arr[last];
    arr[last] = b;
    first++;
    last --;
}
console.log(arr)


