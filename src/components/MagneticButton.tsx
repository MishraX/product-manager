import { useRef, useCallback } from 'react';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
    as?: string | React.ElementType;
    href?: string;
    target?: string;
    rel?: string;
    download?: string;
    onClick?: (e: React.MouseEvent) => void;
}

/**
 * A magnetic button that subtly follows the cursor on hover.
 * On touch devices, behaves as a normal button (no magnetic effect).
 */
export default function MagneticButton({
    children,
    className = '',
    strength = 0.35,
    as: Tag = 'button',
    ...rest
}: MagneticButtonProps) {
    const ref = useRef<HTMLElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        // Skip on touch-primary devices
        if (window.matchMedia('(hover: none)').matches) return;

        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * strength;
        const dy = (e.clientY - cy) * strength;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
        el.style.transition = 'transform 0.15s ease';
    }, [strength]);

    const handleMouseLeave = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = 'translate(0,0)';
        el.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }, []);

    return (
        <Tag
            ref={ref}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...rest}
        >
            {children}
        </Tag>
    );
}
