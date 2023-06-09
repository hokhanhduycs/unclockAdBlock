const detect = document.querySelector("#detect");
const content = document.querySelector(".content");
const btn = document.querySelector(".content_btn");


// These are some possible classes that adblocker avoid to render
let adClasses = ["ad", "ads", "adsbox", "ad-placement", "doubleclick", "ad-placeholder", "ad-badge"];
for(let item of adClasses){
    detect.classList.add(item); 
}
// getting display property value of our detect element
let getProperty = window.getComputedStyle(detect).getPropertyValue("display");
console.log(getProperty);
// if display property value is none then show the popup else hide it
// getProperty == "none" ? content.classList.add("show") : content.classList.remove("show");

btn.addEventListener("click", ()=>{
    content.classList.remove("show");
})
if(!content.classList.contains("show")){
    getProperty =="none" ? content.classList.add("show") : content.classList.remove("show");
}