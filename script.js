let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/2;
let birdImage;

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height: birdHeight
}




window.onload = function(){
    
    board = document.getElementById("board");
    board.height = boardHeight;
    board.widht = boardWidth;
    context = board.getContext("2d");

    birdImage = new Image();
    birdImage.src = "./bird.png"
    birdImage.onload = function() {
        context.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);

    }   

    requestAnimationFrame(udpate);

    function udpate(){

        context.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);


    }
}