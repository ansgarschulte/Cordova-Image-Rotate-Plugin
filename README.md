#Cordova Image Rotate Plugin
A plugin for rotate image on iOS device.

##Install

`cordova plugin add https://github.com/ansgarschulte/Cordova-Image-Rotate-Plugin.git`


##Platform

iOS only


##Usage
####rotate(sourceFilePath, targetFilePath, deg, succCallback, errCallback)
```js

onSuccess = function(inSampleSize){
  console.log('rotate success with inSampleSize ', inSampleSize);
}

onError = function(errMsg){
  console.log('rotate err with ', errMsg);
}

cordova.plugins.imageRotate.rotate(
  'file:///path/to/source/file.jpg',
  'file:///path/to/rotated/file.jpg',
  -90,
  onSuccess,
  onError
)
```
##License
Apache 2.0
