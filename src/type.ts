/*基础类型 */
let isDone: boolean = false;
let isDone1: Boolean = new Boolean(false);
let string: string = 'liuhuan';
console.log(isDone, isDone1);

/* 数组 */
let ary: Array<number | string> = [1, 2, '3'];
let ary1: number[] = [1, 2, 3, 4];
let ary2: (number | string)[] = [1, 2, 3, 'love'];
console.log(ary, ary1, ary2);

/* 元组 */
/* let x : [string,number];
x = ['111221212',3];
x.forEach(item=>{
// 这样会报错是因为number没有length，必须要找到这两个数据共同的方法
    console.log(item.length);
}) */

/* 枚举 */
// 我们给他赋值相当于重赋值索引
enum Color { Red = 100, Blue = 90, Green = 9 };
// let c : Color;  //undefined
/* 根据名字找索引 */
let c: Color = Color.Blue;  //0
/* 根据索引找名字 */
let b: string = Color[9];  //=>Green
console.log(c, b);

/* any */
let notSure: any = 4;
console.log(notSure.toFixed(2));    //4.00
console.log(notSure.toString());    //4
// 包含了不同类型数据的数组时比较有用
let list: any[] = [1, true, '123'];

/* void */
// 当一个函数没有返回值时
function warnUser(): void {
    console.log(111);
}
let unusable: void = undefined;

/* nerver */
// 一下是返回never类型的函数
function error(msg: string): never {
    throw new Error(msg);
}
// 推断为never类型的返回值
function fail() {
    return error('something failed');
}
function infiniteLoop(): never {
    while (true) { }
}

/* 作用域规则 */
function f(shouldInnitail: boolean) {
    if (shouldInnitail) {
        var x = 10;

    }

    return x;
}












