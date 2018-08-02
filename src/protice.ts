/* 案例1 */
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person:Person) {
    console.log(person);
    
    return 'hello, ' + person.firstName + person.lastName;
}
let user = {firstName : 'liu1',lastName: 'huan1'};
document.body.innerHTML = greeter(user);

/* 案例2 */
class Student {
    fullname: string;
    constructor(public firstName : string, public middleInitial :string, public lastName:string) {
        this.fullname = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function hello(person: Person) {
    console.log(person);
    return 'hello' + person.firstName + person.lastName;
}
let user1 = new Student('eva',',','1963');
document.body.innerHTML = hello(user1);