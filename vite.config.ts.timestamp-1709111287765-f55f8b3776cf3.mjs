// vite.config.ts
import { defineConfig } from "file:///D:/Workarea_v2/Shopee-Clone-ReactJS-Super/client/node_modules/vitest/dist/config.js";
import react from "file:///D:/Workarea_v2/Shopee-Clone-ReactJS-Super/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { visualizer } from "file:///D:/Workarea_v2/Shopee-Clone-ReactJS-Super/client/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_dirname = "D:\\Workarea_v2\\Shopee-Clone-ReactJS-Super\\client";
var vite_config_default = defineConfig({
  plugins: [react(), visualizer()],
  test: {
    environment: "jsdom",
    // or 'jsdom', 'node'
    setupFiles: ["./vitest.setup.js"]
  },
  server: {
    port: 3e3
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      src: path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXb3JrYXJlYV92MlxcXFxTaG9wZWUtQ2xvbmUtUmVhY3RKUy1TdXBlclxcXFxjbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFdvcmthcmVhX3YyXFxcXFNob3BlZS1DbG9uZS1SZWFjdEpTLVN1cGVyXFxcXGNsaWVudFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovV29ya2FyZWFfdjIvU2hvcGVlLUNsb25lLVJlYWN0SlMtU3VwZXIvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlc3QvY29uZmlnJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgdmlzdWFsaXplcigpXSBhcyBhbnksXG4gIHRlc3Q6IHtcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJywgLy8gb3IgJ2pzZG9tJywgJ25vZGUnXG4gICAgc2V0dXBGaWxlczogWycuL3ZpdGVzdC5zZXR1cC5qcyddXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDBcbiAgfSxcbiAgY3NzOiB7XG4gICAgZGV2U291cmNlbWFwOiB0cnVlXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgc3JjOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsa0JBQWtCO0FBSjNCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBQUEsRUFDL0IsTUFBTTtBQUFBLElBQ0osYUFBYTtBQUFBO0FBQUEsSUFDYixZQUFZLENBQUMsbUJBQW1CO0FBQUEsRUFDbEM7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
