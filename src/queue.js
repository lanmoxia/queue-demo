

const btnCreateNumber = document.querySelector("#createNumber");
const btnCallNumber = document.querySelector("#callNumber");
const spanNewNumber = document.querySelector("#newNumber");
const spanQueue = document.querySelector("#queue");
const divScreen = document.querySelector("#screen");

const queue = [];
let number = 0;

btnCreateNumber.onclick = () => {
    number += 1;
    queue.push.call(queue, number); // 等价于 queue.push(number)
    spanNewNumber.innerText = number;
    spanQueue.innerText = JSON.stringify(queue);
};

btnCallNumber.onclick = () => {
    const n = queue.shift.call(queue); // 等价于 queue.shift()
    // if n === undefined 没处理
    divScreen.innerText = `请 ${n} 号就餐`;
    spanQueue.innerText = JSON.stringify(queue);
};
