var i = 0;
var speed = 25;
var text = 'Welcome to me, I\'m Samuel Granvik, a student of BE in information technology at Arcada University of Applied Sciences';

window.onload = function autoType() {

    if (i < text.length) {
        document.getElementById('terminal').innerHTML += text.charAt(i);
        i++;
        setTimeout(autoType, speed);
    }
    
}

