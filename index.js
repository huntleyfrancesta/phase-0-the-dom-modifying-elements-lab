// Write your code here!
var el = document.getElementById('main');
el.remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory'
newHeader.innerHTML = "francesta is the champion"