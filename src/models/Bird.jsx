import { useGLTF } from "@react-three/drei";
import birdScene from "../assets/3d/simple_bird.glb";

const Bird = () => {
    const { scene, animation } = useGLTF(birdScene);
    return (
        <mesh position={[-2, 0, -5]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird