x = 999;
n = 1;
resultsArray = [];

function calc (){
	for (i = 0; i < 200; i++){
		for (y = 999; y >= x; y--, n++){
			
			var num = x*y;
			num = num.toString();
			
			if (num === num.split("").reverse().join("")){
				console.log("This is calculation #" + n + ", (" + x + " x " + y + " = " + num + "). This palindrome has been added to the results array.");
				resultsArray.push(num);
			}
			
		}
		x = x - 1;
		y = 999;
	}
}

calc();
console.log(Math.max(...resultsArray) + " is the largest palindrome.");
