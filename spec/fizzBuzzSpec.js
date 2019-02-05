describe('fizzBuzz', function() {

  beforeEach(function() {
    fizzbuzz = new fizzBuzz();
  });

  it('should have a test passing', function(){
    expect(3).toEqual(3);
  });

  it('should output the number 1', function(){
    expect(fizzbuzz.output()).toEqual(1);
  });
});
