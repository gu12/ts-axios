const enum Direction {
    UP,
    Down,
    Left,
    Right
}

console.log(Direction.UP)

enum Color {
    Red,
    Green,
    Blue
}

let c:Color = Color.Green

let colorName:string = Color[2]
console.log(colorName)