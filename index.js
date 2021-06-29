function receivesAFunction(spy) {
    spy ();
}

function returnsANamedFunction(name, fn) {
    return function fn(name){
        console.log ("returns a named function")
    }
}

function returnsAnAnonymousFunction() {
    let fn = ("function")
    return (fn) => { 
        console.log ("returns an anonymous function");}
}