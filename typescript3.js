// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favoriteQuote = "I'm not old; I'm only " + age;
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'tiger', 'bear'];
// Object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeValue = Size.Small;
// Any (use with caution)
var whatever = 'oh nooooooooooo';
whatever = 5;
whatever = true;
console.log(whatever);
// void (lack of return value)
var sing = function () {
    console.log('Hello world');
};
// never
// Tests that a function never returns and a variable is never true
// Differs from void in the sense that never functions cannot have a reachable end point
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log('Fight!');
};
var dog = {};
dog.count;
var fightLizardArmy = function (lizards) {
    console.log('Fight!');
};
fightLizardArmy({ count: 3, type: 'gecko' });
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('Rawr');
console.log(lion.greet());
