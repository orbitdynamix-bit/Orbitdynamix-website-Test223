"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface LaserFlowProps {
    className?: string;
    color?: string;
    lineCount?: number;
    speed?: number;
}

const LaserFlow: React.FC<LaserFlowProps> = ({
    className = "",
    color = "#8B5CF6",
    lineCount = 50,
    speed = 0.5,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const linesRef = useRef<THREE.Line[]>([]);
    const animationFrameRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;
        cameraRef.current = camera;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setSize(
            containerRef.current.clientWidth,
            containerRef.current.clientHeight
        );
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create laser lines
        const lines: THREE.Line[] = [];
        const laserColor = new THREE.Color(color);

        for (let i = 0; i < lineCount; i++) {
            const points: THREE.Vector3[] = [];
            const segments = 50;

            for (let j = 0; j < segments; j++) {
                const x = (Math.random() - 0.5) * 10;
                const y = (Math.random() - 0.5) * 10;
                const z = (Math.random() - 0.5) * 10;
                points.push(new THREE.Vector3(x, y, z));
            }

            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({
                color: laserColor,
                transparent: true,
                opacity: 0.6,
                linewidth: 2,
            });

            const line = new THREE.Line(geometry, material);
            scene.add(line);
            lines.push(line);
        }

        linesRef.current = lines;

        // Animation
        let time = 0;
        const animate = () => {
            animationFrameRef.current = requestAnimationFrame(animate);
            time += 0.01 * speed;

            // Animate each line
            lines.forEach((line, index) => {
                const positions = line.geometry.attributes.position.array as Float32Array;
                const offset = index * 0.1;

                for (let i = 0; i < positions.length; i += 3) {
                    const x = i / 3;
                    positions[i + 1] += Math.sin(time + x * 0.1 + offset) * 0.01;
                    positions[i + 2] += Math.cos(time + x * 0.1 + offset) * 0.01;
                }

                line.geometry.attributes.position.needsUpdate = true;
                line.rotation.y = time * 0.1;
            });

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            if (!containerRef.current || !camera || !renderer) return;

            const width = containerRef.current.clientWidth;
            const height = containerRef.current.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);

            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            // Dispose of Three.js resources
            lines.forEach((line) => {
                line.geometry.dispose();
                (line.material as THREE.Material).dispose();
            });

            if (renderer) {
                renderer.dispose();
                if (containerRef.current && renderer.domElement) {
                    containerRef.current.removeChild(renderer.domElement);
                }
            }
        };
    }, [color, lineCount, speed]);

    return (
        <div
            ref={containerRef}
            className={`laser-flow-container ${className}`}
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                pointerEvents: "none",
            }}
        />
    );
};

export default LaserFlow;
