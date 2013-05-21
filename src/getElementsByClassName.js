// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, node) {

	var results = [];

	if (!node) {
		node = document.body;
	}

	for (var i = 0; i < node.childNodes.length; i++) {
		var child = node.childNodes[i];
		if (child.classList && child.classList.contains(className)) {
			results.push(child);
		}
		var childResults = getElementsByClassName(className, child);
		for (var j = 0; j < childResults.length; j++) {
			results.push(childResults[j]);
		}
	}
	
	return results;
};
