// Get the text from the input area
let inputText = document.querySelector('.inputToDo')
let addButton = document.querySelector('.addToDo')

// Get the delete button from the list item
// let deleteBtn = document.querySelector('.deleteListItem')
let individualItem = document.querySelector('indivListItem')


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
    console.log(individualItem)

    let list = document.createElement('li')
    list.classList.add('indivListItem')

    let listItemText = document.createElement('span')
    let deleteBtn = document.createElement('button')

    let inputTextValue = inputText.value
    // console.log(inputTextValue)
    listItemText.innerHTML = inputTextValue
    deleteBtn.innerHTML = 'X'

    deleteBtn.addEventListener('click', () => {console.log('clicked')})


    list.appendChild(listItemText)
    list.appendChild(deleteBtn)

    let toDoList = document.querySelector('.toDoList')

    toDoList.appendChild(list)
  }


// Function that removes todo list item. When user clicks on list item,
// the text is striked out
  function deleteListItem() {
    console.log('delete btn clicked')
  }
