class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    setName(name){
        this.name = name;
    }
    setFirst(first){
        this.name = name;
    }
    setSecond(second){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    getFirst(){
        return this.first;
    }
    getSecond(){
        return this.second;
    }

    sum(){
        return 'prototpe : '+(this.first+this.second);
    }
}
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    avg(){
        return super.sum()+this.third)/3;
    }
}

var kim = new Person('kim', 10, 20);
var lee = new Person('lee', 10, 10);
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());
