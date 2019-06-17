const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 to NOT equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toBeEqual / toStrictEqual
test('User should be Daniel Molina object', () => {
  expect(functions.createUser()).toStrictEqual({ // "toBe" only compare primitive values (numbs, boolean, etc), to compare arrays and objects we use "toEqual" or "toStrictEqual"
    firstName: 'Daniel',
    lastName: 'Molina'
  });
});

// toBeLessThan / toBeGreaterThan / toBeLessThanOrEqual / toBeGreaterThanOrEqual
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex -> toMatch
test('There is no O in team', () => {
  expect('team').not.toMatch(/O/i); // the "i" makes the regex case sensitive
});

// Arrays -> toContain
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});
