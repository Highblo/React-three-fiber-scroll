import { FC } from "react";
import { Image } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const Images: FC = () => {
  const { height } = useThree((state) => state.viewport);

  return (
    <group>
      <Image
        url="images/chaeyoung3.jpg"
        scale={[4, height]}
        position={[-1, 0, 1]}
      />
      <Image url="images/chaeyoung4.jpg" scale={[3, 3]} position={[2, 0, 1]} />
      <Image
        url="images/chaeyoung1.jpg"
        scale={[1, 3.5]}
        position={[-2.3, -height, 2]}
      />
      <Image
        url="images/chaeyoung2.jpg"
        scale={[1.4, 2]}
        position={[1.3, -height - 0.3, 3.2]}
      />
    </group>
  );
};
