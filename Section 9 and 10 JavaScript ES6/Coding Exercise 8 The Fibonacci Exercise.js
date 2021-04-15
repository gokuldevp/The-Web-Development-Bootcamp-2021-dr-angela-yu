function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    var num = 0;
    var fib = [];
    for (var i=0; i<n; i++){
        if (i < 2) {
            num = i;
        } else {
            num = fib[fib.length-1] + fib[fib.length-2];
        }
        fib.push(num)
    }
    return fib;