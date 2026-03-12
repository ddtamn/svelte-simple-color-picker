<script lang="ts">
	import { setContext, untrack } from 'svelte';
	import { ColorStore } from '../store/colorStore.svelte.js';

	import SaturationArea from './SaturationArea.svelte';
	import HueSlider from './HueSlider.svelte';
	import AlphaSlider from './AlphaSlider.svelte';
	import ColorInput from './ColorInput.svelte';

	let {
		value = '#ffffff',
		onChange,
		showAlpha = true
	}: {
		value?: string;
		showAlpha?: boolean;
		onChange?: (hex: string) => void;
	} = $props();

	const colorStore = new ColorStore(untrack(() => value));

	setContext('COLOR_CTX', colorStore);

	// 1) Sinkronisasi dari prop -> store (hanya ketika value dari luar berubah)
	$effect(() => {
		if (!value) return;
		// Dibungkus untrack supaya effect ini TIDAK subscribe ke perubahan internal
		const currentHex = untrack(() => colorStore.hex);
		if (currentHex.toLocaleLowerCase() !== value.toLocaleLowerCase()) {
			colorStore.updateFromHex(value);
		}
	});

	// 2) Sinkronisasi dari store -> parent (saat user drag/mengubah warna di dalam)
	$effect(() => {
		const currentHex = colorStore.hex;
		if (onChange && currentHex.toLocaleLowerCase() !== value.toLocaleLowerCase()) {
			// onChange bisa mengubah prop value di parent
			untrack(() => onChange(currentHex));
		}
	});
</script>

<div class="flex w-full flex-col gap-3 select-none">
	<SaturationArea />
	<HueSlider />
	{#if showAlpha}
		<AlphaSlider />
	{/if}
	<ColorInput />
</div>
