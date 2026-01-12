<template>
<v-layout>
    
    <AppBar @toggle-drawer="toggleDrawer = !toggleDrawer"/>
    <NavDrawerSide :drawerToggle=toggleDrawer />
    <v-main  style="height: 100%; min-height: 100vh">
      <LineUp />
      <v-container fluid>
        
         <slot /> 
        </v-container>
    </v-main>
  </v-layout>
      <Footer />

</template>

<script setup lang="ts">
const toggleDrawer = ref(true)

</script>

<style scoped>

</style>