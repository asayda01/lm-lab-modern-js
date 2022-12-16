// Instructions can be found in rest_parameters.md

export function add( ... numbers) {
  // return numbers.reduce((sum,number) => sum += number);
  // refactored the function with the help of Michelle
  
  return numbers.reduce((sum,number) => sum + number, 0);
};

/*

add(1, 2, 3, 4, 5);

module.exports = add;

*/