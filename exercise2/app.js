var comp = require('./comparer');
var calc = require('./calculator');

var num1 = 25;
var num2 = 25;
var result;

if(comp.AreNumberEqual(num1, num2)) {
    result = calc.Add(num1, num2);
}
else {
    result = calc.Subtract(num1, num2);
}

console.log(result);