const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const red = document.createElement("p")
red.style.color = "red";
red.textContent = 'Hey I’m red!';

const blue = document.createElement("h3")
blue.style.color = "blue";
blue.textContent = 'I’m a blue h3!';

container.appendChild(content);
container.appendChild(red);
container.appendChild(blue);

const myDiv = document.createElement("div"); 
myDiv.setAttribute('style', 'border: black solid; background-color: pink;'); 

    const anotherH = document.createElement("h1"); 
    anotherH.textContent = "I'm in a div"; 
    const anotherP = document.createElement("p"); 
    anotherP.textContent = "ME TOO!"; 

    myDiv.appendChild(anotherH);
    myDiv.appendChild(anotherP);
    container.appendChild(myDiv);