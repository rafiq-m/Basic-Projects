list = document.getElementById("list")



firebase.database().ref('todos').on('child_added',function(data){
    var li = document.createElement('li')
    var textNode = document.createTextNode(data.val().value)
    li.appendChild(textNode)


    var deleteBtn = document.createElement('button')
    var deleteText = document.createTextNode("Delete")
    deleteBtn.setAttribute('class', 'delete-button')
    deleteBtn.setAttribute('onclick', "deleteItem(this)")
    deleteBtn.setAttribute('id',data.val().key)
    deleteBtn.appendChild(deleteText)

    var editBtn = document.createElement('button')
    var editText = document.createTextNode('Edit')
    editBtn.setAttribute('class', 'edit-button')
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.setAttribute('id',data.val().key)
    editBtn.append(editText)

    li.appendChild(deleteBtn)
    li.appendChild(editBtn)


    list.appendChild(li)
})
function addMessage(){
    var item = document.getElementById("name")
    var database = firebase.database().ref('todos')
    var key = database.push().key;
    console.log(key)

    var todo = {
        value: item.value,
        key: key
    }

    database.child(key).set(todo)
    item.value = ""
}


function deleteItem(e){
    firebase.database().ref('todos').child(e.id).remove();
    e.parentNode.remove()
}


function editItem(e){  
    var input = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    var edittodo = {
        key: e.id,
        value: input
    }
    firebase.database().ref('todos').child(e.id).set(edittodo)
    e.parentNode.firstChild.nodeValue = input
}




