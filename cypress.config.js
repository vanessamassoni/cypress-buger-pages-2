const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  
    baseUrl:"https://buger-eats.vercel.app", 
    viewportWidth: 1000, 
    viewportHeight: 660, 
  },
});

