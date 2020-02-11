import * as THREE from 'nodule_modules/three.module.js';

class Swamp {

	// A "Swamp" will basically just be a three.js world, or something
	// Will take in the DOM element, have a camera, etc.

	constructor(props) {
		super(props);
	}

	// Initializing the swamp sets up the world, camera, etc.
	init() {

		// Might need to add 'this' etc. later, just pasted from three.js docs
	    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	    camera.position.z = 1;
	 
	    scene = new THREE.Scene();
	 
	    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	    material = new THREE.MeshNormalMaterial();
	 
	    mesh = new THREE.Mesh( geometry, material );
	    scene.add( mesh );
	 
	    renderer = new THREE.WebGLRenderer( { antialias: true } );
	    renderer.setSize( window.innerWidth, window.innerHeight );
	    document.body.appendChild( renderer.domElement );
		
	}

	start() {

	    requestAnimationFrame( animate );
	 
	    mesh.rotation.x += 0.01;
	    mesh.rotation.y += 0.02;
	 
	    renderer.render( scene, camera );

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