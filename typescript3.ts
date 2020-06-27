// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = 'brown';
let favoriteQuote: string = `I'm not old; I'm only ${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'tiger', 'bear'];

// Object
let wizard: object = {
  a: 'John'
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3
}
let sizeName: string = Size[2];
let sizeValue: number = Size.Small;
