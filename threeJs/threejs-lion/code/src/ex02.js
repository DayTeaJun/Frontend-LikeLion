import * as THREE from "three";

// ----- 주제: 기본 애니메이션 원리

export default function example() {
  // ----- Renderer
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({
    // canvas: canvas,
    canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 크기를 브라우저 창 크기로
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 고해상 디스플레이 지원
  console.log(window.devicePixelRatio);
  renderer.shadowMap.enabled = true; // 그림자가 생기도록

  // ----- Scene
  const scene = new THREE.Scene();
  // 배경색 설정
  scene.background = new THREE.Color("white");

  // ----- Camera(카메라)
  // 원근 카메라
  const camera = new THREE.PerspectiveCamera(
    75, // 시야각(field of view)
    window.innerWidth / window.innerHeight, // 장면 비율
    0.1, // near(가까이 보이는 한계)
    1000 // far(멀리 보이는 한계)
  );
  camera.position.set(0, 1, 5); // 카메라 위치
  scene.add(camera);

  // ----- Light(조명)
  // 은은한 조명
  const ambientLight = new THREE.AmbientLight("white", 0.5); // 색상, 강도
  scene.add(ambientLight);
  // 스팟 조명
  const spotLight = new THREE.SpotLight("white", 0.7); // 색상, 강도
  spotLight.position.set(-2, 5, 3);
  spotLight.castShadow = true; // 그림자를 만들 수 있도록
  spotLight.shadow.mapSize.width = 1024; // 그림자 해상도
  spotLight.shadow.mapSize.height = 1024;
  scene.add(spotLight);

  // ----- Mesh
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    new THREE.MeshStandardMaterial({
      color: "lightgray",
    })
  );
  floor.receiveShadow = true; // 표면에 그림자가 생길 수 있도록
  floor.rotation.x = -Math.PI * 0.5; // Math.PI는 180도

  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({
      color: "red",
    })
  );
  box.castShadow = true; // 그림자를 만들 수 있도록
  box.position.y = 0.5;

  scene.add(floor, box);

  // 기기 성능 차이에 따른 애니메이션 속도 차이를 없애기 위해 three.js에서 제공하는 Clock 사용
  const clock = new THREE.Clock();

  // ----- 빠르게 반복 실행 되는 그리기 함수
  function draw() {
    // delta time은 시간의 간격으로 Date.now를 사용하여 new time에서 old thime을 빼는 방식으로 deltatime을 구할수 있다.
    const delta = clock.getDelta(); // draw 실행 시간 간격
    const time = clock.getElapsedTime(); // 총 경과 시간

    // box.rotation.y += 0.1;
    // box.rotation.x += 0.1;
    // 계속해서 0.01만큼 y축을 움직임 함수한번 실행할때 0.01씩 오름
    // 근데 컴퓨터마다 속도가 달라서 다르게 적용함.

    // 기기 성능 차이에 따른 애니메이션 속도 차이를 없애기 위해 Clock의 delta 사용
    box.rotation.y += delta * 5; // delta를 더 많이 씀
    // box.rotation.y = time; // 시간에 따른 걸로 바뀌지만, 직관적이지 않음.
    // box.rotation.y += 0.01; // Radian: 2PI가 360도

    // 렌더링
    renderer.render(scene, camera);
    // draw 함수 반복 실행
    renderer.setAnimationLoop(draw); // VR 기기를 위한 함수가 추가 되어있음 (애니메이션을 계속해서 그려주는 함수)
    // window.requestAnimationFrame(draw);
    // 현재 함수가 끝나면 다음 함수로 계속해서 애니메이션을 그려주는 역할.
    // 재귀 호출 형태로 계속해서 반복 실행 해줌.
  }

  // ----- 캔버스 사이즈를 브라우저 창 사이즈에 맞추기
  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix(); // 카메라 관련 속성이 변하면 실행
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  // ----- 이벤트
  // 브라우저 창 사이즈 변경 시, 캔버스 사이즈를 맞추기 위해 실행
  window.addEventListener("resize", setSize);

  draw();
}
