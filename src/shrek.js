class Swamp {

	// A "Swamp" will basically just be a three.js world, or something
	// Will take in the DOM element, have a camera, etc.

	constructor(props) {
		super(props);
	}

	// Initializing the swamp sets up the world, camera, etc.
	init() {
		
	}

}

class Onion {
	constructor(props) {
		super(props);
		this.layers = props.layers;
	}
	addLayer(layer) {
		this.layers.push(layer);
	}
}

class Ogre extends Onion{
	constructor(props) {
		super(props);
	}
	colour(){
		// Return green
		return '#41ef49';
	}
}

class Donkey {
	constructor(props) {
		super(props);
	}
	makeWaffles() {
		// TODO: Return waffles
	}
}