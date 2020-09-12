var myHeading = document.querySelector('h1');
myHeading.textContent = '5 главных аксессуаров этой осени';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/one-icon.jpg') {
      myImage.setAttribute ('src','images/two-icon.jpg');
    } else {
      myImage.setAttribute ('src','images/one-icon.jpg.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = `Все образы созданы здесь для тебя, ${myName}`;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Все образы созданы здесь для тебя, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}