

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DxmPv6sk.js","_app/immutable/chunks/BS7pTN47.js","_app/immutable/chunks/2yEmqhgO.js"];
export const stylesheets = [];
export const fonts = [];
