// function Main(m,n){
//     // for(i=m;i<n;i++){
//     //     console.log(i);  
//     // }
//     setTimeout(()=>{
//         for(i=m;i<n;i++){
//             console.log(i);  
//         }
//     },3000);
// }
// //Main(1,10);
// Main(1,"10a");
// function demo(){
//     console.log("hello");
    
// }
// demo();
// //above is synchronous to convert these into asynchronous use methods for above func


// //SETTIMEOUT ASYNCHRONOUS METHOD
// window.setTimeout(()=>{
//     console.log("I am setTimeout");
    
// },3000);

// //SETINTERVAL ASYNCHRONOUS METHOD
// // window.setInterval(()=>{
// //     console.log("I am setInterval");
    
// // },3000);



// //PROMISES
// let online=window.navigator.onLine
// //online will check whether the device is connected to internet or not.
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(online==true){
//             return resolve();
//         }
//         else{
//             return reject();
//         }
//     },5000);
// }).then(()=>{
//     console.log("online..");
    
// }).catch(()=>{
//     console.log("offline..");
    
// })



//PROMISE FOR MAIN FUNCTION 
function Main(m,n){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isNaN(m)||isNaN(n)){
                return reject()
            }
            for(let i=m;i<n;i++){
                console.log(i);
                
            }
            return resolve()
        },5000);
    }).then(()=>{
        console.log("promise executed");
    }).catch(()=>{
        console.log("promise not executed");
        
    })
}Main(1,10);