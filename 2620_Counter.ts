function createCounter(n: number): () => number {
    let counter: undefined | number = undefined;

    return function () {
        // if currentCount not exist, create and return
        // else return currentCount +1
        // console.log(counter);
        if (counter !== undefined) {
            counter = counter + 1;
        }
        else {
            counter = n;
        }
        return counter;
    }
}
