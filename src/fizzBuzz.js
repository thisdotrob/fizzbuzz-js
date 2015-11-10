

function FizzBuzz() {
};

FizzBuzz.prototype.play = function(num) {
  if (this.isDivisibleBy(15, num)) {
    return 'FizzBuzz';
  } else if (this.isDivisibleBy(3, num)) {
    return 'Fizz';
  } else if (this.isDivisibleBy(5, num)) {
    return 'Buzz';
  } else {
    return num;
  };
};


FizzBuzz.prototype.isDivisibleBy = function(divisor, num) {
  return num % divisor === 0;
};


var fizzBuzz = new FizzBuzz()

for (i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i))
}
