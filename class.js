class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype : '+(this.first+this.second);
    }
}

class PersonPlus extends Person{
    //constructor와 sum 메소드가 상속됨.
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (super.sum()+this.third)/3;
    }
}

var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : '+(this.first+this.second);
}
var lee = new Person('lee', 10, 10);
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());
