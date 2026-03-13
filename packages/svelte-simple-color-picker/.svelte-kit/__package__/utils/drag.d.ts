interface DragPosition {
    x: number;
    y: number;
    event: PointerEvent;
}
export declare function draggable(node: HTMLElement, onDrag: (pos: DragPosition) => void): {
    destroy(): void;
};
export {};
