// Instructions can be found in rest_parameters.md

export function add( ... numbers) {
  return numbers.reduce((sum,number) => sum += number);
};

/*

add(1, 2, 3, 4, 5);

module.exports = add;

*/