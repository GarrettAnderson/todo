// Get the text from the input area
let inputText = document.querySelector('.inputToDo')
let addButton = document.querySelector('.addToDo')

// when user clicks on the add button, the text from the input
// appears in the list below the input area
addButton.addEventListener('click', addListItem)
    // the input item in the list will have a button to remove text
    // and a button to edit the text

function addListItem () {
  console.log('click add button')

  let li = document.createElement('li')

  console.log(inputText.value)
}
    // when click on the add button, run a function that
    // takes the text content from the input and
    // adds as an li html element in toDoList
