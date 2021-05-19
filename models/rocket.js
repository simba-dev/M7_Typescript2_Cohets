"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(id, nPropulsors) {
        this.propulsors = new Array();
        this.id = id;
        this.nPropulsors = nPropulsors;
    }
    Rocket.prototype.addWheel = function (propulsor) {
        this.propulsors.push(propulsor);
    };
    return Rocket;
}());
