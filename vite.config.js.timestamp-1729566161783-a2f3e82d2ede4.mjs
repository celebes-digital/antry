// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/vue/antry/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/vue/antry/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///D:/vue/antry/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///D:/vue/antry/node_modules/unplugin-auto-import/dist/vite.js";
import { PrimeVueResolver } from "file:///D:/vue/antry/node_modules/@primevue/auto-import-resolver/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/vue/antry/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    Components({
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: ["./src/components"],
      resolvers: [PrimeVueResolver()],
      directoryAsNamespace: true
    }),
    AutoImport({
      include: [
        /\.vue$/,
        /\.vue\?vue/
        // .vue
      ],
      imports: [
        "vue",
        "vue-router",
        {
          "axios": [["default", "axios"]],
          "pinia": ["mapState", "mapGetters", "mapMutations", "mapActions"],
          "@vueuse/integrations/useIDBKeyval": ["useIDBKeyval"],
          "@vueuse/core": ["useCloned", "useTimeAgo"]
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx2dWVcXFxcYW50cnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHZ1ZVxcXFxhbnRyeVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovdnVlL2FudHJ5L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnO1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB7IFByaW1lVnVlUmVzb2x2ZXIgfSBmcm9tICdAcHJpbWV2dWUvYXV0by1pbXBvcnQtcmVzb2x2ZXInO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS9dLFxuICAgICAgZGlyczogWycuL3NyYy9jb21wb25lbnRzJ10sXG4gICAgICByZXNvbHZlcnM6W1ByaW1lVnVlUmVzb2x2ZXIoKV0sXG4gICAgICBkaXJlY3RvcnlBc05hbWVzcGFjZTogdHJ1ZSxcbiAgICB9KSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgL1xcLnZ1ZSQvLFxuICAgICAgICAvXFwudnVlXFw/dnVlLywgLy8gLnZ1ZVxuICAgICAgXSxcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtcm91dGVyJyxcbiAgICAgICAge1xuICAgICAgICAgICdheGlvcyc6IFtbJ2RlZmF1bHQnLCAnYXhpb3MnXV0sXG4gICAgICAgICAgJ3BpbmlhJzogWydtYXBTdGF0ZScsICdtYXBHZXR0ZXJzJywgJ21hcE11dGF0aW9ucycsICdtYXBBY3Rpb25zJ10sXG4gICAgICAgICAgJ0B2dWV1c2UvaW50ZWdyYXRpb25zL3VzZUlEQktleXZhbCc6IFsndXNlSURCS2V5dmFsJ10sXG4gICAgICAgICAgJ0B2dWV1c2UvY29yZSc6IFsndXNlQ2xvbmVkJywgJ3VzZVRpbWVBZ28nXSxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICB9KVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0TixTQUFTLGVBQWUsV0FBVztBQUUvUCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyx3QkFBd0I7QUFOb0csSUFBTSwyQ0FBMkM7QUFTdEwsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBLE1BQ1QsU0FBUyxDQUFDLFVBQVUsWUFBWTtBQUFBLE1BQ2hDLE1BQU0sQ0FBQyxrQkFBa0I7QUFBQSxNQUN6QixXQUFVLENBQUMsaUJBQWlCLENBQUM7QUFBQSxNQUM3QixzQkFBc0I7QUFBQSxJQUN4QixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxVQUNFLFNBQVMsQ0FBQyxDQUFDLFdBQVcsT0FBTyxDQUFDO0FBQUEsVUFDOUIsU0FBUyxDQUFDLFlBQVksY0FBYyxnQkFBZ0IsWUFBWTtBQUFBLFVBQ2hFLHFDQUFxQyxDQUFDLGNBQWM7QUFBQSxVQUNwRCxnQkFBZ0IsQ0FBQyxhQUFhLFlBQVk7QUFBQSxRQUM1QztBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
