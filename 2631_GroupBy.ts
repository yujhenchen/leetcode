declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function (fn) {
    // setp1: define the return variable and its type
    let result: Record<string, typeof this[]> = {};

    // setp2: figure out to access the value of Array.prototype
    // console.log(this);

    // step3: iterate the array and add to result
    this.forEach(
        ele => {
            // if key exists, push to array
            if (result[fn(ele)]) result[fn(ele)].push(ele);

            // else create new pair
            else result[fn(ele)] = [ele];
        }
    );
    return result;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
