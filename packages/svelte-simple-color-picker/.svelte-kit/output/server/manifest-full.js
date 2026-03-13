export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.B-JdovhL.js",app:"_app/immutable/entry/app.DTbBsuq3.js",imports:["_app/immutable/entry/start.B-JdovhL.js","_app/immutable/chunks/DsG_57lb.js","_app/immutable/chunks/2yEmqhgO.js","_app/immutable/chunks/BeJP87K5.js","_app/immutable/entry/app.DTbBsuq3.js","_app/immutable/chunks/2yEmqhgO.js","_app/immutable/chunks/CIt93s07.js","_app/immutable/chunks/BS7pTN47.js","_app/immutable/chunks/BeJP87K5.js","_app/immutable/chunks/ds937LWW.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
