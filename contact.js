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