exports.min = function min(array) {
    let min = 0;
    if (!(array === undefined || array.length === 0)) {
        min = array[1];
        array.forEach(element => {
            min = element < min ? element : min;
        });
    }
    return min;
}

exports.max = function max(array) {
    let max = 0;
    if (!(array === undefined || array.length === 0)) {
        max = array[1];
        array.forEach(element => {
            max = element > max ? element : max;
        });
    }
    return max;
}

exports.avg = function avg(array) {
    let avg = 0;
    if (!(array === undefined || array.length === 0)) {
        array.forEach(element => {
            avg += element;
        });

        avg /= array.length;
    }
    return avg;
}