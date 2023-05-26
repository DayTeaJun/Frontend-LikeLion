import * as THREE from "three";

// ----- 주제: 기본 장면 구성

export default function example() {
  // Renderer 그림 그릴 때 하는 렌더러
  const canvas = document.querySelector("#three-canvas");
  // rederer 만들 때 일반적으로쓰는 WebGLRenderer이다
  const renderer = new THREE.WebGLRenderer({
    // canvas: canvas,
    // 위 캔버스를 가져옴(dom으로 연결된)
    canvas,
    // 이미지 확대시 보간처리해서 덜 깨지게 함
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 크기를 브라우저 창 크기로
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 고해상 디스플레이 지원 (기본값은 1이고, 고해상도면 2)
  renderer.shadowMap.enabled = true; // 그림자가 생기도록 (전체)
  // Renderer 세팅 끝

  // ----- Scene
  const scene = new THREE.Scene();
  // 배경색 설정
  // 컬러값은 css에서 쓰던 컬러값으로 적용가능
  scene.background = new THREE.Color("white");

  // ----- Camera(카메라)
  // 원근 카메라
  // (카메라는 여러 종류가 있는데, 원근 카메라를 제일 많이 씀)
  const camera = new THREE.PerspectiveCamera(
    75, // 시야각(field of view), 값이 작을 수록 시야가 작아짐
    // 카메라로 맞추는게 아닌, 가까이서 본 느낌
    window.innerWidth / window.innerHeight, // 장면 비율
    // near와 far 사이에 있어야 물체가 보임 (둘의 단위는 없다. 상대적)
    0.1, // near(가까이 보이는 한계), 보통 0.1에서 1000 사이로 함
    1000 // far(멀리 보이는 한계)
  );
  camera.position.set(2, 2, 2); // 카메라 위치(x,y,z)
  // camera.position.x = 0;
  // camera.position.y = 1;
  // camera.position.z = 5;

  scene.add(camera); // 카메라는 add안해도 잘됨.
  // 물체를 카메라가 따라감
  camera.lookAt(0, 0, 0);

  // ----- Light(조명)
  // 은은한 조명
  const ambientLight = new THREE.AmbientLight("white", 0.5); // 색상, 강도 (AmbientLight 전체 톤을 결정함, 조명의 강도를 조절)
  scene.add(ambientLight); // AmbientLight 입체감을 줌
  // 스팟 조명
  const spotLight = new THREE.SpotLight("white", 0.7); // 색상, 강도 (SpotLight 원뿔 형태로 비춰지는 라이트)
  spotLight.position.set(-2, 5, 3); // 조명 위치 변경
  spotLight.castShadow = true; // 그림자를 만들 수 있도록 (각각 조명별로 그림자)
  spotLight.shadow.mapSize.width = 1024; // 그림자 해상도(커지면 커질 수록 성능이 낮아짐.)
  spotLight.shadow.mapSize.height = 1024;
  scene.add(spotLight);

  // ----- Mesh 바닥 만들기
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5), // 5, 5 사이즈의 평면
    // Material 종류 중 하나
    new THREE.MeshStandardMaterial({
      color: "lightgray", // 바닥 재질 색
    })
  );
  floor.receiveShadow = true; // 표면에 그림자가 생길 수 있도록
  // 그림자 생기는 조건
  // renderer shadowMap(true) -> 조명 castShadow(true) -> receiveShadow(true) 여야 완성됨
  floor.rotation.x = -Math.PI * 0.5; // Math.PI는 180도 -> 90도
  // floor rotation x 을 안해주면 바닥면이 아닌 색종이(?) 라서
  // 회전해주어야 함. (-로 회전해줘야함 -가 아니면 뒷면으로 돌아가는데 뒷면은 성능때문에 따로 더 코드를 적어줘야 함.)
  // floor.rotaion.x= THREE.MathUtils.degToRad(-90) 위 코드랑 같음

  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // x y z
    new THREE.MeshStandardMaterial({
      color: "skyblue",
    })
  );

  // 그림자를 생기게 한 원인인 box가 true여야 함.
  box.castShadow = true; // 그림자를 만들 수 있도록
  box.position.y = 0.5; // floor보다 위에 포지션 하기위해 0.5만큼 올림

  scene.add(floor, box); // scene에 조립
  renderer.render(scene, camera); // 그리기(렌더링)

  // ----- 캔버스 사이즈를 브라우저 창 사이즈에 맞추기
  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // 카메라 관련 속성이 변하면 실행
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 함수 실행
    renderer.render(scene, camera);
    // 다시 렌더링함.
  }

  // ----- 이벤트
  // 브라우저 창 사이즈 변경 시, 캔버스 사이즈를 맞추기 위해 실행
  window.addEventListener("resize", setSize);
  // resize가 일어날때마다 setSize 호출함
}
