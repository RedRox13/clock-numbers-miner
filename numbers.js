'use strict';
var str = '4873279 ITS-EASY 888-4567 3-10-10-10 888-GLOP TUT-GLOP 967-11-11 310-GLOP F101010 888-1200 -4-8-7-3-2-7-9- 487-3279';

function businessesNumbers (string) {
	var string = string.replace(/ /g, '');
	var string = string.replace(/-/g, '');
	var string = string.replace(/[A-C]/g, '2');
	var string = string.replace(/[D-F]/g, '3');
	var string = string.replace(/[G-I]/g, '4');
	var string = string.replace(/[J-L]/g, '5');
	var string = string.replace(/[M-O]/g, '6');
	var string = string.replace(/[P,R,S]/g, '7');
	var string = string.replace(/[T-V]/g, '8');
	var string = string.replace(/[W-Y]/g, '9');

	var numbersArray = [];

	for (let i = 0; i < string.length; i += 7) {
		let strNew = string.slice(i, i + 7);
		numbersArray.push(strNew);
	}

	var finalString = '';
	var finalArray = [];
	var testArray = numbersArray;

	for (let i = 0; i < numbersArray.length; i++) {
		var counter = 0;
		for (let k = 0; k < testArray.length; k++) {
			if (numbersArray[i] == testArray[k]) {
				counter++;
				testArray.slice(k, 1);
			}
		}
		if (counter > 1) {
			finalArray.push(numbersArray[i].slice(0, 3) + '-' + numbersArray[i].slice(3) + ' ' + counter);
		}
	}

	finalArray = finalArray.filter(function(item, pos) {
		return finalArray.indexOf(item) == pos;
	})

	function compareNumeric(a, b) {
		 	if (a > b) return 1;
	  		if (a < b) return -1;
	}

	finalArray.sort(compareNumeric);

	for (let i = 0; i < finalArray.length; i++) {
		finalString += '\n' + finalArray[i];
	}

	if (finalArray.length == 0) {
		return "No duplicates."
	} else {
		return finalString;
	}
}
console.log(businessesNumbers(str))
