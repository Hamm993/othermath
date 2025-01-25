var othermath = othermath || {};

othermath.factorial = (function(num) {
    var n = num;
    function fac(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= n;
        }
        return result;
    }
    factorial = fac(n);
    return factorial;
})

othermath.opposite = (function(num) {
    var n = num;
    const opposite = '-'+n;
    return opposite;
})

othermath.isEven = (function(num) {
    return num % 2 === 0;
})