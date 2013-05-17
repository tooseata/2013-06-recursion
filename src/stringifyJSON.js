// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {

	switch (typeof obj) {
		case 'undefined':
			return undefined;
		case 'function':
			return undefined;
		case 'xml':
			return undefined;
		case 'number':
			return (obj.toString());
		case 'boolean':
			return (obj.toString());
		case 'string':
			return ('"' + obj + '"');
	}
	
	if (obj === null) {
		return ('' + obj);
	} else if (Array.isArray(obj)) {
		var newArray = [];
		
		for (var i = 0; i < obj.length; i++) {
			if (stringifyJSON(obj[i]) === undefined) {
				newArray.push('null');
			} else {
				newArray.push(stringifyJSON(obj[i]));
			}
		}
		return ('[' + newArray + ']');
	} else {
		var objectString = '';

		for (var key in obj) {
			if (objectString !== '') {
				objectString = objectString + ',';
			}
			if (stringifyJSON(obj[key]) !== undefined) {
				objectString = objectString + stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
			}
		}
		return ('{' + objectString + '}');
	}
};
