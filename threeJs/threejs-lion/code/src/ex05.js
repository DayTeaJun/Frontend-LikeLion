import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// ----- 주제: OrbitControls
// CSS에서 #three-canvas의 z-index를 100보다 큰 값으로 세팅해주세요
// 해줘야 카메라가 보는 환경을 바꿀 수 있음

export default function example() {
  // Renderer
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.y = 1.5;
  camera.position.z = 4;
  scene.add(camera);

  // Light
  const ambientLight = new THREE.AmbientLight("white", 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight("white", 1);
  directionalLight.position.x = 1;
  directionalLight.position.z = 2;
  scene.add(directionalLight);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // 줌인 줌 아웃
  //   controls.enableZoom = false;
  controls.maxDistance = 10; // 줌아웃의 한계값 정해줌
  controls.minDistance = 3; // 줌인의 한계값 정해줌
  //   controls.minPolarAngle = Math.PI / 4; // 45도
  // controls.minPolarAngle = THREE.MathUtils.degToRad(45); // 최대각도
  // controls.maxPolarAngle = THREE.MathUtils.degToRad(135);
  //   controls.target.set(2, 2, 2); // 카메라 회전의 기준점을 바꿔줌
  controls.autoRotate = true; // 알아서 돌게 해줌
  // controls.autoRotateSpeed = 50; // 카메라 회전의 스피드 올려줌

  // Mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  let mesh;
  let material;
  for (let i = 0; i < 20; i++) {
    material = new THREE.MeshStandardMaterial({
      color: `rgb(
				${50 + Math.floor(Math.random() * 205)},
				${50 + Math.floor(Math.random() * 205)},
				${50 + Math.floor(Math.random() * 205)}
			)`,
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (Math.random() - 0.5) * 5;
    mesh.position.y = (Math.random() - 0.5) * 5;
    mesh.position.z = (Math.random() - 0.5) * 5;
    scene.add(mesh);
  }

  // 그리기
  const clock = new THREE.Clock();

  function draw() {
    const delta = clock.getDelta();

    controls.update(); // for enableDamping, autoRotate
    // 내가 움직이면서 손을 땔 때도 계속해서 렌더링하게 해줌
    // 주석처리하면 내가 움직일 때만 움직임.

    renderer.render(scene, camera);
    renderer.setAnimationLoop(draw);
  }

  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  // 이벤트
  window.addEventListener("resize", setSize);

  draw();
}
