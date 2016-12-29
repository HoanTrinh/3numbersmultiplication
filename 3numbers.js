var num1, num2, num3;

do {
  num1 = parseInt(Math.random() * 100);
  num2 = parseInt(Math.random() * 100);
  num3 = parseInt(Math.random() * 100);

  console.log('Num1: ', num1);
  console.log('Num2: ', num2);
  console.log('Num3: ', num3);
  console.log('');
} while (isEven(num1, num2, num3));

function isEven(num1, num2, num3) {
  var answer = num1 * num2 * num3;

  if(answer % 2 === 0) {
    return true;
  }
  return false;
}
