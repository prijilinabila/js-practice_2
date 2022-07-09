var sum = 0;
var number = 370;
var temp = number;
while (temp > 0) {
    var remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = temp-remainder;
    temp = temp / 10; 
}
if (sum == number) {
    console.log(number,'is an Armstrong number');
}
else {
    console.log(number, 'is not an Armstrong number');
}
