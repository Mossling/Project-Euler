var orig = 600851475143;
var num = 600851475143;

for (i = 2; i < num; i++) {
  if (num % i === 0) {
    console.log(i);
    num = num / i;
  }
}
console.log(num);
console.log("Number: " + orig + "\nLargest prime factor: " + num);
