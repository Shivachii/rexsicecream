// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import * as THREE from "three";

// export function ScrollCone3D() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const shellRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const shell = shellRef.current;
//     if (!canvas || !shell) return;

//     gsap.registerPlugin(ScrollTrigger);

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(32, 1, .1, 100);
//     camera.position.set(0, .3, 10);

//     const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.outputColorSpace = THREE.SRGBColorSpace;
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;
//     renderer.toneMappingExposure = 1.12;

//     const coneGroup = new THREE.Group();
//     coneGroup.rotation.set(-.08, -.35, -.08);
//     scene.add(coneGroup);

//     const waffleMap = createWaffleTexture();
//     waffleMap.colorSpace = THREE.SRGBColorSpace;
//     const coneMaterial = new THREE.MeshStandardMaterial({
//       color: 0xd99743,
//       map: waffleMap,
//       bumpMap: waffleMap,
//       bumpScale: .09,
//       roughness: .76,
//       metalness: 0,
//     });
//     const cone = new THREE.Mesh(new THREE.ConeGeometry(1.13, 3.05, 48, 1, true), coneMaterial);
//     cone.position.y = -1.45;
//     cone.rotation.z = Math.PI;
//     cone.castShadow = true;
//     coneGroup.add(cone);

//     const rim = new THREE.Mesh(
//       new THREE.TorusGeometry(1.09, .075, 12, 48),
//       new THREE.MeshStandardMaterial({ color: 0xe7ad5d, roughness: .7 }),
//     );
//     rim.rotation.x = Math.PI / 2;
//     rim.position.y = .06;
//     coneGroup.add(rim);

//     const scoopSpecs = [
//       { color: 0xf4c944, position: [-.35, .58, .03], scale: 1.06 },
//       { color: 0xf66f83, position: [.35, 1.28, -.02], scale: 1.03 },
//       { color: 0x6fc4df, position: [-.22, 2.03, .01], scale: .98 },
//     ];

//     scoopSpecs.forEach(({ color, position, scale }, index) => {
//       const material = new THREE.MeshStandardMaterial({ color, roughness: .82, metalness: 0 });
//       const scoop = new THREE.Mesh(new THREE.IcosahedronGeometry(.93, 5), material);
//       scoop.position.set(position[0], position[1], position[2]);
//       scoop.scale.set(scale, scale * .92, scale);
//       scoop.rotation.set(index * .3, index * .7, index * .2);
//       scoop.castShadow = true;
//       coneGroup.add(scoop);

//       const drip = new THREE.Mesh(new THREE.SphereGeometry(.18, 20, 20), material);
//       drip.scale.set(.8, 1.75, .75);
//       drip.position.set(position[0] + (index % 2 ? -.45 : .48), position[1] - .65, .38);
//       coneGroup.add(drip);
//     });

//     const keyLight = new THREE.DirectionalLight(0xffffff, 4.4);
//     keyLight.position.set(4, 6, 7);
//     scene.add(keyLight);
//     const fillLight = new THREE.DirectionalLight(0x9fdfff, 2);
//     fillLight.position.set(-5, 2, 4);
//     scene.add(fillLight);
//     scene.add(new THREE.AmbientLight(0xfff2d8, 2.5));

//     const resize = () => {
//       const { width, height } = canvas.getBoundingClientRect();
//       renderer.setSize(width, height, false);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };
//     const observer = new ResizeObserver(resize);
//     observer.observe(canvas);
//     resize();

//     let frame = 0;
//     const render = () => {
//       coneGroup.rotation.y += .0035;
//       renderer.render(scene, camera);
//       frame = requestAnimationFrame(render);
//     };
//     render();

//     const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     let scrollTimeline: gsap.core.Timeline | undefined;
//     if (!reduceMotion) {
//       scrollTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".hero",
//           start: "top top",
//           endTrigger: "#signatures",
//           end: "top 68%",
//           scrub: 1.1,
//           invalidateOnRefresh: true,
//         },
//       });
//       scrollTimeline
//         .fromTo(shell,
//           { x: () => window.innerWidth * .25, y: () => -window.innerHeight * .06, scale: .9, rotate: -5, autoAlpha: 1 },
//           { x: () => -window.innerWidth * .24, y: () => window.innerHeight * .12, scale: .72, rotate: 7, duration: .52, ease: "none" },
//         )
//         .to(shell, {
//           x: () => window.innerWidth * .2,
//           y: () => -window.innerHeight * .12,
//           scale: .4,
//           rotate: -12,
//           autoAlpha: 0,
//           duration: .48,
//           ease: "none",
//         });
//       scrollTimeline.to(coneGroup.rotation, { x: .2, z: .35, duration: 1, ease: "none" }, 0);
//     } else {
//       gsap.set(shell, { x: window.innerWidth * .22, y: -20, scale: .72 });
//     }

//     return () => {
//       observer.disconnect();
//       cancelAnimationFrame(frame);
//       scrollTimeline?.scrollTrigger?.kill();
//       scrollTimeline?.kill();
//       waffleMap.dispose();
//       scene.traverse((object) => {
//         if (object instanceof THREE.Mesh) {
//           object.geometry.dispose();
//           const materials = Array.isArray(object.material) ? object.material : [object.material];
//           materials.forEach((material) => material.dispose());
//         }
//       });
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div className="scroll-cone-shell" ref={shellRef} aria-hidden="true">
//       <canvas ref={canvasRef} />
//     </div>
//   );
// }

// function createWaffleTexture() {
//   const canvas = document.createElement("canvas");
//   canvas.width = 256;
//   canvas.height = 256;
//   const context = canvas.getContext("2d");
//   if (!context) return new THREE.CanvasTexture(canvas);

//   context.fillStyle = "#d99542";
//   context.fillRect(0, 0, 256, 256);
//   context.strokeStyle = "#8f5827";
//   context.lineWidth = 8;
//   for (let offset = -256; offset < 512; offset += 34) {
//     context.beginPath();
//     context.moveTo(offset, 0);
//     context.lineTo(offset + 256, 256);
//     context.stroke();
//     context.beginPath();
//     context.moveTo(offset, 256);
//     context.lineTo(offset + 256, 0);
//     context.stroke();
//   }

//   const texture = new THREE.CanvasTexture(canvas);
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//   texture.repeat.set(3.2, 4.2);
//   return texture;
// }
