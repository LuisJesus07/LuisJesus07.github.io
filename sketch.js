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
	}

}



function mousePressed(){
	//crear una nueva ball y añadirlo al array(envia array con todas las balls)
	ball = new Ball(mouseX, mouseY, 40, this.balls)
	balls.push(ball)
}