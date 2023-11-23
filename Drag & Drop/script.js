let lists = document.getElementsByClassName("list")
let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")

// Iterate through each element with the class "list"
for(list of lists){
// Add a "dragstart" event listener to each "list" element
    list.addEventListener("dragstart", function(e){
// When a drag starts, store the selected element in the variable "selected"
        let selected = e.target

// Add a "dragover" event listener to the "rightBox" element
        rightBox.addEventListener("dragover", function(e){
// Prevent the default behavior to allow a drop
            e.preventDefault()
        })
        rightBox.addEventListener("drop", function(e){
// Append the selected element to the "rightBox"
            rightBox.appendChild(selected)
// Set the "selected" variable to null to indicate that the operation is complete
            selected = null
        })
        leftBox.addEventListener("dragover", function(e){
            e.preventDefault()
        })
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected)
            selected = null
        })
    })
}