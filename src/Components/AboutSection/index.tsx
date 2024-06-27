import { Download, Save } from "@mui/icons-material";
import { AboutImage, AboutImageOuterMobileContainer, AboutLeftPart, AboutRightPart, AboutTopText, DownloadButton, StyledAboutSection } from "./styled"
import me from '../../resources/images/MePr.jpg'
import { Grid, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { cn } from "../../utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

interface IProps { }

export const WavyBackground = ({
    children,
    className,
    containerClassName,
    colors,
    waveWidth,
    backgroundFill,
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    aboutRightPartWidth,
    ...props
}: {
    children?: any;
    className?: string;
    containerClassName?: string;
    colors?: string[];
    waveWidth?: number;
    backgroundFill?: string;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
    aboutRightPartWidth: number;
    [key: string]: any;
}) => {
    const mobile = useMediaQuery('(max-width: 1023px)')

    const smallMobile = useMediaQuery('(max-width: 767px)')

    const noise = createNoise3D();
    let w: number,
        h: number,
        nt: number,
        i: number,
        x: number,
        ctx: any,
        canvas: any;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const getSpeed = () => {
        switch (speed) {
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    };

    const init = () => {
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        w = ctx.canvas.width = aboutRightPartWidth;
        h = ctx.canvas.height = aboutRightPartWidth;
        ctx.filter = `blur(${blur}px)`;
        nt = 0;
        window.onresize = function () {
            w = ctx.canvas.width = aboutRightPartWidth;
            h = ctx.canvas.height = aboutRightPartWidth;
            ctx.filter = `blur(${blur}px)`;
        };
        render();
    };

    const waveColors = colors ?? [
        "#4d1caf",
        "#5021ae",
        "#24016a",
        "#372067",
        "#5e2fbb",
    ];
    const drawWave = (n: number) => {
        nt += getSpeed();
        for (i = 0; i < n; i++) {
            ctx.beginPath();
            ctx.lineWidth = waveWidth || 50;
            ctx.strokeStyle = waveColors[i % waveColors.length];
            const amplitude = smallMobile ? 50 : 100;

            for (x = 0; x < w; x += 5) {
                var y = noise(x / 800, 0.3 * i, nt) * amplitude;
                ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
            }
            ctx.stroke();
            ctx.closePath();
        }
    };

    let animationId: number;
    const render = () => {
        ctx.fillStyle = backgroundFill || "black";
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.fillRect(0, 0, w, h);
        drawWave(5);
        animationId = requestAnimationFrame(render);
    };

    useEffect(() => {
        init();
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [aboutRightPartWidth]);

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        // I'm sorry but i have got to support it on safari.
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
        );
    }, []);

    return (
        <div
            className={cn(
                "h-screen flex flex-col items-center justify-center",
                containerClassName
            )}
            style={{
                position: 'absolute',
                width: '100%',
                top: 0, // Adjust top position as needed
                left: 0, // Adjust left position as needed
                zIndex: 9, // Ensure it's below BackgroundImageComponent
            }}
        >
            <canvas
                ref={canvasRef}
                id="canvas"
                style={{
                    ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
                    position: 'absolute',
                }}
            ></canvas>
            <div className={cn("relative z-10", className)} {...props}>
                {children}
            </div>
        </div>
    );
};

export const AboutSection: React.FC<IProps> = () => {
    const { t } = useTranslation()

    const onSaveButtonClick = () => {
        const pdfUrl = "/documents/CV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Viktor_Riabokon_CV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const smallDesktop = useMediaQuery('(max-height: 799px) and (min-width: 1024px)')
    const mobile = useMediaQuery('(max-width: 1023px)')
    const smallMobile = useMediaQuery('(max-width: 767px)')

    const aboutRightPartRef = useRef<HTMLDivElement>(null);
    const [aboutRightPartWidth, setAboutRightPartWidth] = useState<number>(0);

    const updateAboutRightPartWidth = () => {
        if (aboutRightPartRef.current) {
            const width = aboutRightPartRef.current.offsetWidth;
            setAboutRightPartWidth(width);
        }
    };

    useEffect(() => {
        updateAboutRightPartWidth();
        window.addEventListener("resize", updateAboutRightPartWidth);
        return () => {
            window.removeEventListener("resize", updateAboutRightPartWidth);
        };
    }, []);

    return (
        <>
            <StyledAboutSection>
                <AboutTopText>
                    {t('about')}
                </AboutTopText>
                <AboutLeftPart>
                    <div>
                        <b style={{
                            fontSize: smallMobile ? '16px' : smallDesktop ? '18px' : mobile ? '18px' : '24px'
                        }}>
                            {t('about_first')}
                        </b>
                        <br /><br />
                        <div style={{
                            fontSize: smallMobile ? '12px' : smallDesktop ? '14px' : mobile ? '14px' : '18px'
                        }}>
                            {t('about_second')}
                        </div>
                    </div>

                    <DownloadButton
                        onClick={onSaveButtonClick}
                        startIcon={<Download />}
                    >
                        {t('download_cv')}
                    </DownloadButton>
                </AboutLeftPart>

                <AboutRightPart ref={aboutRightPartRef}>
                    <AboutImage />
                    <WavyBackground aboutRightPartWidth={aboutRightPartWidth} waveWidth={smallMobile ? 30 : mobile ? 75 : 165} />

                </AboutRightPart>
            </StyledAboutSection>
        </>
    )
}