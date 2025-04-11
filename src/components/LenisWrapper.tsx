import { ReactLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';
import { cancelFrame, frame } from 'framer-motion';
import type { LenisRef } from 'lenis/react';

export default function LenisWrapper({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<LenisRef>(null);

    useEffect(() => {
        function update(data: { timestamp: number }) {
            lenisRef.current?.lenis?.raf(data.timestamp);
        }
        frame.update(update, true);
        return () => cancelFrame(update);
    }, []);

    return (
        <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
            {children}
        </ReactLenis>
    );
}