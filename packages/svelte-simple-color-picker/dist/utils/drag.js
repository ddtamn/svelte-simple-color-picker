import { clamp } from '../core/clamp.js';
export function draggable(node, onDrag) {
    function handleMove(e) {
        const rect = node.getBoundingClientRect();
        const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
        const y = clamp((e.clientY - rect.top) / rect.height, 0, 1);
        console.log('drag move', x, y);
        onDrag({ x, y, event: e });
    }
    function handleDown(e) {
        e.preventDefault();
        try {
            node.setPointerCapture(e.pointerId);
        }
        catch (error) { }
        handleMove(e);
        const onMove = (ev) => handleMove(ev);
        const onUp = (ev) => {
            try {
                node.releasePointerCapture(ev.pointerId);
            }
            catch (error) { }
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onUp);
        };
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
    }
    node.addEventListener('pointerdown', handleDown);
    return {
        destroy() {
            node.removeEventListener('pointerdown', handleDown);
        }
    };
}
