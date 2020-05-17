var anima,food;

function principal(){
var canvas = document.getElementById("cnv")
var ctx= canvas.getContext("2d")
anima = setInterval(startGame,100) 
document.addEventListener("keydown",moveDown)



var box =32; 
var snake= [];
snake[0]= {
    x:8 * box,
    y:8 *box
    
    }
    var food ={
     x:Math.floor(Math.random()*15 +1 )* box,
     y:Math.floor(Math.random()*15 +1 )* box

    }

var direction = "right"


function fundoGame(){
    ctx.fillStyle="lightgreen";
    ctx.fillRect(0,0,16*box,16*box);
}
function createSnake(){


    for (i=0;i< snake.length; i++){
      ctx.fillStyle ="green";
      ctx.fillRect(snake[i].x,snake[i].y,box,box)

    }
 
}
function fruit (){
    ctx.fillStyle="red"
    ctx.fillRect(food.x,food.y,box,box)


}
function moveDown(e){
    e=event.keyCode
    if(e == 37 && direction !="right"){
        direction= "left"
    }
    else if(e == 38 && direction != "down"){
        direction="up"

    }
    else if(e == 39 && direction != "left"){
        direction="right"

    }
    else if(e == 40 && direction != "up"){
        direction="down"

    }
}

function startGame(){
   
   
   
   
    if(snake[0].x > 15 * box && direction == "right"){
       snake[0].x = 0
   }
   else if(snake[0].x < 0 && direction == "left"){
       snake[0].x = 16 * box;
   }
   else if(snake[0].y > 15* box  && direction == "down"){
    snake[0].y = 0;
}
else if(snake[0].y < 0   && direction == "up"){
    snake[0].y = 16 * box;
}
    for(var i = 1; i < snake.length;i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(startGame);
            alert("Game Over")
        }
    }
    fundoGame()
    createSnake()
    fruit()
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
  if(direction == "right") snakeX += box;
  if(direction == "left") snakeX -= box;
  if(direction == "up") snakeY -= box;
  if(direction == "down") snakeY += box;
  
  if (snakeX != food.x || snakeY != food.y){
      snake.pop();
  }
  else{
   food.x=Math.floor(Math.random()*15 +1 )* box;
    food.y=Math.floor(Math.random()*15 +1 )* box;

  }
  

  

  let newHead = {
      x: snakeX,
      y: snakeY
  }
  snake.unshift(newHead)

 

    
}




}

window.addEventListener("load",principal)