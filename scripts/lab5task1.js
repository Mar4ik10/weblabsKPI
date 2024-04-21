
console.log("Завдання 1");
const inputArray = [10, 2, 6, 2, 8, 12, 25, 32];

function buildArray(array) {
    const arrayA = [];
    const arrayB = [];
    const arrayC = [];

    array.forEach(num => {
        if (num % 2 == 0 && num % 3) {
            arrayB.push(num);
        }

        else if (num % 2 == 0) {
            arrayA.push(num);
        }

        else if (num % 3 == 0) {
            arrayC.push(num)
        }
    });

    return [...arrayA, ...arrayB, ...arrayC]
}

const newArray = buildArray(inputArray);
console.log(`Початковий масив - ${inputArray}`);
console.log(`Новий масив - ${newArray}`);

console.log("Завдання 2");


function quickSort(array, start, end) {
    if (start >= end) {
        return;
    }

    let pivot = partition(array, start, end);
    quickSort(array, start, pivot - 1);
    quickSort(array, pivot + 1, end);
}

function partition(array, start, end) {
    let pivot = array[end];

    let i = start - 1

    for (var j = start; j <= end - 1; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    i++;
    [array[i], array[j]] = [array[j], array[i]];
    return i;
}
console.log(`Перед сортуванням -  ${newArray}`);
quickSort(newArray, 0, newArray.length - 1)
console.log(`Після сортування - ${newArray}`);
