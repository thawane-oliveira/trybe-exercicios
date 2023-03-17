var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    Tv.prototype.turnOn = function () {
        console.log("TV " + this.brand + ", " + this.size + "\", resolution: " + this.resolution + " \navailable connections: " + this.connections);
    };
    return Tv;
}());
var tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn();
