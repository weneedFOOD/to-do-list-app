function newItem () {
    // 1. Adding a new To Do List item (li)
    let list = $('#list');
    let li = $('<li></li>');
    let userInput = $('#input');
    let inputValue = userInput.val();
    li.append(inputValue);

    if (!inputValue) {
        alert('You must write something!');
    } else {
        list.append(li);
        // Clears the inbox field when appending new list item
        userInput.val('');
    }

    // 2. Crossing out items upon double-click (has to be placed inside newItem() function because li-lement is only created within that function
    function crossOut() {
        li.addClass('strike');
    }
    li.on('dblclick', crossOut);

    // 3(i). Adding the delete button "X"
    let crossOutButton = $('<crossOutButton>X</crossOutButton>');
    li.append(crossOutButton);
    
    // 3(ii). Adding class="delete" upon click on delete button
    function deleteListItem () {
        li.addClass('delete');
    }
    crossOutButton.on('click', deleteListItem);

    // 4. Reordering the items
    list.sortable();
}

