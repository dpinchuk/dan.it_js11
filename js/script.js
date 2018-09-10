/*
 Реализовать функцию, которая будет добавлять список, введенный пользователем, на страницу.

 Технические требования:
 - При запуске программы спросить у пользователя в модальном окне число пунктов, которые будут в списке.
 - После введения пользователем числа, вывести модальное окно еще нужное количество раз (такое количество раз, какое число ввел пользователь в первом модальном окне), спрашивая у пользователя содержимое пунктов списка (пользователь может ввести любой текст).
 - После ввода последнего значения, вывести на странице список, введенный пользователем с помощью модальных окон.
 - Через 10 секунд очистить страницу.
 - Необходимо использовать шаблонные строки и функцию map массива для формирования контента списка пеерд выведением его на страницу.
*/

let id = 'ulList';
let list = document.getElementById(id);
let arrList = [];
let count = prompt("Input count of list items: ");

let timer = () => {
    let elem = document.getElementById('timer');
    elem.innerHTML--;
    if (Number(elem.innerHTML) === 0) {
        document.body.innerHTML = "";
    } else {
        setTimeout(timer, 1000);
    }

};

let addLitst = (item) => {
    let listItem = document.createElement('li');
    listItem.innerHTML += `the current list item '${item}' is displayed on the page`;
    list.appendChild(listItem);
};

for (let i = 0; i < count; i++) {
    arrList[i] = prompt("Input data for [" + i + "] item of list: ")
}

arrList.map(addLitst);
timer();