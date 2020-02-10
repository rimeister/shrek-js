class Ogre {
	constructor(props) {
		super(props);
	}
	colour(){
		// Return green
		return '#41ef49';
	}
}
class Onion extends Ogre {
	constructor(props) {
		super(props);
		this.layers = props.layers;
	}
	addLayer(layer) {
		this.layers.push(layer);
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