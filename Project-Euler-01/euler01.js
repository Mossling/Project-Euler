var results = 0;
for (var num = 0; num < 1000; num++) {
  if (num%3 == 0 || num%5 == 0) {
    results = results + num;
  }
}
alert(results);
