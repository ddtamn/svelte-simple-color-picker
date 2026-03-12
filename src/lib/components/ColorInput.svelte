<script lang="ts">
	import { getContext } from 'svelte';
	import type { ColorStore } from '../store/colorStore.svelte.js';

	const color = getContext<ColorStore>('COLOR_CTX');

	let fallbackInputEl: HTMLInputElement;

	function handleInputChange(e: Event) {
		const val = (e.currentTarget as HTMLInputElement).value;
		color.updateFromHex(val);
	}

	async function openEyeDropper() {
		if ('EyeDropper' in window) {
			try {
				// @ts-ignore
				const eyeDropper = new window.EyeDropper();
				const result = await eyeDropper.open();
				color.updateFromHex(result.sRGBHex);
			} catch (e) {
				//
			}
		} else {
			if (fallbackInputEl) {
				fallbackInputEl.value = color.hex.slice(0, 7);
				fallbackInputEl.click();
			}
		}
	}
</script>

<div class="flex w-full items-center gap-2">
	<input
		type="text"
		value={color.hex}
		onchange={handleInputChange}
		class="h-9 flex-1 rounded-md border border-neutral-200 bg-transparent px-3 py-1 font-mono text-sm uppercase shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-neutral-400 focus-visible:outline-none dark:border-neutral-800 dark:focus-visible:ring-neutral-300"
		placeholder="#FFFFFF"
	/>
	<button
		type="button"
		onclick={openEyeDropper}
		class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-transparent text-sm font-medium whitespace-nowrap shadow-sm transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-1 focus-visible:ring-neutral-400 focus-visible:outline-none dark:border-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300"
		aria-label="Pick color from screen"
	>
		<!-- <Pipette class="size-4" /> -->

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path
				d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"
			/>
			<path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" />
			<path d="m2 22 .414-.414" />
		</svg>
	</button>

	<input type="color" bind:this={fallbackInputEl} onchange={handleInputChange} class="hidden" />
</div>
