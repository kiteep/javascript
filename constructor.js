function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third= third;
    this.sum = function(){
        return this.frist+this.second+this.third;
    }
    this.getName = function(val){
      this.name = val
    }
    rhis.setName = function(){
      return this.name;
    }
}
var kim = new Person();
var lee = new Person();
console.log('Person()', Person());
console.log('Person()', new Person());
