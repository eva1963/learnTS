function greeter(person) {
    console.log(person);
    return 'hello, ' + person.firstName + person.lastName;
}
let user = { firstName: 'liu1', lastName: 'huan1' };
document.body.innerHTML = greeter(user);
/* 案例2 */
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullname = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}
function hello(person) {
    console.log(person);
    return 'hello' + person.firstName + person.lastName;
}
let user1 = new Student('eva', ',', '1963');
document.body.innerHTML = hello(user1);
//# sourceMappingURL=protice.js.map