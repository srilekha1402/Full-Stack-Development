(function(){
    console.log("hello");
    
})();//if more than 1 iife is used we should terminate it my semicolon otherwise an uncaught error occurs

//converting arrow to iife
((a,b)=>{
    console.log(a+b);
    
})(10,20);

(function demo(){
    console.log("hii");
    
})();


/////////////////////////// 
//ARRAYS IN JS
//using declaration
let arr = [10,"hello",1n,true,undefined];
console.log(arr);

// using new keyword
let arr1 = new Array(10,20,30);
console.log(arr1);

///////////////////////////////
//OBJECT IN JS
//DECLARATION (2 WAYS TO CREATE)
let obj={
    name: "abc",
    id:1,
    boole : true,
    arr :[10,20,30],
    null :null,
    undefined:undefined,
    demo : function(){
        console.log("hello world");
        
    }
}
console.log(obj);
console.log(obj.name);
console.log(obj.id);
obj.demo();



//USING CONSTRUCTOR FUNCTION
function obj1(name,id){
    this.name = name;
    this.id=id;
}
let p1 = new obj1("abc",1);
console.log(p1);
console.log(p1.name);
console.log(p1.id);

