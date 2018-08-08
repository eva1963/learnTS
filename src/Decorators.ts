/* 案例1 */
function f() {
    console.log('f():evaluated');

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('f():called');
    }

}

function g() {
    console.log('g(): evaluted');
    return function (target: any, propertyKey: string, descriptor: PropertyDecorator) {
        console.log('g(): called');
    }

}
class C {
    @f()
    @g()
    method() { }
}

/* 案例2 */
function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    }
}
@classDecorator
class Greeter {
    property = 'property';
    hello: string;

    constructor(m: string) {
        this.hello = m;
    }
}
console.log(new Greeter("word"));