import { useMousePosition } from "../hooks/useMousePosition";

export default function MouseGlow() {
    const { x, y } = useMousePosition();

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[-1]"
            style={{
                background: `radial-gradient(
                    800px circle at ${x}px ${y}px,
                    rgba(59,130,246,.07),
                    transparent 40%
                )`,
            }}
        />
    );
}