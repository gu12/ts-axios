var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    // protected
    // readonly
    Animal.categoies = ['1', '2'];
    return Animal;
}());
//private 私有的 public公共
console.log(Animal.categoies);
var dog = new Animal('xiaohei');
// console.log(dog.name)
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.run = function () {
        return '子类的' + _super.prototype.run.call(this);
    };
    return Cat;
}(Animal));
var hh = new Cat('h');
// console.log(dog.run())
console.log(hh.run());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.switchRadio = function () {
    };
    Car.prototype.check = function () {
    };
    return Car;
}());
