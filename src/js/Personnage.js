class Personnage {
	constructor(x,y,largeur,hauteur,src) {
		this._x = x;
		this._y = y;
		this._largeur = largeur;
		this._hauteur = hauteur;
		this._src = src;
	}
	
	
	get x() {
		return this._x;
	}
	
	set x(value) {
		this._x = value;
	}
	
	get y() {
		return this._y;
	}
	
	set y(value) {
		this._y = value;
	}
	
	get largeur() {
		return this._largeur;
	}
	
	set largeur(value) {
		this._largeur = value;
	}
	
	get hauteur() {
		return this._hauteur;
	}
	
	set hauteur(value) {
		this._hauteur = value;
	}
	
	get src() {
		return this._src;
	}
	
	set src(value) {
		this._src = value;
	}
}