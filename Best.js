import * as th from "three";
import { OrbitControls } from "OrbitControls";
import { GUI } from "./dat.gui.module.js";
import {OBJLoader} from 'https://threejs.org/examples/jsm/loaders/OBJLoader.js';


function main() {

	// canvas render 
    {
	const canvas = document.querySelector('#c');
    const renderer = new th.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // camera setup
    {
	let fov = 75, aspect = 2, near = 0.1, far = 100;
	const camera = new th.PerspectiveCamera(fov, aspect, near, far);
	camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);
    }

    // scene
    {       
    const scene = new th.Scene();
    scene.background = new th.Color(0x282c34);
    }

    // 3D model
    {
        const objLoader = new OBJLoader();
        objLoader.load('Mrs.obj', (root) => {scene.add(root);});
    }



}
main();