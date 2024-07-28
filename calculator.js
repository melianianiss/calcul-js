function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    if (display.value && !isNaN(display.value.slice(-1))) {
        display.value += operator;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
