// // Qno:01
// function clickeable()
// {
//     alert("Hello Dear")
// }
// // Qno:02
// function showAlert(mobileName)
//  {
//     alert('You clicked on ' + mobileName);
// }
// Qno:03
// function deleteRow(button)
// {
//     button.closest('tr').remove();
// }
// Qno:04
var counter = 0;

document.getElementById('increment').onclick = function() {
    counter += 1;
    document.getElementById('count').innerHTML = counter;
}

document.getElementById('decrement').onclick = function() {
    counter -= 1;
    document.getElementById('count').innerHTML = counter;
}

document.getElementById('restart').onclick = function() {
    counter = 0;
    document.getElementById('count').innerHTML = counter;
}