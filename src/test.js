var jsbuild =function () {  
	console.log('NodeJS Built using Bazel!');  
  
	var fs = require('fs');  
	   
	fs.readFile('resources/jsbuild.json', 'utf8', function(err, contents) {  
	    console.log(contents);  
	});  
}  
  
jsbuild();  
  
module.exports = {  
  jsbuild: jsbuild  
};  
