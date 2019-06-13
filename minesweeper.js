'use strict';

var fieldArray = [];
var minesArray = [];
var fieldString = '';

function minesweeper(height, width, mines) {

	if (mines < height * width) {

		for (let i = 1; i <= height * width; i++) {
			fieldArray.push('.');
		}

		let unique = [];

		while (minesArray.length < mines) {
			var random = 1 + Math.random() * (height * width);
			random = Math.floor(random);
			unique.push(random);
			minesArray = unique.filter(function(elem, pos) {
		  	  	return unique.indexOf(elem) == pos;
			});
		}

		function compareNumeric(a, b) {
		 	if (a > b) return 1;
	  		if (a < b) return -1;
		}

		minesArray.sort(compareNumeric);

		for (let i = 0; i < mines; i++) {
			fieldArray[minesArray[i] - 1] = '*';
		}

		var fieldStringDot = '';

		for (let i = 1; i <= fieldArray.length; i++) {
			if (i == fieldArray.length) {
				fieldStringDot += fieldArray[i - 1];
				break;
			} else {
				fieldStringDot += fieldArray[i - 1];
				if (i % width == 0) {
					fieldStringDot += '\n';
				}
			}
		}

		console.log(fieldStringDot);

		function checkMine(i) {
			switch(fieldArray[i]) {
				case '.': fieldArray[i] = 1; break;
				case 1: fieldArray[i] = 2; break;
				case 2: fieldArray[i] = 3; break;
				case 3: fieldArray[i] = 4; break;
				case 4: fieldArray[i] = 5; break;
				case 5: fieldArray[i] = 6; break;
				case 6: fieldArray[i] = 7; break;
				case 7: fieldArray[i] = 8; break;
			}
		}

		for (let i = 0; i < height * width; i++) {
			if (fieldArray[i - width - 1] == '*') {
				if (!(i % width == 0)) {
					checkMine(i);
				}
			}

			if (fieldArray[i - width] == '*') {
				checkMine(i);
			}

			if (fieldArray[i - width + 1] == '*') {
				if (!((i + 1) % width == 0)) {
					checkMine(i);
				}
			}

			if (fieldArray[i - 1] == '*') {
				if (!(i % width == 0)) {
					checkMine(i);
				}
			}

			if (fieldArray[i + 1] == '*') {
				if (!((i + 1) % width == 0)) {
					checkMine(i);
				}
			}

			if (fieldArray[i + width - 1] == '*') {
				if (!(i % width == 0)) {
					checkMine(i);
				}
			}

			if (fieldArray[i + width] == '*') {
				checkMine(i);
			}

			if (fieldArray[i + width + 1] == '*') {
				if (!((i + 1) % width == 0)) {
					checkMine(i);
				}
			}
		}	

		for (let i = 0; i < height * width; i++) {
			if (fieldArray[i] == '.') {
				fieldArray[i] = 0;
			}
		}

		for (let i = 1; i <= fieldArray.length; i++) {
			if (i == fieldArray.length) {
				fieldString += fieldArray[i - 1];
				break;
			} else {
				fieldString += fieldArray[i - 1];
				if (i % width == 0) {
					fieldString += '\n';
				}
			}
		}

		return fieldString;

	}
}

console.log(minesweeper(4,6,4));

