"use client";

import { ReactNode, useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

interface ScrollStackProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    offset?: number;
}

const Card = <T,>({
    item,
    index,
    renderItem,
    progress,
    range,
    targetScale,
    offset,
}: {
    item: T;
    index: number;
    renderItem: (item: T, index: number) => ReactNode;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
    offset: number;
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="flex items-center justify-center sticky"
            style={{
                top: `calc(10% + ${index * offset}px)`,
                // We ensure there is enough space for scrolling
                marginBottom: `${offset}px`,
            }}
        >
            <motion.div
                className="w-full origin-top"
                style={{
                    scale,
                }}
            >
                {renderItem(item, index)}
            </motion.div>
        </div>
    );
};

export default function ScrollStack<T>({
    items,
    renderItem,
    offset = 40,
}: ScrollStackProps<T>) {
    const container = useRef(null);

    // Track the scroll of the entire container to scale processed cards
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={container} className="relative w-full">
            {items.map((item, i) => {
                // Calculate the scale target for each card so previous cards get smaller
                const targetScale = 1 - (items.length - i) * 0.05;

                return (
                    <Card
                        key={i}
                        item={item}
                        index={i}
                        renderItem={renderItem}
                        progress={scrollYProgress}
                        range={[i * (1 / items.length), 1]}
                        targetScale={targetScale}
                        offset={offset}
                    />
                );
            })}
        </div>
    );
}
