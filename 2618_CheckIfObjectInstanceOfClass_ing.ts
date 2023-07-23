function checkIfInstanceOf(obj: any, classFunction: any): boolean {

    if (!(typeof classFunction === 'function')) {
        return false;
    }

    if (obj === undefined || obj === null || classFunction === undefined || classFunction === null) {
        return false;
    }

    const isObjReferenceData = typeof obj === 'object' || typeof obj === 'function';
    if (isObjReferenceData) {
        return obj instanceof classFunction;
    }
    else {
        return classFunction(obj) !== 'NaN' ? true : false;
    }
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */