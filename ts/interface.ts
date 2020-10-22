interface Person {
    readonly id:string
    name?: string,
    age?: number,

}
//?表示可选  readonly 只读属性
let p1 :Person = {
    id:'a',
   name:'2',
   age: 5
}

function add(x: number, y:number,z?):number{
     return x + y
}


let r1 = add(1,2,3)

const fn1 = function(x:number):number{
 return x +1
}

const fn2:(x: number)=> number = fn1   //函数

