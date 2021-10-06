let cleanScreen = false;

document.getElementById('reset').onclick = () => {
    document.getElementById('screen').innerHTML = "";  
}
document.getElementById('eraseLast').onclick = () => {
    document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.slice(0, -1);
}
document.getElementById('divi').onclick = () => {
    if (document.getElementById('screen').innerHTML !== "") {
        enterString('/');
    }
}
document.getElementById('seven').onclick = () => {
    enterString('7');
}
document.getElementById('eight').onclick = () => {
    enterString('8');
}
document.getElementById('nine').onclick = () => {
    enterString('9');
}
document.getElementById('multi').onclick = () => {
    if (document.getElementById('screen').innerHTML !== "") {
        enterString('*');
    }
}
document.getElementById('four').onclick = () => {
    enterString('4');
}
document.getElementById('five').onclick = () => {
    enterString('5');
}
document.getElementById('six').onclick = () => {
    enterString('6');
}
document.getElementById('rest').onclick = () => {
    if (document.getElementById('screen').innerHTML !== "") {
        enterString('-');
    }
}
document.getElementById('one').onclick = () => {
    enterString('1');
}
document.getElementById('two').onclick = () => {
    enterString('2');
}
document.getElementById('three').onclick = () => {
    enterString('3');
}
document.getElementById('sum').onclick = () => {
    if (document.getElementById('screen').innerHTML !== "") {
        enterString('+');
    }
}
document.getElementById('zero').onclick = () => {
    enterString('0');
}
document.getElementById('colon').onclick = () => {
    enterString('.');
}
document.getElementById('equal').onclick = () => {
    cleanScreen = true;
    enterString(result(document.getElementById('screen').innerHTML));
}

function enterString(string) {
        if (cleanScreen === true) {
            document.getElementById('screen').innerHTML = "";
            document.getElementById('screen').innerHTML += string;
            cleanScreen = false;
        } else {
            document.getElementById('screen').innerHTML += string;
        }
}

function result(fn) {
    return new Function('return ' + fn)();
}

