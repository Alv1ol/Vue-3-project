<template>
    <div id="app">
      <router-view/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  };
  </script>
  
  <style lang="scss">
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
  }
  #app {
    margin: 20px;
  }
  </style>
  