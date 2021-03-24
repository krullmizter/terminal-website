let i = 0;
const speed = 25;
const text = ['Hello my name is Samuel Granvik', 'I\'m a student at Arcada University of Applied Sciences', 'test'];

window.onload = function autoType() {

    for (i; i < text.length; i++) {
        let paragraph = document.createElement('p');
        let sentence  = document.createTextNode(text[i]);
        paragraph.appendChild(sentence);

        document.getElementById('terminalOutput').appendChild(paragraph);

        setTimeout(autoType, speed);
    }  
}