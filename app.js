function getPin() {

    const randomNumber = Math.random() * 10000;
    const pin = (randomNumber + '').split('.')[0];

    if (pin.length === 4) {
        return pin;

    } else {
        console.log("short-pin", pin)
        return getPin();
    }

}

// display pin generate
function generatePin() {
    const inputPin = document.getElementById('pin')
    inputPin.value = getPin();

}

// Matching Pin

const pinMatcher = document.getElementById('digits').addEventListener('click', function(event) {

    const digit = event.target.innerText

    if (isNaN(digit)) {

        // handle backspace
        // handle clear
        if (digit === 'C') {

            const typedInput = document.getElementById('typedPin');
            typedInput.value = '';
        }

    } else {
        console.log(digit)
        const typedInput = document.getElementById('typedPin');
        typedInput.value = typedInput.value + digit;
    }



})

function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typedPin').value;

    if (pin === typedPin) {
        const correct = document.getElementById('correct')
        correct.style.display = 'block';
        const incorrectPin = document.getElementById('incorrect');
        incorrectPin.style.display = 'none';

    } else {
        const incorrectPin = document.getElementById('incorrect');
        incorrectPin.style.display = 'block';
        const correct = document.getElementById('correct')
        correct.style.display = 'none';
    }

}