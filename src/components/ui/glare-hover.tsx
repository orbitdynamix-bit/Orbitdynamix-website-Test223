"use client";

import React from 'react';
import './glare-hover.css';

interface GlareHoverProps {
    width?: string;
    height?: string;
    background?: string;
    borderRadius?: string;
    borderColor?: string;
    children: React.ReactNode;
    asChild?: boolean;
    glareColor?: string;
    glareOpacity?: number;
    glareAngle?: number;
    glareSize?: number;
    transitionDuration?: number;
    playOnce?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const GlareHover = ({
    width = 'auto',
    height = 'auto',
    background = 'transparent',
    borderRadius = '10px',
    borderColor = 'transparent',
    children,
    asChild = false,
    glareColor = '#ffffff',
    glareOpacity = 0.5,
    glareAngle = -45,
    glareSize = 250,
    transitionDuration = 650,
    playOnce = false,
    className = '',
    style = {}
}: GlareHoverProps) => {
    const hex = glareColor.replace('#', '');
    let rgba = glareColor;
    if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
    } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
        const r = parseInt(hex[0] + hex[0], 16);
        const g = parseInt(hex[1] + hex[1], 16);
        const b = parseInt(hex[2] + hex[2], 16);
        rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
    }

    const vars = {
        '--gh-width': width,
        '--gh-height': height,
        '--gh-bg': background,
        '--gh-br': borderRadius,
        '--gh-angle': `${glareAngle}deg`,
        '--gh-duration': `${transitionDuration}ms`,
        '--gh-size': `${glareSize}%`,
        '--gh-rgba': rgba,
        '--gh-border': borderColor
    } as React.CSSProperties;

    const mergedClassName = `glare-hover ${asChild ? 'glare-hover--as-child' : ''} ${playOnce ? 'glare-hover--play-once' : ''} ${className}`;

    if (asChild) {
        if (!React.isValidElement(children)) {
            throw new Error('GlareHover with asChild expects a single valid React element child.');
        }

        const child = children as React.ReactElement<{ className?: string; style?: React.CSSProperties }>;
        return React.cloneElement(child, {
            className: `${mergedClassName} ${child.props.className ?? ''}`.trim(),
            style: { ...vars, ...(child.props.style ?? {}), ...style },
        });
    }

    return (
        <div
            className={mergedClassName}
            style={{ ...vars, ...style }}
        >
            {children}
        </div>
    );
};

export default GlareHover;
