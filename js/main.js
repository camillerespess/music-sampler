let albumIcon = document.querySelectorAll('.album-icon');
let soundtrack = document.querySelectorAll('.soundtrack');

function hideAll() {
  soundtrack.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

albumIcon.forEach(function(el) {
  el.onclick = (e) => {
        hideAll();

switch (e.target.getAttribute('id')) {
    case 'fourEver':
    document.querySelector('#firstSong')
    .style.display = 'block';
    break;

    case 'flamingCheetos':
    document.querySelector('#secondSong')
    .style.display = 'block';
    break;

    case 'prettyGirl':
    document.querySelector('#thirdSong')
    .style.display = 'block';
    break;

    case 'songSoftly':
    document.querySelector('#fourthSong')
    .style.display = 'block';
    break;
}

let soundtrack = document.querySelectorAll('audio');
soundtrack.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
}
});
