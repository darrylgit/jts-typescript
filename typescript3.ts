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

// Any (use with caution)
let whatever: any = 'oh nooooooooooo';
whatever = 5;
whatever = true;
console.log(whatever);

// void (lack of return value)
let sing = (): void => {
  console.log('Hello world');
};

// never
// Tests that a function never returns and a variable is never true
// Differs from void in the sense that never functions cannot have a reachable end point
let error = (): never => {
  throw Error('ooops');
};

// interface (like custom type, useful for React)
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('Fight!');
};

// Type assertion
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as CatArmy;
dog.count;

// Optional properties
interface LizardArmy {
  count: number;
  type: string;
  magic?: string;
}

let fightLizardArmy = (lizards: LizardArmy): void => {
  console.log('Fight!');
};

fightLizardArmy({ count: 3, type: 'gecko' });

// Classes
class Animal {
  // private keyword prevents us from accessing .sing outside this class declaration
  private sing: string = 'lalalala';

  constructor(sound: string) {
    this.sing = sound;
  }

  greet() {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal('Rawr');
console.log(lion.greet());
