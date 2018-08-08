/*基础类型 */
let isDone = false;
let isDone1 = new Boolean(false);
let string = 'liuhuan';
console.log(isDone, isDone1);
/* 数组 */
let ary = [1, 2, '3'];
let ary1 = [1, 2, 3, 4];
let ary2 = [1, 2, 3, 'love'];
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
var Color;
(function (Color) {
    Color[Color["Red"] = 100] = "Red";
    Color[Color["Blue"] = 90] = "Blue";
    Color[Color["Green"] = 9] = "Green";
})(Color || (Color = {}));
;
// let c : Color;  //undefined
/* 根据名字找索引 */
let c = Color.Blue; //0
/* 根据索引找名字 */
let b = Color[9]; //=>Green
console.log(c, b);
/* any */
let notSure = 4;
console.log(notSure.toFixed(2));
console.log(notSure.toString());
//# sourceMappingURL=type.js.map