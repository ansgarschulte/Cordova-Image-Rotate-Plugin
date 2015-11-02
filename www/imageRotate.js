var exec = require('cordova/exec');

module.exports = {
    rotate: function(sourceFilePath, newFilePath, deg, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "ImageRotate", "rotate",
            [sourceFilePath, newFilePath, deg]);
    }
};

