import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#canvas"),
  antialias: true,
});
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.physicallyCorrectLights = true;

//orbit control
// renderer.setSize(innerWidth , innerHeight);
document.querySelector("#canvas3d").appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(30, 1);
camera.position.set(0, 3, 35);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

renderer.setClearColor(0xffffff, 0); //투명 배경

const dilight = new THREE.DirectionalLight(0xffffff, 1.5);
dilight.position.set(1, 1, 10);
// dilight.castShadow = true;

const amlight = new THREE.AmbientLight(0xffffff, 1);
scene.add(dilight, amlight);

const loader = new GLTFLoader();
loader.load(
  "src/low_poly_winter_scene/scene.gltf",
  function (gltf) {
    scene.add(gltf.scene);
    function animate() {
      requestAnimationFrame(animate);
      //자동으로 회전
      gltf.scene.rotation.y += 0.001;
      //orbit control
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  },
  function (error) {
    console.log(error);
  }
);
