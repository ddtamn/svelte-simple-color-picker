# Svelte Simple Color Picker

A modern, highly modular, and headless-friendly color picker component built specifically for **Svelte 5**.

[![NPM Version](https://img.shields.io/npm/v/svelte-simple-color-picker.svg)](https://www.npmjs.com/package/svelte-simple-color-picker)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Features

- **Svelte 5 Ready** – Built entirely using the new Svelte 5 reactivity system (_Runes_: `$state`, `$derived`, `$effect`).
- **Modular & Headless-Friendly** – Use the ready-to-go `<ColorPicker />` component or build your own UI using the provided compound components.
- **Smooth Drag Interaction** – Custom pointer handling ensures smooth dragging interactions, including support for touch devices.
- **Lightweight & Accurate** – Powered by [`colord`](https://github.com/omgovich/colord) for fast and precise color manipulation.
- **Tailwind CSS Styling** – Includes clean default styling using Tailwind CSS.

---

## Installation

Install the library using your favorite package manager:

```bash
npm install svelte-simple-color-picker
```

**Note:**  
This library includes default styling using **Tailwind CSS**. Make sure your project already has Tailwind configured.

---

## Basic Usage

The easiest way to use the library is with the main `<ColorPicker />` component.

```svelte
<script lang="ts">
	import { ColorPicker } from 'svelte-simple-color-picker';

	// Svelte 5 reactive state
	let myColor = $state('#3b82f6');
</script>

<div class="w-64 p-4">
	<ColorPicker value={myColor} showAlpha={true} onChange={(newColor) => (myColor = newColor)} />

	<p class="mt-4">Selected color: {myColor}</p>
</div>
```

---

## Advanced Usage (Compound Components)

If you are building a highly customized UI (such as a **design editor**, **website builder**, or **custom design system**), you can compose your own color picker using the provided sub-components.

```svelte
<script lang="ts">
	import { setContext } from 'svelte';
	import {
		ColorStore,
		SaturationArea,
		HueSlider,
		AlphaSlider,
		ColorInput
	} from 'svelte-simple-color-picker';

	// 1. Initialize the ColorStore as the main state manager
	const colorStore = new ColorStore('#ff0000');

	// 2. Provide it via context so child components can access it
	setContext('COLOR_CTX', colorStore);
</script>

<div class="flex max-w-sm flex-col gap-4">
	<SaturationArea />

	<div class="flex items-center gap-2">
		<div class="flex flex-1 flex-col gap-2">
			<HueSlider />
			<AlphaSlider />
		</div>

		<div
			class="h-10 w-10 rounded-full shadow-inner"
			style="background-color: {colorStore.hex};"
		></div>
	</div>

	<ColorInput />
</div>
```

---

## API Reference

### `<ColorPicker />` Props

| Prop        | Type                    | Default     | Description                                                          |
| ----------- | ----------------------- | ----------- | -------------------------------------------------------------------- |
| `value`     | `string`                | `"#ffffff"` | Initial HEX color value (supports 6 or 8 digit hex including alpha). |
| `onChange`  | `(hex: string) => void` | `undefined` | Callback triggered whenever the color changes.                       |
| `showAlpha` | `boolean`               | `true`      | If `false`, the opacity/alpha slider will be hidden.                 |

---

## Exports

The library exports the following components and utilities:

- `ColorPicker` — Main ready-to-use component
- `SaturationArea` — Saturation and value selection area
- `HueSlider` — Hue selection slider
- `AlphaSlider` — Opacity/alpha slider
- `ColorInput` — Manual HEX color input
- `ColorStore` — State manager built with `$state`

---

## Contributing

Contributions are always welcome!

If you find a bug or want to suggest a new feature:

1. Open an **Issue**
2. Submit a **Pull Request**

All contributions are appreciated.

---

## 📄 License

MIT License © 2026

---
