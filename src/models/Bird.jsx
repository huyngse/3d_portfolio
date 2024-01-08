import { useAnimations, useGLTF } from "@react-three/drei";
import birdScene from "../assets/3d/simple_bird.glb";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);
    useEffect(() => {
        actions['Flying'].play();
    }, [actions]);
    useFrame(({ clock, camera }) => {
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
        if (birdRef.current.position.x > camera.position.x + 10) {
            birdRef.current.rotation.y = Math.PI + 2;
        } else if (birdRef.current.position.x < camera.position.x - 10) {
            birdRef.current.rotation.y = 2;
        }

        if (birdRef.current.rotation.y === 2) {
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    })
    return (
        <mesh
            position={[-2, 0, -5]}
            ref={birdRef}
            rotation={[0, 2, 0]}
            scale={[0.5, 0.5, 0.5]}
        >
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird