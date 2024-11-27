    document.querySelector('.quiz-container').style.display = 'none';

    document.querySelector('.back-button').addEventListener('click', function() {
    document.querySelector('.Game-menu').style.display = 'flex';
});

    document.querySelector('.equipment-menu').style.display = 'none';

    document.querySelector('.equipment-button').addEventListener('click', function() {
    document.querySelector('.equipment-menu').style.display = 'flex';
});

    document.querySelector('.equipmentBack').addEventListener('click', function() {
    document.querySelector('.equipment-menu').style.display = 'none';
});

    document.querySelector('.creditBox').style.display = 'none';
    document.querySelector('.aboutGame').style.display = 'none';
    document.querySelector('.feedBack').style.display = 'none';

    document.querySelector('.about-game').addEventListener('click', function() {
    document.querySelector('.aboutGame').style.display = 'block';
});

    document.querySelector('.credit').addEventListener('click', function() {
    document.querySelector('.creditBox').style.display = 'block';
});

    document.querySelector('.help').addEventListener('click', function() {
    document.querySelector('.feedBack').style.display = 'block';
});

    document.querySelector('.creditBox .closeButton').addEventListener('click', function() {
    document.querySelector('.creditBox').style.display = 'none';
});

    document.querySelector('.aboutGame .closeButton').addEventListener('click', function() {
    document.querySelector('.aboutGame').style.display = 'none';
});

    document.querySelector('.feedBack .closeButton').addEventListener('click', function() { 
    document.querySelector('.feedBack').style.display = 'none';
});