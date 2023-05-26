export class SampleModel {
  constructor(info = {}) {
    this.scene = info.scene;
    this.gltfLoader = info.gltfLoader;
    this.width = info.width || 1;
    this.height = info.height || 4;
    this.depth = info.depth || 0.2;
    this.scale = info.scale || 2;

    this.name = info.name || "unkown";

    this.x = info.x || 0;
    this.y = info.y || this.height * 0.5; // 바닥에 올릴려고 높이 반만큼 올림.
    this.z = info.z || 0;

    this.modelSrc = info.modelSrc;

    this.rotationY = info.rotationY || 0;

    // load가 끝나면 실행되는 함수.
    this.gltfLoader.load(this.modelSrc, (glb) => {
      // console.log(glb)
      // 안전하게 그림자 만들기 (아래 내용을 안해도 될수도 있지만 안전하게 하기위해 사용함.)
      glb.scene.traverse((child) => {
        // traverse함수는 갖고있는 자식들을 다 체크해보면서 세팅함.
        if (child.isMesh) {
          // 가지고있는 Mesh들이 그림자를 가지고 있다면 true로 함
          child.castShadow = true;
        }
      });

      this.mesh = glb.scene.children[0];
      this.mesh.scale.set(this.scale, this.scale, this.scale);
      // traverse 해주면 따로 넣지 않아도 됨.(아래 코드 그림자.)
      // this.mesh.castShadow = true;
      this.mesh.rotation.y = this.rotationY;
      this.mesh.position.set(this.x, this.y, this.z);
      // scene에 add를 해서 최종적으로 mesh가 무대에 올라감.
      this.scene.add(this.mesh);
    });
  }
}
