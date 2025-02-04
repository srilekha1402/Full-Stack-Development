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
    window.open("https://support.spotify.com/in-en/")

})