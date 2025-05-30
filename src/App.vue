<template>
<div class="flex flex-col min-h-screen bg-gray-900">
  <MenuHeader/>
  <div class="main flex-grow">
    <router-view></router-view>
  </div>
  <FooterComponent class="bg-gray-900 border-t border-gray-800"/>
</div>
</template>

<script setup>
import MenuHeader from './components/MenuHeader.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<style>
body {
  background-color: #111827;
  color: #fff;
}
</style>