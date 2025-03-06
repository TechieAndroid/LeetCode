/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"        
    }
};

createHelloWorld();


const f = createHelloWorld();

console.log(f())