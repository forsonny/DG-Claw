import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
	root: resolve(import.meta.dirname),
	build: {
		outDir: "dist-spa",
		emptyOutDir: true,
		rollupOptions: {
			input: resolve(import.meta.dirname, "index.html"),
		},
	},
	css: {
		transformer: "postcss",
	},
	server: {
		port: 5173,
		proxy: {
			"/api": {
				target: "http://localhost:3000",
				changeOrigin: true,
			},
			"/ws": {
				target: "ws://localhost:3000",
				ws: true,
			},
		},
	},
});
