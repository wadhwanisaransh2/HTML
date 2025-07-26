let btn = document.querySelector("button");
 let h2 = document.querySelector("h2");
 let h3 = document.querySelector("h3");
 let h4 = document.querySelector("h4");
 let div= document.querySelector("div")
btn.addEventListener("click",function() {
    console.log("generating color ")
    h2.innerText =  `Generated color ${generateColor()}`
    div.style.backgroundColor = generateColor()
});
h3.addEventListener("click",function () {
      let red =Math.floor(Math.random()*255) 
    let green = Math.floor(Math.random()*255) 
    let blue = Math.floor(Math.random()*255) 
    let randomColor = `rgb(${red}, ${green}, ${blue})`
    h2.style.background = (randomColor)
})
function generateColor() {
    let red =Math.floor(Math.random()*255) 
    let green = Math.floor(Math.random()*255) 
    let blue = Math.floor(Math.random()*255) 
    let randomColor = `rgb(${red}, ${green}, ${blue})`
    return (randomColor)
}
h4.addEventListener("mouseleave",function() {
    h4.innerText = "Hi Vaibhav Bro";
})