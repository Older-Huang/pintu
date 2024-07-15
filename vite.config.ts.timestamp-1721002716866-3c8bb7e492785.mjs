// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/stady/project/jigsaw/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/stady/project/jigsaw/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/stady/project/jigsaw/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueDevTools from "file:///E:/stady/project/jigsaw/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import dts from "file:///E:/stady/project/jigsaw/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/stady/project/jigsaw/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    dts({
      include: ["src/packages/**/*.{vue, ts}"]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    assetsInlineLimit: 1048576,
    outDir: "dist",
    lib: {
      entry: fileURLToPath(new URL("./src/packages/index.ts", __vite_injected_original_import_meta_url)),
      name: "Jigsaw",
      fileName: "[name]-[chunkname:7]"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxzdGFkeVxcXFxwcm9qZWN0XFxcXGppZ3Nhd1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcc3RhZHlcXFxccHJvamVjdFxcXFxqaWdzYXdcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3N0YWR5L3Byb2plY3Qvamlnc2F3L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdnVlSnN4KCksXG4gICAgdnVlRGV2VG9vbHMoKSxcbiAgICBkdHMoe1xuICAgICAgaW5jbHVkZTogWydzcmMvcGFja2FnZXMvKiovKi57dnVlLCB0c30nXVxuICAgIH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDEwNDg1NzYsXG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9wYWNrYWdlcy9pbmRleC50cycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgbmFtZTogJ0ppZ3NhdycsXG4gICAgICBmaWxlTmFtZTogJ1tuYW1lXS1bY2h1bmtuYW1lOjddJ1xuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogJ1Z1ZSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1AsU0FBUyxlQUFlLFdBQVc7QUFFbFMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFNBQVM7QUFONkksSUFBTSwyQ0FBMkM7QUFTOU0sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osSUFBSTtBQUFBLE1BQ0YsU0FBUyxDQUFDLDZCQUE2QjtBQUFBLElBQ3pDLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsbUJBQW1CO0FBQUEsSUFDbkIsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0gsT0FBTyxjQUFjLElBQUksSUFBSSwyQkFBMkIsd0NBQWUsQ0FBQztBQUFBLE1BQ3hFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
