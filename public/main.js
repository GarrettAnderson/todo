// Get the text from the input area
let inputText = document.querySelector('.inputToDo')
let addButton = document.querySelector('.addToDo')

// Get the delete button from the list item
// let deleteBtn = document.querySelector('.deleteListItem')



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

    let list = document.createElement('li')
    list.classList.add('indivListItem')

    let listItemText = document.createElement('span')
    let deleteBtn = document.createElement('button')

    let inputTextValue = inputText.value
    // console.log(inputTextValue)
    listItemText.innerHTML = inputTextValue
    deleteBtn.innerHTML = 'X'

    deleteBtn.addEventListener('click', () => {
      deleteListItem(list)
    })
    listItemText.addEventListener('click', () => {
      list.classList.add('strikethrough')
    })

    list.appendChild(listItemText)
    list.appendChild(deleteBtn)

    let toDoList = document.querySelector('.toDoList')

    toDoList.appendChild(list)
  }


// Function that removes todo list item. When user clicks on list item,
// the text is striked out
  function deleteListItem(item) {
    console.log(item)
    // item.strike()
    item.remove()
    item.classList.add('strikethrough')
    // Get the individual todo list item
     let individualItem = document.querySelector('indivListItem')
    console.log(individualItem)

  }
