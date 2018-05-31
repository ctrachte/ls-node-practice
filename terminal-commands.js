 const fs = require('fs');
 
 module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
      const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');
 
    console.log(filesToString);
 	});
 };


module.exports.touch = (name) => {
	var dir = './name';

	if (!fs.existsSync(dir)){
	    fs.mkdirSync(dir);
	}
};

module.exports.mkdir = (name) => {
    fs.open('name');
    console.log(`opened ${name}`);
};