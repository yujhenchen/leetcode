type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
    if (arr.length === 0) {
        return;
    }

    let index = 0;
    let subIndex = 0;
    let subArr: number[] = arr[index].toString().replaceAll('[', '').replaceAll(']', '').split(',').filter(ele => ele !== '').map(Number);

    while (index < arr.length) {
        // console.log(subArr);
        if (subArr.length > 0) {
            yield subArr[subIndex];
        }
        subIndex += 1;

        if (subIndex > subArr.length - 1) {
            index += 1;
            subIndex = 0;
            if (index < arr.length) {
                subArr = arr[index].toString().replaceAll('[', '').replaceAll(']', '').split(',').filter(ele => ele !== '').map(Number);
            }
        }

    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */