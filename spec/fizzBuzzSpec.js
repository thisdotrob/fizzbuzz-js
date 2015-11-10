describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("If a number is divisible by 3 return 'Fizz'", function() {
    it("number 3 returns 'Fizz'", function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
    it("number 6 returns 'Fizz'", function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
    it("number 99 returns 'Fizz'", function() {
      expect(fizzBuzz.play(99)).toEqual('Fizz');
    });
  })

  describe("If a number is divisible by 5 return 'Buzz'", function() {
    it("number 5 returns 'Buzz'", function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
    it("number 50 returns 'Buzz'", function() {
      expect(fizzBuzz.play(50)).toEqual('Buzz');
    });
    it("number 100 returns 'Buzz'", function() {
      expect(fizzBuzz.play(100)).toEqual('Buzz');
    });
  })

  describe("If a number is divisible by 3 AND 5 return 'FizzBuzz'", function() {
    it("number 15 returns 'FizzBuzz'", function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
    it("number 45 returns 'Buzz'", function() {
      expect(fizzBuzz.play(45)).toEqual('FizzBuzz');
    });
    it("number 90 returns 'Buzz'", function() {
      expect(fizzBuzz.play(90)).toEqual('FizzBuzz');
    });
  })

  describe("If a number is NOT divisible by 3 or 5 return it", function() {
    it("number 1 returns 1", function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
    it("number 11 returns 11", function() {
      expect(fizzBuzz.play(11)).toEqual(11);
    });
    it("number 22 returns 22", function() {
      expect(fizzBuzz.play(22)).toEqual(22);
    });
  })

});
