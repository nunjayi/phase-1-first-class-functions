function receivesAFunction(fn){
    return fn()
}
function returnsANamedFunction(){
    return function log(){
        return 'This is a named function!'
    }
}
function returnsAnAnonymousFunction(){
    return function(a){
        return 'Anonymous functon'
    }
}
console.log(receivesAFunction(()=>console.log('helloworld'))
)
console.log(returnsAnAnonymousFunction()
)
console.log(returnsANamedFunction())

