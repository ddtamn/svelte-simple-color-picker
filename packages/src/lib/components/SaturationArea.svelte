<script lang="ts">
	import { getContext } from 'svelte';
	import type { ColorStore } from '../store/colorStore.svelte.js';
	import { draggable } from '../utils/drag.js';

	const color = getContext<ColorStore>('COLOR_CTX');

	function handleDrag({ x, y }: { x: number; y: number }) {
		color.s = x * 100;
		color.v = 100 - y * 100;
	}
</script>

<div
	use:draggable={handleDrag}
	class="relative h-[180px] w-full cursor-crosshair touch-none overflow-hidden rounded-md"
	style="
      background:
        linear-gradient(to top, black, transparent),
        linear-gradient(to right, white, hsl({color.h}, 100%, 50%));
    "
>
	<div
		class="pointer-events-none absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md"
		style="left: {color.s}%; top: {100 - color.v}%; background-color: {color.hex}"
	></div>
</div>
