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