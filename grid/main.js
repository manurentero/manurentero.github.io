const screen = document.getElementById('screen');
const b1 = document.getElementById("1");
const b2 = document.getElementById("2");
const b3 = document.getElementById("3");
const b4 = document.getElementById("4");
const b5 = document.getElementById("5");
const b6 = document.getElementById("6");
const b7 = document.getElementById("7");
const b8 = document.getElementById("8");
const b9 = document.getElementById("9");
const b0 = document.getElementById("0");
const reset = document.getElementById("reset");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const division = document.getElementById("division");
const equal = document.getElementById("equal");


let operation = '';

reset.onclick = function() {
    screen.textContent = '';
    operation = '';
}

b0.onclick = function() {
    screen.textContent += '0';
}
b1.onclick = function() {
    screen.textContent += '1';
}
b2.onclick = function() {
    screen.textContent += '2';
}
b3.onclick = function() {
    screen.textContent += '3';
}
b4.onclick = function() {
    screen.textContent += '4';
}
b5.onclick = function() {
    screen.textContent += '5';
}
b6.onclick = function() {
    screen.textContent += '6';
}
b7.onclick = function() {
    screen.textContent += '7';
}
b8.onclick = function() {
    screen.textContent += '8';
}
b9.onclick = function() {
    screen.textContent += '9';
}


plus.onclick = function() {
    operation = 'plus';
    screen.textContent += ' + ';
}
minus.onclick = function() {
    operation = 'minus';
    screen.textContent += ' - ';
}
division.onclick = function() {
    operation = 'division';
    screen.textContent += ' / ';
}
times.onclick = function() {
    operation = 'times';
    screen.textContent += ' * ';
}

equal.onclick = function() {
    let valores = screen.innerText.split(" ");
    switch(operation){
        case 'plus':
            screen.textContent = `${Number(valores[0]) + Number(valores[2])}`;
            break;
        case 'minus':
            screen.textContent = `${Number(valores[0]) - Number(valores[2])}`;
            break;
        case 'times':
            screen.textContent = `${Number(valores[0]) * Number(valores[2])}`;
            break;
        case 'division':
            screen.textContent = `${Number(valores[0]) / Number(valores[2])}`;
            break;    
    }
}
