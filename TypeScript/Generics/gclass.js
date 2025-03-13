var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair.prototype.display = function () {
        console.log("Key = ".concat(this.key, ", val = ").concat(this.val));
    };
    return KeyValuePair;
}());
var kvp1 = new KeyValuePair();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); //Output: Key = 1, Val = Steve 
;
var kvProcessor = /** @class */ (function () {
    function kvProcessor() {
    }
    kvProcessor.prototype.process = function (key, val) {
        console.log("Key = ".concat(key, ", val = ").concat(val));
    };
    return kvProcessor;
}());
var proc = new kvProcessor();
proc.process(1, 'Bill'); //Output: key = 1, value = Bill
