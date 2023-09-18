const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';


const red = document.querySelector('#red');

document.getElementById("red").style.color = "red";
content.classList.add('content');
content.textContent = 'Hey I’m red!';

container.appendChild(content);
red.appendChild(content);