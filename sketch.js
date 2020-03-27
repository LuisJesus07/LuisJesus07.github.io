let x = 0
let y = 40
let w = 50
let h = 30
let stepX = 50
let stepY = 50

let tablero 
let p1
let p2
let ball

//array de balls
var balls = []

//colision entre bolas
var dx = 0
var dy = 0
var distance = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	tablero = new Tablero(windowWidth,windowHeight,'white')
}

function draw() {

	tablero.draw()

	//recorrer el array de balls
	for(let i=0 ; i < balls.length; i++){
		balls[i].draw()
		balls[i].move()

		if(i != 0){
			//console.log(balls[i-1].x)
			dx = balls[i].x - balls[i-1].x
			dy = balls[i].y - balls[i-1].y
			distance = Math.sqrt(dx * dx + dy * dy)

			if (distance < balls[i].d + balls[i-1].d) {
			    console.log("colision")
			}
			
		}


	}

}

function keyPressed(){

	//movimiento 
	switch(keyCode){

		case UP_ARROW:
				p2.moveUp() 
			break;

		case DOWN_ARROW:
				p2.moveDown() 
			break;
		case 87:
				p1.moveUp() 
			break;
		case 83:
				p1.moveDown() 
			break;

	}
}

function mousePressed(){
	//crear una nueva ball y añadirlo al array
	ball = new Ball(mouseX, mouseY, 35)
	balls.push(ball)

}