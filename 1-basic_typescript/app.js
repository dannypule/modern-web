"use strict";
var Animal = (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
    }
    Animal.prototype.getInfo = function () {
        document.write("\n            " + this.name + " belongs to " + this.owner + ". <br/> \n        ");
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
var dog = new Animal('Pogo', 'Jim');
dog.getInfo();
dog.weight = 400;
var weight = dog.weight;
document.write("\n    Weight is " + weight + ". <br/>\n");
//# sourceMappingURL=app.js.map