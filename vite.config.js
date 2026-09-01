import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

// https://vite.dev/config/
export default defineConfig({
  cacheDir: join(tmpdir(), 'sky-explore-vite-cache'),
  plugins: [react()],
  build: {
    // Stable (non-content-hashed) output filenames. The prerendered static
    // HTML committed to public/ hardcodes <script>/<link> src paths captured
    // from a local build; Vercel's own build runs independently and can
    // produce different content hashes for the same source (observed: CRLF
    // vs LF line-ending differences surviving into literal string content,
    // e.g. SeoSchema's JSON-LD), which 404s those exact filenames on Vercel
    // and silently falls through to the SPA rewrite (200 text/html instead
    // of JS) -- breaking React mounting in production. Stable filenames
    // remove the dependency on hash agreement between build environments.
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
