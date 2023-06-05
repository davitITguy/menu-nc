var triggerState = false;
const triggerInput = document.createElement('INPUT');
const triggerImg = document.createElement('img');
const triggerX = document.createElement('img');
triggerImg.src = 'assets/search.svg';
triggerImg.alt = 'there is a photo';
triggerImg.setAttribute('id', 'model');
triggerInput.setAttribute('id', 'triggerInput');
triggerX.src = 'assets/close.svg';
triggerX.alt = 'there is a photo';
triggerX.setAttribute('id', 'inputClose');
triggerX.addEventListener('click', garbageCol);
var stateImitation = () => {
    if (triggerState === false) {
        triggerState = true;
        document.getElementById('model')?.remove();
        document.getElementById('search').appendChild(triggerInput);
        document.getElementById('search').appendChild(triggerX);
    } else {
        document.getElementById('search').appendChild(triggerImg);
        triggerState = false;
    }
};

function garbageCol() {
    document.getElementById('search').appendChild(triggerImg);
    document.getElementById('triggerInput').remove();
    document.getElementById('inputClose').remove();
}
