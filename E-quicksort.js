function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var tar = array[0];
    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < tar) {
                left[left.length] = array[i];
        }
        else {
            right[right.length] = array[i];
        }
    }
    result = quickSort(left)
    result = result.concat(tar)
    result = result.concat(quickSort(right))

    return result;

};

let array = [10, 18, 16, 4, 8, 12, 6, 11, 22, 2];
console.log(quickSort(array));