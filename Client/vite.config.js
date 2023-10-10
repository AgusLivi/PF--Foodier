import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import axios from 'axios';

// // axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = "https://foodier-back-deploy.onrender.com/";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
