const hello = (name:string)=>{
    return `hello ${name}`
}

hello(12)


function a():void{
    //不返回任何值
}

//类型断言
let someValue:any = 'this is a string'
let strLength:number = (<string>someValue).length
let strLength2:number = (someValue as string).length 

let yz:[number,string] = [1,'2']

yz[3] = 2