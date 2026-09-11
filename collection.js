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


/* FOR SEARCH BOX */
var input = document.getElementById("input")
var itemsContainer = document.querySelector(".collection__items")
var h3list = itemsContainer.querySelectorAll("h3")

input.addEventListener("keyup", function(){
    var enteredValue = event.target.value.toLowerCase()
   
    for(i = 0; i < h3list.length; i++){
        if(h3list[i].textContent.toLowerCase().indexOf(enteredValue) < 0){
            h3list[i].parentElement.style.display = "none"
        }
        else{
            h3list[i].parentElement.style.display = "block"
        }
    }
})


/* FILTER SECTION */
var checkboxes = document.querySelectorAll("input[type=checkbox]")
var items = document.querySelectorAll(".item")

checkboxes.forEach(function(checkbox){
    checkbox.addEventListener("change", function(){
        items.forEach(function(item){
            if(checkbox.checked){
                if(item.classList.contains(checkbox.value)){
                    item.style.display = "block"
                }
                else{
                    item.style.display = "none"
                }
            }
            else{
                item.style.display = "block"
            }
        })
    })
})

