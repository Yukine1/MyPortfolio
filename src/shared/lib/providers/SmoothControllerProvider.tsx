'use client';
import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ReactLenis root options={{ lerp: 0.05, duration: 1.2 }}>
            {children}
        </ReactLenis>
    );
};