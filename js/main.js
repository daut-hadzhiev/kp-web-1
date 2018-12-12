(function () {

    var audioElement = document.getElementById("audio-element");
    var getVolume = document.getElementById("getVolume");
    var setVolume = document.getElementById("setVolume");
    var setFullVolume = document.getElementById("setFullVolume");
    
    audioElement.volume = 0.2;


    getVolume.addEventListener('click', function(el) {
        el.target.innerHTML = 'The volume is at ' + Math.round(audioElement.volume * 10) / 10;
        setTimeout(function() {
            el.target.innerHTML = 'What is the volume?';
        },1500);
    });
    

    setVolume.addEventListener('click', function() {

        audioElement.volume = 0.2;
    });
    
    setFullVolume.addEventListener('click', function() {
        audioElement.volume = 1;
    });
})();