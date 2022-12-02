let spriteData;
let spriteSheet;
let idnStory = 0;
let i_frame = 1;
let moovable = true;
let backgroundS2;
let indiceTexte = 0;
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


let tab = ["Oh non ! Un Herpes sauvage apparaît !","Je suis Herpes, un virus répandu que vous risquez de connaître !",
"Effectivement nous te connaissons ! Tu n'es pas très grave, un antiviral suffira à te faire partir! ","Oh non, mon point faible! Je reviendrai..."];
let tab2 = [" Qui es-tu, louche individu ? ","Je suis un papillomavirus, je peux être responsable de verrues, mais aussi mener au cancer, saurez-vous me battre ? ",
	"Ne t'inquiètes pas Touffi, une vaccination efficace existe, faisons-la en prévision!"]
let tab3 = ["Voici la plus grosse et la plus connue des MST!" ,"En effet, je suis un simple virus responsable de bien des complications",
"Tu t'attaques aux défenses immunitaires et provoque le Syndrome d'ImmunoDéficience Acquise, notre corps est moins protégé et tombe donc malade.","Effectivement, ces maladies" +
	" opportunistes m'aident beaucoup!" ,"Il existe une trithérapie efficace pour te vaincre, elle allonge l'espérance de vie et baisse ta transmissibilité."
	];
let history = [tab,tab2,tab3]
let valuex = 0;
let valuey = 0;
let background1;
let background2;
let perso_sprite = [];
let perso_sprite2 = [];
let virus1;
let virus2;
let virus = [];

let rover;
let bulle2;
let backgroundS
let bulle1;
function preload() {
	virus1  = loadImage("src/sprite/virus/herpès.png");
	virus2  = loadImage("src/sprite/virus/papilloma.png");
	virus3  = loadImage("src/sprite/virus/sida.png");
	
	virus = [virus1,virus2,virus3];
	//load a spirte sheet
	console.log(spriteSheet)
	backgroundS1 = loadImage("src/sprite/background.png");
	backgroundS2 = loadImage("src/sprite/background2.png");
	backgroundS3 = loadImage("src/sprite/background3.png");
	
	backgroundS= [backgroundS1,backgroundS2,backgroundS3];
	
	//load a json file
	//Path: sprite.json
	bulle1 = loadImage("src/sprite/bulle/bulle-8.png");
	bulle2 = loadImage("src/sprite/bulle/bulle-9.png");
	
	
}
function keyPressed() {
	if (keyCode === keyCodes.SPACE) {
		valuey -= 100;
		setTimeout(() => {
			valuey += 100;
		}, 300);
	}
	if (keyCode === keyCodes.ENTER) {
		indiceTexte++;
	}
}
function setup() {
	frameRate(30);
	
	for (let i = 1; i <=8 ; i++) {
		perso_sprite.push(loadImage(`src/sprite/personnage/perso-${i}.png`));
		perso_sprite2.push(loadImage(`src/sprite/personnage/persof-${i}.png`));
		
	}
	
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
	
		let tabs = history[idnStory];
		let tabBackground = backgroundS[idnStory];
		let tabVirus = virus[idnStory];
		//update the image at each stroke
		//draw the image move x and y with frame
		if (keyIsPressed && moovable) {
			if (keyCode === keyCodes.LEFT_ARROW) {
				if (valuex > 0) {
					valuex -= 0;
					i_frame++;
					
				}
				
			}
			if (keyCode === keyCodes.RIGHT_ARROW) {
				if (valuex < 800) {
					valuex += 10;
					i_frame++;
				}
			}
			
		}
		//reverse my sprite
		
		background(tabBackground);
		if (keyCode === keyCodes.RIGHT_ARROW) {
			
			// If the mouse is not pressed, draw the image as normal
			image(perso_sprite[frameCount % 8], valuex, 560 + valuey, 200, 200)
			image(perso_sprite2[frameCount % 8], valuex + 180, 510 + valuey, 180, 180)
			
			
		}
		if (keyCode === keyCodes.LEFT_ARROW) {
			
			
			// Otherwise, the mouse is pressed. Flip the image.
			// We will use the scale() transformation to reverse the x-axis.
			// The push and pop functions save and reset the previous transformation.
			push();
			
			// Scale -1, 1 means reverse the x axis, keep y the same.
			scale(-1, 1);
			
			// Because the x-axis is reversed, we need to draw at different x position.
			image(perso_sprite[frameCount % 8], -valuex - 100, 560 + valuey, 200, 200)
			image(perso_sprite2[frameCount % 8], -valuex + 10, 510 + valuey, 180, 180)
			
			pop();
		} else {
			image(perso_sprite[frameCount % 8], valuex, 560 + valuey, 200, 200)
			image(perso_sprite2[frameCount % 8], valuex + 180, 510 + valuey, 180, 180)
		}
		
		image(tabVirus, 1000, 500, 250, 250);
		if (valuex > 200 && indiceTexte < tab.length) {
			moovable = false;
			if (indiceTexte % 2 === 0 && indiceTexte < tab.length) {
				image(bulle1, 500, 0, 600, 600);
				text(tabs[indiceTexte], 640, 300, 300, 300); // Text wraps within text box
				
			} else {
				image(bulle2, 500, 0, 600, 600);
				text(tabs[indiceTexte], 640, 300, 300, 300); // Text wraps within text box
				
				
			}
			
			
		}
		if (indiceTexte === tab.length) {
			moovable = true;
			indiceTexte = 0;
			idnStory++;
		}
		
		textSize(24);
		
		fill(1);
	

}