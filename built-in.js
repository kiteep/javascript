console.log("Math.PI", Math.PI);
console.log("Math.Random" Math.random);

var MyMath = {
    PI: Math.PI,
    random:function(){
      return Math.random();
    },
    floor:function(val){
      return Math.floor(val);
    }

}
console.log("Math.PI", MyMath.PI);
console.log("Math.random()", MyMath.random());
console.log("MyMath.floor(3,9)", MyMath.floor(3,9));
