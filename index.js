function receivesAFunction(callback) {
    callback(); // call the callback function
} 

function returnsANamedFunction() {
    function namedFunction() {
        // function body
    } 

    return namedFunction;
} 

function returnsAnAnonymousFunction() {
    return function() {
        // function body
    };
}