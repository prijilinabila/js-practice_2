
var n = 960;
var temp = n;
var total=0;
var digits=0;
while (temp > 0) {
    var remainder = temp % 10;
    total = total+remainder;
    temp = temp-remainder;
    temp = temp / 10; 
    digits++;
}
var avg =total/digits;
console.log('average is',avg);