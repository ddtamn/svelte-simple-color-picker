<script lang="ts">
	import { getContext } from 'svelte';
	import { colord } from 'colord';
	import type { ColorStore } from '../store/colorStore.svelte.js';
	import { draggable } from '../utils/drag.js';

	const color = getContext<ColorStore>('COLOR_CTX');

	function handleDrag({ x }: { x: number }) {
		color.a = x;
	}

	let rgbBase = $derived(colord({ h: color.h, s: color.s, v: color.v }).toRgbString());
</script>

<div
	use:draggable={handleDrag}
	class="relative h-4 w-full cursor-pointer touch-none rounded-md bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyEgSRC0AQB52BIFLuA2xwAAAABJRU5ErkJggg==')]"
>
	<div
		class="absolute inset-0 rounded-md"
		style="background: linear-gradient(to right, rgba(0,0,0,0), {rgbBase});"
	></div>
	<div
		class="pointer-events-none absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md"
		style="left: {color.a * 100}%; background-color: {color.rgbString};"
	></div>
</div>
