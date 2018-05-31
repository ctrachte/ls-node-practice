 const fs = require('fs');
 
 module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
      const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');
 
    console.log(filesToString);
 	});
 };


module.exports.mkdir = (name) => {
	var dir = `./${name}`;

	if (!fs.existsSync(dir)){
	    fs.mkdirSync(dir);
	}
};

module.exports.touch = (name) => {
	fs.appendFile(name, function (err) {
	  if (err) throw err;
	  console.log('new file created! ' + name);
	});
};