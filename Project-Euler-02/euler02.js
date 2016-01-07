
var x = 0;
var y = 1;
var results = 0;
for (var i = 0; y < 4000000; i++) {
	if (y%2 == 0) {
		results += y;
	}
	y = x + y;
	x = y - x;
}
alert(results);
