//array de balls
var balls = []

function setup() {
	createCanvas(windowWidth, windowHeight)
	tablero = new Tablero(windowWidth,windowHeight,'white')
}

function draw() {

	tablero.draw()

	//recorrer el array de balls
	for(let i=0 ; i < balls.length; i++){
		balls[i].draw()
	}

}

function mousePressed(){
	//crear una nueva ball y añadirlo al array(envia array con todas las balls)
	ball = new Ball(mouseX, mouseY, 40, this.balls)
	balls.push(ball)
}