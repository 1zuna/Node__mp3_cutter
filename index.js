const MP3Cutter = require('mp3-cutter');

MP3Cutter.cut({
    src: 'song.mp3',
    target: 'target.mp3',
    start: 280, 
});