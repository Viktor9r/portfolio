import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import circleIcon from '../../resources/icons/whiteCircle.webp'
import { Html } from '@react-three/drei';
import { useRef, useCallback, useMemo, Suspense, useState, useEffect } from 'react';
import { AppInnerContainer } from '../../styled';
import { EntryScreen } from '../EntryScreen';
import { AppHeader } from '../Header';
import { MainScreenBottomBar } from '../MainScreenBottomBar';
import { AboutSection } from '../AboutSection';
import { SkillsSection } from '../SkillsSection';
import { ProjectsSection } from '../ProjectsSection';
import { ContactSection } from '../ContactSection';
import { useTabNavigation } from '../../storage/useTabNavigation';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigationScreenComponent } from '../NavigationScreenComponent';
import { Footer } from '../Footer';
import { TweenLite, Circ, gsap } from 'gsap';

function AnimationCanvas() {
    const { value, setValue } = useTabNavigation()
    const [scrollPosition, setScrollPosition] = useState(0);
    const targetRef = useRef(null);
    const navigate = useNavigate();
    let location = useLocation();
    const [showNavScreen, setShowNavScreen] = useState(false)
    const [isBottom, setIsBottom] = useState(false)
    const [autoRotateSkillsCube, setAutoRotateSkillsCube] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        if (scrollPosition >= 0 && scrollPosition < window.innerHeight * 0.75) {
            setValue(0);
        }
        if (scrollPosition >= window.innerHeight * 0.75 && scrollPosition < window.innerHeight * 1.75) {
            setValue(1);
        }
        if (scrollPosition >= window.innerHeight * 1.75 && scrollPosition < window.innerHeight * 2.75) {
            setValue(2);
        }
        if (scrollPosition >= window.innerHeight * 2.75 && scrollPosition < window.innerHeight * 3.75) {
            setValue(3);
        }
        if (scrollPosition >= window.innerHeight * 3.75) {
            setValue(4);
        }
        if (scrollPosition >= window.innerHeight * 4 + 80) {
            setIsBottom(true);
        }
        if (scrollPosition < window.innerHeight * 4 + 80) {
            setIsBottom(false);
        }
    }, [scrollPosition, setScrollPosition])

    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    return (
        <div style={{
            position: 'relative',
        }}>
            <AppHeader
                homeRef={homeRef}
                aboutRef={aboutRef}
                skillsRef={skillsRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
                isBottom={isBottom}
                isAutoSliding={autoRotateSkillsCube}
                setIsAutoSliding={setAutoRotateSkillsCube}
            />
            
            <div ref={homeRef}>
                <EntryScreen />
            </div>

            <AppInnerContainer>
                <div ref={aboutRef}>
                    <AboutSection />
                </div>
                <div ref={skillsRef}>
                    <SkillsSection
                        isAutoSliding={autoRotateSkillsCube}
                        setIsAutoSliding={setAutoRotateSkillsCube}
                    />
                </div>
                <div ref={projectsRef}>
                    <ProjectsSection />
                </div>
            </AppInnerContainer>

            <div ref={contactRef}>
                <ContactSection />
            </div>

            <div>
                <Footer />
            </div>
            <MainScreenBottomBar isBottom={isBottom} />
        </div>
    );
}

export const DesktopLayout: React.FC = () => {
    return (
        <>
            <AnimatedBackground />
            <AnimationCanvas />
        </>
    )
}

