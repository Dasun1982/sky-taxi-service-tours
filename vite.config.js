import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

// https://vite.dev/config/
export default defineConfig({
  cacheDir: join(tmpdir(), 'sky-explore-vite-cache'),
  plugins: [react()],
})
