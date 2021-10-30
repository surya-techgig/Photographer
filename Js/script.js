// Preloader 
window.onload = () => {
    document.getElementById("onload").classList.add("mosaic-loader");
    setTimeout(() => {
        document.getElementById("onload").classList.remove("mosaic-loader");
        document.getElementById("preloader").classList.remove("onloader");
        document.getElementById("preload-title").style.display = "none";
    },5000)
} 

// Sticky Header Script 
var className = "sticky";
var scrollTrigger = 60;

window.onscroll = function() {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.querySelector(".navbar").classList.add(className);
    }else {
        document.querySelector(".navbar").classList.remove(className);
    }
}
