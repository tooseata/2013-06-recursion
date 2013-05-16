// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {

	if (typeof obj === 'number') {
		return (obj.toString());
	} else if (typeof obj === 'boolean') {
		return (obj.toString());
	} else if (typeof obj === 'string') {
		return ('"' + obj + '"');
	} else if (obj === null) {
		return ('' + obj);
	} else if (Array.isArray(obj)) {
		var newArray = [];
		
		for (var i = 0; i < obj.length; i++) {
			newArray.push(stringifyJSON(obj[i]));
		}
		return ('[' + newArray + ']');
	} else {
		var objectString = '';

		for (var key in obj) {
			if (objectString !== '') {
				objectString = objectString + ',';
			}
			objectString = objectString + stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
		}
		return ('{' + objectString + '}');
	}
};
