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

let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0; 

let topPipeImage;
let bottomPipeImage;

let velocityX = -2;




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

    topPipeImage =  new Image();
    topPipeImage.src = "./pipe-top.png";

    bottomPipeImage = new Image();
    bottomPipeImage.src = "./pipe-bottom.png";

    requestAnimationFrame(udpate);
    setInterval(placePipes, 1500);

    
}

function udpate(){
    requestAnimationFrame(udpate)
    context.clearRect(0, 0, board.width, board.height)

    context.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);

    for(let i = 0; i < pipeArray.length; i++){
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
    }
}

function placePipes(){

    let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
    let openingSpace = board.height/4;
   
    let topPipe = {
        img : topPipeImage,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }

    pipeArray.push(topPipe);

    let bottomPipe = {
        img : bottomPipeImage,
        x : pipeX,
        y : randomPipeY + pipeHeight + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }

    pipeArray.push(bottomPipe);
}