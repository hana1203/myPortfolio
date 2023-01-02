import { GLTFLoader } from "GLTFLoader";
import * as THREE from "three";

function ThreeCanvas() {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#canvas"),
  });

  const camera = new THREE.PerspectiveCamera(30, 1);
  const loader = new GLTFLoader();
  loader.load("src/low_poly_winter_scene/scene.gltf", function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene);
  });
}

ThreeCanvas();
