import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),eslint()],
  define: {
    'import.meta.env.VITE_SUPABASE_API_URL': JSON.stringify(process.env.VITE_SUPABASE_API_URL),
    'import.meta.env.VITE_SUPABASE_API_KEY': JSON.stringify(process.env.VITE_SUPABASE_API_KEY),
  },
})
