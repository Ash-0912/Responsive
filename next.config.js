/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav:true,
  aggressiveFrontEndNavCaching:true,
  reloadOnOnline:true,
  disable:false,
  workboxOptions:{
    disableDevLogs:true,
  },

});


const nextConfig = {
    output:'export',
    
  }

  module.exports = withPWA(nextConfig);