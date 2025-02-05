let demo = document.getElementById("demo")
console.log(demo);

demo.addEventListener("mouseover" , () => {
    // console.log("hello");

    let model = document.getElementById("model")
    console.log(model);
    model.style.display = "block"

})

demo.addEventListener("mouseleave" , () => {
    // console.log("hello");

    let model = document.getElementById("model")
    console.log(model);
    model.style.display = "none"
    // window.open("https://support.spotify.com/in-en/")

})

let svg = document.getElementById("Layer_1");
console.log(svg);

svg.addEventListener("click",()=>{
    window.open("https://open.spotify.com/", '_self')
})

let support = document.getElementById("support");
console.log(support);
support.addEventListener("click",()=>{
    window.open("https://support.spotify.com/in-en/","_self")
})

let download = document.getElementById("download");
console.log(download);
download.addEventListener("click",()=>{
    window.open("https://www.spotify.com/in-en/download/windows/","_self");
})

let signup = document.getElementById("signup");
console.log(signup);
signup.addEventListener("click",()=>{
    window.open("https://www.spotify.com/in-en/signup","_self");
})

let login = document.getElementById("login");
console.log(login);
login.addEventListener("click",()=>{
    window.open("https://accounts.spotify.com/en/login","_self");
})


