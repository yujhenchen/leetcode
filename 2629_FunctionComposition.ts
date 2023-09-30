type F = (x: number) => number;

function compose(functions: F[]): F {
    return function (x) {
        if (functions.length === 0) return x;

        let result = functions[functions.length - 1](x);
        for (let i = functions.length - 2; i >= 0; i -= 1) {
            result = functions[i](result);
        }
        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
