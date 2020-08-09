
list = document.getElementById("list")

function addMessage(){
    var item = document.getElementById("name")

    var li = document.createElement('li')
    var textNode = document.createTextNode(item.value)
    li.appendChild(textNode)
    console.log(li)


    var deleteBtn = document.createElement('button')
    var deleteText = document.createTextNode("Delete")
    deleteBtn.setAttribute('class', 'delete-button')
    deleteBtn.setAttribute('onclick', "deleteItem(this)")
    deleteBtn.appendChild(deleteText)

    var editBtn = document.createElement('button')
    var editText = document.createTextNode('Edit')
    editBtn.setAttribute('class', 'edit-button')
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.append(editText)

    li.appendChild(deleteBtn)
    li.appendChild(editBtn)


    list.appendChild(li)
    item.value = ""
}


function deleteItem(e){
    e.parentNode.remove()
}


function editItem(e){
    console.log("hello")
    var input = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = input

}



