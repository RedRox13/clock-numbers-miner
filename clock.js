'use strict';

var input ='12:00 9:00 8:10 8:11 3:46 0:00 08:12';
var resultString = '';

function clockHands(string) {
	var target = ':';
	var pos = 0;

	for (let i = 0; i < string.length / 4; i++){
		var foundPos = string.indexOf(target, pos);
		
		if (foundPos > 0) {
			pos = foundPos + 1;
			var minuteDegree = +string.slice(foundPos + 1, foundPos + 3) * 6;
			var hourDegree = +string.slice(foundPos - 2, foundPos) * 30 + minuteDegree / 6 * 0.5;
			var result = 0;

			if (hourDegree < 30 || hourDegree > 360) {
				break;
			}
			
			if (minuteDegree < 0 || minuteDegree > 354) {
				break;
			}
			
			if (hourDegree + minuteDegree == 0) {
				break;
			}

			if (hourDegree > minuteDegree) {
				result = hourDegree - minuteDegree;
			} else if (minuteDegree > hourDegree) {
				result = minuteDegree - hourDegree;
			} else {
				result = 0;
			}

			if (result > 180) {
				result = 360 - result;
			}
			result = result.toFixed(3)
			resultString += result + '\n';

		}
	}
	return resultString;
}

console.log(clockHands(input));