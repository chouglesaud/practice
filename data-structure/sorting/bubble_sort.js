const array = [9, 6, 3, 5, 8, 1];

console.log(bubble_sort());

function bubble_sort() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}

function swap(a, left, right) {
    let temp = a[left];
    a[left] = a[right];
    a[right] = temp;
}
