import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
proxy:{
  //ye sirf append nahi hoga but application ko lagega ki request bhi ise port se aa rhi hai 
  '/api':'http://localhost:4000',
},
  },
  plugins: [react()],
})
