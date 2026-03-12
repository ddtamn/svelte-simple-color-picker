<script lang="ts">
	import { ColorPicker } from '$lib/index.js';
	let selectedColor = $state('#f96743');
</script>

<main
	class="min-h-screen bg-neutral-50 p-8 font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"
>
	<div class="mx-auto max-w-4xl space-y-12">
		<header class="space-y-4 pt-10 text-center">
			<h1 class="text-4xl font-bold tracking-tight">Svelte Color Picker</h1>
			<p class="text-neutral-500 dark:text-neutral-400">
				Live preview komponen library sebelum di-publish ke NPM.
			</p>
		</header>

		<div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
			<section
				class="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
			>
				<h2 class="mb-6 text-lg font-semibold">Playground</h2>

				<ColorPicker
					value={selectedColor}
					onChange={(newColor) => (selectedColor = newColor)}
					showAlpha={true}
				/>
			</section>

			<section class="space-y-6">
				<div
					class="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
				>
					<h2 class="mb-4 text-lg font-semibold">Hasil Output</h2>

					<div
						class="flex h-48 w-full items-center justify-center rounded-xl border border-black/5 shadow-inner transition-shadow"
						style="background-color: {selectedColor};"
					>
						<span
							class="rounded-lg bg-white/90 px-4 py-2 font-mono font-medium text-neutral-900 shadow-sm backdrop-blur-sm dark:bg-black/80 dark:text-neutral-100"
						>
							{selectedColor}
						</span>
					</div>
				</div>

				<div
					class="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-neutral-100 shadow-sm"
				>
					<h3 class="mb-2 text-sm font-medium text-neutral-400">Nilai State Reaktif:</h3>
					<code class="font-mono text-xl text-emerald-400">{selectedColor}</code>
				</div>
			</section>
		</div>
	</div>
</main>
