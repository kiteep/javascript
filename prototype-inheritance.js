var superObj = {superVal:'super'}
//var superObj = {superVal:'super'}
//subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.subVal =>', subObj.superVal);
subObj.superVal = 'sub';
debugger;
console.log('superObj.superVal =>', superObj.superVal);
