"use strict";
console.log("Kalkulator");

let del = document.querySelector('.del');
let zero = document.querySelector('.zero');
let equals = document.querySelector('.equals');
let screen = document.querySelector('.screen');
let allButtons = document.querySelectorAll('.button')
let wynik = ''
let znak = ''

let num1 = {
    value: '',
    flag: true,
}

let num2 = {
    value: '',
    flag: false
}


allButtons.forEach(el => {
    el.addEventListener('click', () => {
        if (num1.value.length == 0 && el.innerText == '-') {
            num1.value += el.innerText;
            screen.innerText += el.innerText;
            console.log("Num1:  " + num1.value)
        }
        else if ((num1.flag == true && Number(el.innerText)) ||
            (num1.flag == true && el.innerText == '.' && !num1.value.includes('.') && !num1.value == '')) {


            num1.value += el.innerText;
            screen.innerText += el.innerText;
            console.log("Num1:  " + num1.value)
        }

        else if (!Number(el.innerText) && el.innerText != '.' && znak.length < 1) {
            screen.innerText += el.innerText;

            num1.flag = false;
            num2.flag = true;
            znak += el.innerText;
            console.log(znak.length)
        }

        else if ((num2.flag == true && Number(el.innerText)) ||
            (num2.flag == true && el.innerText == '.' && !num2.value.includes('.'))) {
            screen.innerText += el.innerText;

            num2.value += el.innerText;
            console.log("Num2:  " + num2.value)
        }
    })
})

equals.addEventListener('click', () => {
    switch (znak) {
        case '+':
            console.log(eval(`${num1.value} + ${num2.value}`))
            screen.innerText = eval(`${num1.value} + ${num2.value}`);
            break;
        case '-':
            console.log(eval(`${num1.value} - ${num2.value}`))
            screen.innerText = eval(`${num1.value} - ${num2.value}`);
            break;
        case 'x':
            console.log(eval(`${num1.value} * ${num2.value}`));
            screen.innerText = eval(`${num1.value} * ${num2.value}`);
            break;
        case '/':
            console.log(eval(`${num1.value} / ${num2.value}`));
            screen.innerText = eval(`${num1.value} / ${num2.value}`);
            break;
    }
})


del.addEventListener('click', () => {
    screen.innerText = '';
    num1.value = ''
    num1.flag = true
    num2.value = ''
    num2.flag = false
    wynik = '';
    znak = '';
})