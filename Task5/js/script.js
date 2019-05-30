let li = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    title = document.getElementById('title'),
    reklama = document.querySelector('.adv'),
    inPrompt = document.getElementById('prompt');

menu.insertBefore(li[2],li[1]);
let liFive = document.createElement('li');
liFive.classList.add('menu-item');
menu.appendChild(liFive);
liFive.textContent = "Пятый пункт";

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

reklama.remove();

let answer = prompt("Какое у Вас отношение к технике apple?");
inPrompt.textContent = answer;