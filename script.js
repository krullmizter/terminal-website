var i = 0;
var speed = 25;
var text = 'Welcome to me, I\'m Samuel Granvik. I\'m a bachelor student of in information technology at Arcada University of Applied Sciences.';

window.onload = function autoType() {

    if (i < text.length) {
        document.getElementById('input').innerHTML += text.charAt(i);
        i++;
        setTimeout(autoType, speed);
    }
    
}

