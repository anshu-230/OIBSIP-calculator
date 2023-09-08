let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquareRoot() {
    const input = parseFloat(currentInput);
    if (!isNaN(input) && input >= 0) {
        const result = Math.sqrt(input);
        currentInput = result.toString();
        document.getElementById('display').value = result;
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSin() {
    const input = parseFloat(currentInput);
    if (!isNaN(input)) {
        const result = Math.sin(input * (Math.PI / 180));
        currentInput = result.toString();
        document.getElementById('display').value = result;
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function calculateCos() {
    const input = parseFloat(currentInput);
    if (!isNaN(input)) {
        const result = Math.cos(input * (Math.PI / 180));
        currentInput = result.toString();
        document.getElementById('display').value = result;
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function calculateTan() {
    const input = parseFloat(currentInput);
    if (!isNaN(input)) {
        const result = Math.tan(input * (Math.PI / 180));
        currentInput = result.toString();
        document.getElementById('display').value = result;
    } else {
        document.getElementById('display').value = 'Error';
    }
}

