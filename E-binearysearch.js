function binarySearch(arr, l, r, x) {
    if (l > r) {
        return -1;
    }
    let mid = parseInt((l + r) / 2)

    if (arr[mid] == x) {
        return mid;
    }

    if (arr[mid] > x) {
        return binarySearch(arr, l, mid - 1, x);
    } else {
        return binarySearch(arr, mid + 1, r, x);
    }
}

let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18];
let x = 16;
let l = 0 ;
let n = arr.length - 1;
let result = binarySearch(arr, l, n, x);
if (result == -1) {
    console.log("Element is not present in array ");
}
else {
    console.log("Element is index " + result);
}