"use client";

import { useEffect, useRef, useState } from 'react';

interface SplineViewerProps {
    sceneUrl: string;
    className?: string;
}

export default function SplineViewer({ sceneUrl, className = '' }: SplineViewerProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    return (
        <div className={`relative ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                    <div className="text-white/50 text-sm">Loading 3D Scene...</div>
                </div>
            )}
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                    <div className="text-white/50 text-sm">Unable to load 3D scene</div>
                </div>
            )}
            <iframe
                src={sceneUrl}
                frameBorder="0"
                width="100%"
                height="100%"
                className="w-full h-full bg-transparent"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                }}
                style={{ border: 'none', background: 'transparent' }}
            />
        </div>
    );
}
