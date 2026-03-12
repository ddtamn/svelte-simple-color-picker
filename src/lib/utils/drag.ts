import { clamp } from '../core/clamp.js';

interface DragPosition {
	x: number;
	y: number;
	event: PointerEvent;
}

export function draggable(node: HTMLElement, onDrag: (pos: DragPosition) => void) {
	console.log('draggable init', node);
	function handleMove(e: PointerEvent) {
		const rect = node.getBoundingClientRect();

		const x = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
		const y = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);
		console.log('drag move', x, y);
		onDrag({ x, y, event: e });
	}

	function handleDown(e: PointerEvent) {
		console.log('pointer down', e.type);
		e.preventDefault();

		try {
			node.setPointerCapture(e.pointerId);
		} catch (error) {}
		handleMove(e);

		const onMove = (ev: PointerEvent) => handleMove(ev);
		const onUp = (ev: PointerEvent) => {
			try {
				node.releasePointerCapture(ev.pointerId);
			} catch (error) {}
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
