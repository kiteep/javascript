var memberArray = ["egoing", "graphittie", "leezhce"];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
  manager: "egoing",
  developer: "graphittie",
  designer: "leezhce",
};

console.log("memberObject.designer", memberObject.designer);

console.log("before delete");
for (i in memberObject) {
  console.log(i, memberObject[i]);
}
delete memberObject.manager;
console.log("after delete");
for (i in memberObject) {
  console.log(i, memberObject[i]);
}
