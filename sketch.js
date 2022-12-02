let spriteData;
let spriteSheet;
let i_frame = 1;
let keyCodes = {
	"LEFT_ARROW": 37,
	"RIGHT_ARROW": 39,
	"UP_ARROW": 38,
	"DOWN_ARROW": 40,
	"SPACE": 32,
	"ENTER": 13,
	"RETURN": 13,
	"BACKSPACE": 8,
	"DELETE": 46,
	"SHIFT": 16,
	
}
let valuex = 0;
let valuey = 0;
let backgroundS;
let perso_sprite = [];
let rover;
function preload() {
	//load a spirte sheet
	 spriteData = loadJSON('src/sprite/sprite.json');
	spriteSheet = loadImage(`src/sprite/personnage/perso-${i_frame}.png`);
	console.log(spriteSheet)
	 backgroundS = loadImage("src/sprite/background.png");
	//load a json file
	//Path: sprite.json
	
	
	
}
function keyPressed() {
	//make a jump in axe y and go down
	if (keyCode === keyCodes.SPACE) {
		valuey -= 100;
		setTimeout(() => {
			valuey += 100;
		}, 300);
	}
}
function setup() {
	frameRate(20);
	
	for (let i = 1; i <=8 ; i++) {
		perso_sprite.push(loadImage(`src/sprite/personnage/perso-${i}.png`));
	}
	spriteSheet = loadImage(`src/sprite/personnage/perso-${i_frame}.png`);
	
	createCanvas(windowWidth-100, windowHeight);
	image(perso_sprite[frameCount%8],valuex,500+valuey,200,200)
	
	console.log("lol"+spriteSheet.src);
}

function draw() {
	
	//update the image at each stroke
	//draw the image move x and y with frame
	if (keyIsPressed) {
		if (keyCode === keyCodes.LEFT_ARROW) {
			if (valuex > 0) {
				valuex -= 10;
				i_frame++;
				
			}
			
		}
		if (keyCode === keyCodes.RIGHT_ARROW) {
			if (valuex < windowWidth-200) {
				valuex += 10;
				i_frame++;
			}
		}
		
	}
	//reverse my sprite
	
	background(backgroundS);
	
	if (keyCode === keyCodes.RIGHT_ARROW) {
		
		// If the mouse is not pressed, draw the image as normal
		image(perso_sprite[frameCount%8],valuex,500+valuey,200,200)
	} if (keyCode === keyCodes.LEFT_ARROW) {
		
		// Otherwise, the mouse is pressed. Flip the image.
		// We will use the scale() transformation to reverse the x-axis.
		// The push and pop functions save and reset the previous transformation.
		push();
		
		// Scale -1, 1 means reverse the x axis, keep y the same.
		scale(-1, 1);
		
		// Because the x-axis is reversed, we need to draw at different x position.
		image(perso_sprite[frameCount%8],-valuex+10,500+valuey,200,200)
		
		pop();
	}
	else {
		image(perso_sprite[frameCount%8],valuex,500+valuey,200,200)
	}
	

}