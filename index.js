/* FOR CANCEL OFFER */
var closeIcon = document.getElementById("close")

closeIcon.addEventListener("click", function () {
    closeIcon.parentElement.style.display = "none"
})

/* FOR MENU ICON */
var menu = document.getElementById("menu")
var close = document.getElementById("close__icon")
var sidebar = document.getElementById("sidebar")

menu.addEventListener("click",function(){
    sidebar.style.left = "0"
})

close.addEventListener("click", function(){
    sidebar.style.left = "-50%"
}) 


/* FOR IMAGE SLIDER */
var imageDiv = document.querySelector(".image")
var next = document.getElementById("rightArrow")
var previous = document.getElementById("leftArrow")

var current = 0

next.addEventListener("click", function () {
    current++
    if (current > 2) {
        current = 0
    }
    imageDiv.style.transform = `translateX(-${current * 100}%)`
})

previous.addEventListener("click", function () {
    current--
    if (current < 0) {
        current = 2
    }
    imageDiv.style.transform = `translateX(-${current * 100}%)`
})

/* FOR LIKE */
var likedBtn = document.querySelectorAll(".like")
likedBtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        var icon = btn.querySelector("i")
        if(icon.style.color === "red"){
            icon.style.color = "white"
        }
        else{
            icon.style.color = "red"
        }
    })
})




