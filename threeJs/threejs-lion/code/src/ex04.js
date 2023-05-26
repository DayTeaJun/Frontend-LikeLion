import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { SampleModel } from "./SampleModel";

// ----- 주제: 스크롤에 따라 움직이는 애니메이션
// https://sketchfab.com/

export default function example() {
  // ----- Renderer
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    // alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 크기를 브라우저 창 크기로
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 고해상 디스플레이 지원
  renderer.shadowMap.enabled = true; // 그림자가 생기도록
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 그림자 부드럽게

  // ----- Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("yellow");

  // ----- Camera
  const camera = new THREE.PerspectiveCamera(
    75, // 시야각(field of view)
    window.innerWidth / window.innerHeight, // 장면 비율
    0.1, // near(가까이 보이는 한계)
    1000 // far(멀리 보이는 한계)
  );
  camera.position.set(-5, 2, 25);
  scene.add(camera);

  // ----- Light
  // 은은한 조명
  const ambientLight = new THREE.AmbientLight("white", 1);
  scene.add(ambientLight);
  // 스팟 조명
  const spotLight = new THREE.SpotLight("white", 1);
  spotLight.position.set(10, 25, 25);
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;
  spotLight.shadow.camera.near = 1;
  spotLight.shadow.camera.far = 200;
  scene.add(spotLight);

  // glb는 gltf를 바이트로 묶어논 형태
  // ----- 커스텀 모델 로더
  const gltfLoader = new GLTFLoader();

  // ----- Mesh
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshStandardMaterial({
      color: "gray",
    })
  );
  floor.receiveShadow = true; // 표면에 그림자가 생길 수 있도록
  floor.position.set(0, 0, 0);
  floor.rotation.x = THREE.MathUtils.degToRad(-90);
  scene.add(floor);

  // 5개의 SampleModel 인스턴스를 만들어 sampleModels 배열에 넣어 두기
  const sampleModels = [];
  sampleModels.push(
    new SampleModel({
      modelSrc: "/models/iphone.glb",
      scene,
      gltfLoader,
      x: -5,
      z: 20,
    })
  );
  sampleModels.push(
    new SampleModel({
      name: "gura",
      modelSrc: "/models/gura.glb",
      scene,
      gltfLoader,
      x: 7,
      y: "0",
      z: 10,
      scale: "1",
    })
  );
  sampleModels.push(
    new SampleModel({
      modelSrc: "/models/iphone.glb",
      scene,
      gltfLoader,
      x: -10,
      z: 0,
    })
  );
  sampleModels.push(
    new SampleModel({
      modelSrc: "/models/iphone.glb",
      scene,
      gltfLoader,
      x: 10,
      z: -10,
    })
  );
  sampleModels.push(
    new SampleModel({
      modelSrc: "/models/iphone.glb",
      scene,
      gltfLoader,
      x: -5,
      z: -20,
    })
  );

  // scroll
  let scrollY = window.scrollY; // 현재 스크롤 위치(픽셀)
  let currentSection = 0; // 현재 활성화된 섹션 번호

  function setSection() {
    scrollY = window.scrollY; // window.pageYOffset;

    // 스크롤 위치를 기준으로, 활성화시킬 섹션 번호를 세팅
    const newSection = Math.round(scrollY / window.innerHeight);
    // Math.round로 반올림 처리.
    console.log(newSection);
    if (newSection != currentSection) {
      // 섹션 번호가 바뀔 경우 애니메이션 재생
      // GSAP 라이브러리 이용
      currentSection = newSection;
      // gsap 그린솦 자바스크립트 애니메이션 라이브러리
      // threejs의 기능이 아닌 값을 바꿔주는 역할
      // to 카메라 포지션을 움직이겠다.
      gsap.to(camera.position, {
        // 1초동안 카메라를 움직이겠다.
        duration: 1,
        // 지연시간 (여기는 스크롤로 위치가 바뀌면 바로 옮겨야하니 0)
        delay: 0,

        // 카메라가 각각 놓여있는 위치로 움직임.
        // (위에서 가져온 모델의 위치)
        x: sampleModels[currentSection].x,
        z: sampleModels[currentSection].z + 5,
      });
      if (sampleModels[currentSection].mesh) {
        if (sampleModels[currentSection].name === "gura") {
          // from()은 to와 정반대로 시작값을 정하고 원래대로 되돌아오는 애니메이션이 실행된다
          // rotation으로 회전시킴. to로 해도 되는데 반대로 돌아가게 함.
          gsap.from(sampleModels[currentSection].mesh.rotation, {
            duration: 2,
            x: "+=0",
            y: "+=0",
            // 블렌더로 제작한 모델들은 z축이 y축이 되어 있음
            z: `+=${Math.PI * 4}`,
          });
        } else {
          gsap.from(sampleModels[currentSection].mesh.rotation, {
            duration: 2,
            x: "+=0",
            y: `+=${Math.PI * 4}`,
            z: "+=0",
          });
        }
      }
    }
  }

  function draw() {
    renderer.render(scene, camera);
    renderer.setAnimationLoop(draw);
  }

  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  // ----- 이벤트
  window.addEventListener("resize", setSize);
  window.addEventListener("scroll", setSection);

  setSection();
  draw();
}
