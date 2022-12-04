import * as th from 'three';
import {OrbitControls} from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';


function init() {

  // Base  
  const canvas = document.querySelector('#c');
  const renderer = new th.WebGLRenderer({canvas});
  renderer.shadowMap.enabled = true;

  const loader2 = new th.TextureLoader();
  const objects = [];

  // Scene Background
  let scene = new th.Scene();
  const back = loader2.load('img/back.jpg');
  let sphere = new th.Mesh(new th.SphereGeometry(35,35,30),new th.MeshBasicMaterial({map: back, side: th.BackSide}));
  sphere.position.y = 2;
  scene.add(sphere);


  // Camera
  let camera = new th.PerspectiveCamera(75,2,0.1,1000);
  camera.position.set(0,1,-2);


  //Orbitcontrol
  const controls = new OrbitControls(camera, canvas);
	controls.target.set(0, 0, 0);
	controls.update();
	console.log(controls);


  // Light
  let hlight = new th.AmbientLight (0xffffff,8);
  scene.add(hlight);

  //let directionalLight = new th.DirectionalLight(0x0000CD,10);   //night light
  let directionalLight = new th.DirectionalLight(0xF5F5DC,10);    //day light
  directionalLight.position.set(-7,8,15);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  

  // 3d model
  let loader = new GLTFLoader();
  loader.load('3d/untitled.gltf', function(gltf){
    let car = gltf.scene;
    //car.scale.set(0.2,0.2,0.2);
    car.castShadow = true;
    car.receiveShadow = true;
    // Managment
    {
    function onKeyDown(e) {
    console.log("key down");
    console.log(e.key);

    if (e.key == "ArrowLeft") {
      car.translateX(0.01);
    } else if (e.key == "ArrowRight") {
      car.translateX(-0.01);
    }
    }
    document.addEventListener("keydown", onKeyDown);
    }

    // Headlight before
    {
    var spotLight = new th.SpotLight(0xF0F8FF,3,15,Math.PI / 13,0);
    let sphere1 = new th.Mesh(new th.SphereGeometry(0.019,12,8),new th.MeshBasicMaterial({color:0xF0F8FF}));
    spotLight.target.position.set(-0.27,0.355,3);
    sphere1.position.set(-0.27,0.355,0.98);
    sphere1.add(spotLight);
    sphere1.add(spotLight.target);
    car.add(sphere1);

    var spotLight = new th.SpotLight(0xF0F8FF,3,15,Math.PI / 13,0);
    let sphere2 = new th.Mesh(new th.SphereGeometry(0.019,12,8),new th.MeshBasicMaterial({color:0xF0F8FF}));
    spotLight.target.position.set(0.27,0.355,3);
    sphere2.position.set(0.27,0.355,0.98);
    sphere2.add(spotLight);
    sphere2.add(spotLight.target);
    car.add(sphere2);0.98
    var spotLight = new th.SpotLight(0xF0F8FF,1,10,Math.PI / 13,0);
    let sphere3 = new th.Mesh(new th.SphereGeometry(0.019,12,8),new th.MeshBasicMaterial({color:0xF0F8FF}));
    spotLight.target.position.set(-0.206,0.355,1);
    sphere3.position.set(-0.206,0.355,0.98);
    sphere3.add(spotLight);
    sphere3.add(spotLight.target);
    car.add(sphere3);

    var spotLight = new th.SpotLight(0xF0F8FF,1,10,Math.PI / 13,0);
    let sphere4 = new th.Mesh(new th.SphereGeometry(0.019,12,8),new th.MeshBasicMaterial({color:0xF0F8FF}));
    spotLight.target.position.set(0.206,0.355,1);
    sphere4.position.set(0.206,0.355,0.98);
    sphere4.add(spotLight);
    sphere4.add(spotLight.target);
    car.add(sphere4);
    }

    // Headlight rear
    {
      var spotLight = new th.SpotLight(0xDC143C,3,15,Math.PI / 18,0);
      let sphere1 = new th.Mesh(new th.SphereGeometry(0.017,12,8),new th.MeshBasicMaterial({color:0xDC143C}));
      spotLight.target.position.set(0.273,-0.5,-3);
      sphere1.position.set(0.273,0.39,-0.82);
      sphere1.add(spotLight);
      sphere1.add(spotLight.target);
      car.add(sphere1);

      var spotLight = new th.SpotLight(0xDC143C,3,15,Math.PI / 18,0);
      let sphere2 = new th.Mesh(new th.SphereGeometry(0.017,12,8),new th.MeshBasicMaterial({color:0xDC143C}));
      spotLight.target.position.set(-0.273,-0.5,-3);
      sphere2.position.set(-0.273,0.39,-0.82);
      sphere2.add(spotLight);
      sphere2.add(spotLight.target);
      car.add(sphere2);

      var spotLight = new th.SpotLight(0xDC143C,1 ,15,Math.PI / 18,0);
      let sphere3 = new th.Mesh(new th.SphereGeometry(0.015,12,8),new th.MeshBasicMaterial({color:0xDC143C}));
      spotLight.target.position.set(-0.1718,-0.5,-3);
      sphere3.position.set(0.1718,0.39,-0.813);
      sphere3.add(spotLight);
      sphere3.add(spotLight.target);
      car.add(sphere3);

      var spotLight = new th.SpotLight(0xDC143C,1,15,Math.PI / 18,0);
      let sphere4 = new th.Mesh(new th.SphereGeometry(0.015,12,8),new th.MeshBasicMaterial({color:0xDC143C}));
      spotLight.target.position.set(-0.1718,-0.5,-3);
      sphere4.position.set(-0.1718,0.39,-0.813);
      sphere4.add(spotLight);
      sphere4.add(spotLight.target);
      car.add(sphere4);
     
    }

    //turn
    { 
      var spotLight = new th.SpotLight(0xDC143C,3,15,Math.PI / 30,0);
      let sphere1 = new th.Mesh(new th.BoxGeometry(0.005,0.005,0.018),new th.MeshBasicMaterial({color:0xDC143C}));
      spotLight.target.position.set(-0.5,0.382,0.95);
      sphere1.position.set(-0.3462,0.382,0.95);
      sphere1.add(spotLight);
      sphere1.add(spotLight.target);
      car.add(sphere1);

      var spotLight = new th.SpotLight(0xDC143C,3,15,Math.PI / 30,0);
      let sphere2 = new th.Mesh(new th.BoxGeometry(0.005,0.005,0.018),new th.MeshBasicMaterial({color:0xDC143C}));
      spotLight.target.position.set(0.5,0.382,0.95);
      sphere2.position.set(0.344,0.382,0.95);
      sphere2.add(spotLight);
      sphere2.add(spotLight.target);
      car.add(sphere2);
    }

    scene.add(gltf.scene);
  });

  

  // Road
  const texture = loader2.load('img/roadpro.png');
  texture.minFilter = th.NearestFilter;  //NearestMipmapNearestFilter
  texture.wrapS = th.RepeatWrapping;
  texture.wrapT = th.RepeatWrapping;
  texture.magFilter = th.NearestFilter;
  texture.repeat.set(60,1);
  
  const material = new th.MeshBasicMaterial({map: texture, side: th.DoubleSide, });


  let geom = new th.CylinderGeometry(500,500,20,500,10);
  geom.rotateZ(-Math.PI/2);
  let cyl = new th.Mesh(geom, material);
  cyl.position.y = -499.904;
  scene.add(cyl);
  objects.push(cyl);

  cyl.receiveShadow = true;

//--------------------------------------------------------------------------------------------------------------
  // Render
  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *=0.0001;
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    objects.forEach((cyl) => {
      cyl.rotation.x = -time;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

init();
