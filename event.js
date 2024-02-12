const bgGreen=document.getElementById('green');
bgGreen.onclick=greenBg;

function greenBg() {
    document.body.style.backgroundColor='green';
}

document.getElementById('yellow').onclick=bgYellow;
function bgYellow() {
    document.body.style.backgroundColor='yellow';
}

document.getElementById('pink').addEventListener('click',bgPink);
function bgPink() {
    document.body.style.backgroundColor='pink';

}