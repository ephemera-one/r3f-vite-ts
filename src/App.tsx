import React, { useRef } from "react";
import { OrbitControls, TorusKnot } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export default function App() {
  return (
    <Canvas shadows>
      <color attach="background" args={["black"]} />
      <OrbitControls />
      <ambientLight />
      <pointLight color="white" />
      <pointLight color="black" />
      <Thing />
    </Canvas>
  );
}

function Thing() {
  const test = useRef(null!) as any;
  useFrame(() => {
    test.current.rotation.y += 0.01;
  });
  return (
    <TorusKnot ref={test} args={[1, 0.1, 128, 16]}>
      <meshPhongMaterial color="grey" />
    </TorusKnot>
  );
}
