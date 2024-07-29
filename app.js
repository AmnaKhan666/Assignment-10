// Qno:01
function clickeable()
{
    alert("Hello Dear")
}
// Qno:02
function showAlert(mobileName)
 {
    alert('You clicked on ' + mobileName);
}
// Qno:03
function deleteRow(button)
{
    button.closest('tr').remove();
}
// Qno:04
let count = 0;

function updateCounter() {
    console.log("Counter:", count);
}

function increase() {
    count++;
    updateCounter();
}

function decrease() {
    count--;
    updateCounter();
}

// Initial display
updateCounter();