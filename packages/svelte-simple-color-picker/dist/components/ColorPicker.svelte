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

	$effect(() => {
		if (!value) return;
		const currentHex = untrack(() => colorStore.hex);
		if (currentHex.toLocaleLowerCase() !== value.toLocaleLowerCase()) {
			colorStore.updateFromHex(value);
		}
	});

	$effect(() => {
		const currentHex = colorStore.hex;
		if (onChange && currentHex.toLocaleLowerCase() !== value.toLocaleLowerCase()) {
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
