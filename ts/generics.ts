function echo<T>(arg: T):T{
    return arg
}

//使用才定义
const result:string  = echo('123')

function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}

const result2:[number,string] = swap(['1',1])

interface len {
    length:number
}
function ea<T extends len>(arg:T):T{
    console.log(arg.length)
    return arg
}
//就是约束参数必须有Length属性

const str = ea('s')
const obj = ea({length:2})
const arr3 = ea([1])