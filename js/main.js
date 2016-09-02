/**
 * Created by YERLAN on 02.09.2016.
 */

// Prevent forms from submitting.
function preventFormSubmit() {
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function (event) {
            event.preventDefault();
        });
    }
}
window.addEventListener('load', preventFormSubmit);

function handleFormSubmit(formObject) {
    var minSalary = 22859;
    var gross = formObject.gross.value;

    // 1 - Ïåíñèîííûå 10%
    gross = gross - gross*0.1;

    // 2 - ÌÇÏ
    gross = gross - minSalary;

    // 3 - ÈÏÍ 10%
    gross = gross - gross*0.1;

    // 4 - Net
    var result = gross + minSalary;

    updateResult(result);
}

function updateResult(result) {
    var field = document.getElementById('net');
    field.value = result;
}