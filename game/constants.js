var timer = null;
var aroundSq = {
    leftUpCorner: {x:-1,y:-1},
    up: {x:0,y:-1},
    rightUpCorner: {x:1,y:-1},
    left: {x:-1,y:0},
    right: {x:1,y:0},
    leftDownCorner: {x:-1,y:1},
    down: {x:0,y:1},
    rightDownCorner: {x:1,y:1}
};

var dies = [];
var borns = [];

var velocity = 100;

const container = document.getElementById('container');

var isPlaying = false;

var widthSquares = 19;
var heightSquares = 19;