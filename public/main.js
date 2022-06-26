// Get the text from the input area
let inputText = document.querySelector('.inputToDo')
let addButton = document.querySelector('.addToDo')

// Get the delete button from the list item
let deleteBtn = document.querySelector('.deleteListItem')

// when user clicks on the add button, the text from the input
// appears in the list below the input area
addButton.addEventListener('click', addListItem)
// deleteBtn.addEventListener('click', deleteListItem)
    // the input item in the list will have a button to remove text
    // and a button to edit the text


    // when click on the add button, run a function that
    // takes the text content from the input and
    // adds as an li html element in toDoList
      function addListItem () {
        console.log('click add button')

        let li = document.createElement('li')
        let inputTextValue = inputText.value
        console.log(inputTextValue)
        li.innerHTML = `${inputTextValue}`
        let toDoList = document.querySelector('.toDoList')

        toDoList.appendChild(li)

        inputTextValue = ''
      }


    // Function that removes todo list item
      function deleteListItem() {
        console.log('delete btn clicked')
      }
