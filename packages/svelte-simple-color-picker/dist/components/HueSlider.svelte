<script lang="ts">
	import { getContext } from 'svelte';
	import type { ColorStore } from '../store/colorStore.svelte.js';
	import { draggable } from '../utils/drag.js';

	const color = getContext<ColorStore>('COLOR_CTX');

	function handleDrag({ x }: { x: number }) {
		color.h = x * 360;
	}
</script>

<div
	use:draggable={handleDrag}
	class="relative h-4 w-full cursor-pointer touch-none rounded-md"
	style="
      background: linear-gradient(
        to right, red, yellow, lime, cyan, blue, magenta, red
      );
    "
>
	<div
		class="pointer-events-none absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md"
		style="left: {(color.h / 360) * 100}%; background-color: {color.baseColorHex};"
	></div>
</div>
