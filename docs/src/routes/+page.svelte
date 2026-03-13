<script lang="ts">
  import { ColorPicker } from "svelte-simple-color-picker";

  let color = $state("#ff0000");
</script>

<h1>Docs Site</h1>

<div style="margin-top: 2rem;">
  <h2>Color Picker Demo</h2>
  <ColorPicker value={color} onChange={(val: string) => (color = val)} />
  <p>Selected Color: {color}</p>
</div>
