import { EntryScreenRight } from "../styled"
import { Suspense, useEffect, useState } from "react"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from "@react-three/drei"
import Back from './Back'
import { useMediaQuery } from "@mui/material"
import { EntryScreenBottomGradient, EntryScreenSideGradient } from "./styled"

interface IProps { }

export const EntryScreenRightPart: React.FC<IProps> = () => {
    const mobile = useMediaQuery('(max-width: 1023px)')

    const [rightPartWidth, setRightPartWidth] = useState<string>('50vw');

    useEffect(() => {
        function handleResize() {
            const rightPart = document.getElementById('right');
            if (rightPart) {
                setRightPartWidth('50vw');
            }
        }

        handleResize(); // Initial call to handleResize

        window.addEventListener('resize', handleResize); // Attach event listener

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <EntryScreenRight
                sx={{
                    minWidth: mobile ? '100vw' : rightPartWidth,
                    maxWidth: mobile ? '100vw' : rightPartWidth,
                }}
            >
                <Canvas
                    style={{
                        // borderBottomLeftRadius: mobile ? '0' : '100vh'
                        borderBottomLeftRadius: mobile ? '0' : '100px'
                    }}
                >
                    <ambientLight />
                    <OrbitControls autoRotate autoRotateSpeed={0.35} enableRotate={mobile ? false : true} enableZoom={false} rotateSpeed={1} />
                    <Suspense fallback={null}>
                        <Back />
                    </Suspense>
                    <Environment preset="sunset" />
                </Canvas>

                {!mobile && (
                    <EntryScreenSideGradient
                        sx={{
                            right: rightPartWidth,
                            transform: 'translateX(100%)'
                        }}
                    />
                )}

                <EntryScreenBottomGradient
                    sx={{
                        minWidth: mobile ? '100vw' : rightPartWidth,
                        maxWidth: mobile ? '100vw' : rightPartWidth,
                    }}
                />
            </EntryScreenRight>
        </>
    )
}