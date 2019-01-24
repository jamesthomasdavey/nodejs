const path = require('path');
//                    gets the directory path of app.js?
module.exports = path.dirname(process.mainModule.filename);
