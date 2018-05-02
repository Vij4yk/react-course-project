const add = (a,b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {

    const result = add(3,4);

    expect(result).toBe(7);


});

test('should return greeting with correct name', () => {

    const result = generateGreeting('Mike');

    expect(result).toBe('Hello Mike!');

} );

test('should return greeting when no name given', () => {

    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');

});