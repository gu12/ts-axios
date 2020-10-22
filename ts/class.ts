class Animal {
    private  name: string;
    // protected
    // readonly
    static categoies: string[] = ['1','2']
    constructor(name: string) {
        this.name = name
    }
    run(){
        return `${this.name} is running`

    }

}
//private 私有的 public公共


console.log(Animal.categoies)
const dog = new Animal('xiaohei')
// console.log(dog.name)
class Cat extends Animal{
    constructor(name){
        super(name)
    }
    run(){
        return '子类的'+ super.run()

    }
}

const hh = new Cat('h')
// console.log(dog.run())

console.log(hh.run())


interface Radio {
    switchRadio():void
}

interface Battery {
    check()
}

class Car implements Radio,Battery{
    switchRadio(){

    }
    check(){
        
    }
}