interface Point {
    x: number;
    y: number;
    originX: number;
    originY: number;
    active?: number;
    circle?: Circle;
    closest?: Point[];
  }
  
  class Circle {
    pos: Point;
    radius: number;
    color: string;
    active: number | undefined;
  
    constructor(pos: Point, rad: number, color: string) {
      this.pos = pos;
      this.radius = rad;
      this.color = color;
      this.active = 0;
    }
  
    draw(ctx: CanvasRenderingContext2D) {
      if (!this.active) return;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = `rgba(77,28,175,${this.active})`;
      ctx.fill();
    }
  }
  

  const AnimatedBackground: React.FC = () => {
    const largeHeaderRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<Point[]>([]);
    const targetRef = useRef<Point>({ x: window.innerWidth / 2, y: window.innerHeight / 2, originX: window.innerWidth / 2, originY: window.innerHeight / 2 });
    const animateHeaderRef = useRef(true);
  
    useEffect(() => {
      let width = window.innerWidth;
      let height = window.innerHeight;
      const target = targetRef.current;
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d')!;
      let points: Point[] = [];
  
      const initHeader = () => {
        if (largeHeaderRef.current) {
          largeHeaderRef.current.style.height = `${height}px`;
        }
        canvas.width = width;
        canvas.height = height;
  
        points = [];
        for (let x = 0; x < width; x += width / 20) {
          for (let y = 0; y < height; y += height / 20) {
            const px = x + Math.random() * width / 20;
            const py = y + Math.random() * height / 20;
            const p: Point = { x: px, originX: px, y: py, originY: py };
            points.push(p);
          }
        }
  
        for (const p1 of points) {
          const closest = [];
          for (const p2 of points) {
            if (p1 !== p2) {
              let placed = false;
              for (let k = 0; k < 5; k++) {
                if (!placed) {
                  if (!closest[k]) {
                    closest[k] = p2;
                    placed = true;
                  }
                }
              }
              for (let k = 0; k < 5; k++) {
                if (!placed) {
                  if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                    closest[k] = p2;
                    placed = true;
                  }
                }
              }
            }
          }
          p1.closest = closest;
        }
  
        for (const p of points) {
          const c = new Circle(p, 2 + Math.random() * 2, 'rgba(77,28,175,0.3)');
          p.circle = c;
        }
  
        pointsRef.current = points;
      };
  
      const addListeners = () => {
        if (!('ontouchstart' in window)) {
          window.addEventListener('mousemove', mouseMove);
        }
        window.addEventListener('resize', resize);
      };
  
      const mouseMove = (e: MouseEvent) => {
        target.x = e.clientX;
        target.y = e.clientY;
      };
  
      const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        if (largeHeaderRef.current) {
          largeHeaderRef.current.style.height = `${height}px`;
        }
        canvas.width = width;
        canvas.height = height;
      };
  
      const initAnimation = () => {
        animate();
        for (const p of points) {
          shiftPoint(p);
        }
      };
  
      const animate = () => {
        if (animateHeaderRef.current) {
          ctx.clearRect(0, 0, width, height);
          for (const p of pointsRef.current) {
            if (Math.abs(getDistance(target, p)) < 4000) {
              p.active = 0.3;
              p.circle!.active = 0.6;
            } else if (Math.abs(getDistance(target, p)) < 20000) {
              p.active = 0.1;
              p.circle!.active = 0.3;
            } else if (Math.abs(getDistance(target, p)) < 40000) {
              p.active = 0.02;
              p.circle!.active = 0.1;
            } else {
              p.active = 0;
              p.circle!.active = 0;
            }
            drawLines(p);
            p.circle!.draw(ctx);
          }
        }
        requestAnimationFrame(animate);
      };
  
      const shiftPoint = (p: Point) => {
        gsap.to(p, {
          duration: 1 + 1 * Math.random(),
          x: p.originX - 50 + Math.random() * 100,
          y: p.originY - 50 + Math.random() * 100,
          ease: Circ.easeInOut,
          onComplete: () => shiftPoint(p),
        });
      };
  
      const drawLines = (p: Point) => {
        if (!p.active) return;
        for (const pClosest of p.closest!) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pClosest.x, pClosest.y);
          ctx.strokeStyle = `rgba(132, 136, 255,${p.active})`;
          ctx.stroke();
        }
      };
  
      const getDistance = (p1: Point, p2: Point) => {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
      };
  
      initHeader();
      addListeners();
      initAnimation();
    }, []);
  
    return (
      <div style={{position: 'fixed'}} ref={largeHeaderRef} className="large-header" id="large-header">
        <canvas ref={canvasRef} id="demo-canvas"></canvas>
      </div>
    );
  };

export default AnimatedBackground;
